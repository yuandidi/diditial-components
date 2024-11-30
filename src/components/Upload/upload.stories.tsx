import { ComponentProps } from "react";
import Upload, { UploadFile } from "./upload";
import { Meta, StoryObj } from "@storybook/react/*";

type StoryProps = ComponentProps<typeof Upload>;

const meta: Meta<StoryProps> = {
  component: Upload,
  title: "Upload",
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<StoryProps>

const defaultFileList: UploadFile[] = [
  {uid: '123 ', size: 1234, name: 'hello.md', status: 'uploading', percent: 30},
  {uid: '122 ', size: 1234, name: 'world.md', status: 'success', percent: 30},
  {uid: '121 ', size: 1234, name: 'haha.md', status: 'error', percent: 30},
]

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false
  }
  return true
}
const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type })
  return Promise.resolve(newFile)
}

export const DefaultUpload: Story = {
  name: '默认Upload',
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: (file) => {
      console.log('changed')
    },
    defaultFileList: defaultFileList
  },
  render: (args) => (
    <Upload {...args}/>
  )
}