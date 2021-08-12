import React, { useState } from 'react'
import axios from 'axios'
import FileUpload from "./components/upload_images";
import Loading from './components/loading';
import Uploaded from './components/uploaded';

const URL_BE = 'https://rest-node-hihihoho.herokuapp.com'

function App() {
  const [uploadedFile, setUploadedFile] = useState({})

  const [fileupload, setFileupload] = useState(true)
  const [loading, setLoading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const onSubmit = async(file)=>{
      setFileupload(false)
      setLoading(true)
      const formData = new FormData()
      formData.append('file', file)

      try {
          const result = await axios.post(`${URL_BE}/upload`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
         // console.log(result.data)
         // console.log(result)

          const { fileName, filePath } = await result.data

          setUploadedFile({ fileName, filePath })
          setLoading(false)
          setUploaded(true)
          
      } catch (error) {
          if (error.response.status === 500) {
              //console.log(error)
              setLoading(false)
              setUploaded(true)
          } else {
              //console.log(error)
              setLoading(false)
              setUploaded(true)
          }
      }
  }

  return (
    <div className="wrapper">
      { fileupload && <FileUpload onsubmit={onSubmit}/> }
      { loading && <Loading/> }
      { uploaded && <Uploaded uploadedFile={uploadedFile}/> }
    </div>
  );
}

export default App;
