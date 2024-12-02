import { FC, useRef, useState } from "react";
import UploadList from "./uploadList";
import axios from "axios";
import Dragger from "./dragger";

type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: UploadFile) => void;
  onSuccess?: (data: any, file: UploadFile) => void;
  onError?: (err: any, file: UploadFile) => void
  onChange?: (file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: {[key: string]: any};
  name?: string;
  data?: {[key: string]: any};
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
  children?: React.ReactNode;
}

export const Upload: FC<UploadProps> = ({
  action, 
  defaultFileList, 
  onChange, 
  beforeUpload, 
  onProgress, 
  onSuccess, 
  onError, 
  onRemove,
  headers,
  name = 'file',
  data,
  withCredentials,
  accept,
  multiple,
  children,
  drag
}) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(preList => {
      return preList.map(file => {
        if(file.uid === updateFile.uid) {
          return {...file, ...updateObj}
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if(fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) { return }
    uploadFiles(files)
    if(fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList(preList => {
      return preList.filter(item => item.uid !== file.uid)
    })
    if(onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if(!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if(result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if(result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    }
    //setFileList([_file, ...fileList])
    setFileList(preList => {
      return [_file, ...preList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if(data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = e.total ? Math.round((e.loaded * 100) / e.total) || 0 : 0
        if(percentage < 100) {
          updateFileList(_file, {percent: percentage, status: 'uploading'})
          if(onProgress) {
            onProgress(percentage, _file)
          }
        }
      },
    }).then(res => {
      updateFileList(_file, {status: 'success', response: res.data})
      if(onSuccess) {
        onSuccess(res.data, _file)
      }
      if(onChange) {
        onChange(_file)
      }
    }).catch(error => {
      console.error(error)
      updateFileList(_file, {status: 'error', error})
      if(onError) {
        onError(error, _file)
      }
      if(onChange) {
        onChange(_file)
      }
    })
  }
  return(
    <div
      className="viking-upload-component"
    >
      <div className="viking-upload-input"
        style={{display: 'inline-block'}}
        onClick={handleClick}
      >
        {drag ? 
        <Dragger onFile={(files) => {uploadFiles(files)}}>
          {children}
        </Dragger> : 
        children}
      </div>
      <input
        className="viking-file-input"
        data-testid="viking-file-input"
        style={{display: 'none'}}
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
      />
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}
export default Upload;