import React from "react"
import axios from "axios"

function App() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
  return (
    <div className="App">
      <input type="file" name="file" onChange={handleFileChange} />
    </div>
  );
}

export default App;
