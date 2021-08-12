import React from 'react'
import BoxWrap from './box_wrap'
import DragDropFiles from './drag_drop_file'

function FileUpload ({ onsubmit }){
    
    const onchanges =(e)=>{
        //console.log(e.target.files[0])
        onsubmit(e.target.files[0])
    }

    const handleDropUpload =(file)=>{
        //console.log(file)
        onsubmit(file)
    }

    return(
        <BoxWrap>
            <h3 className="title">Upload your image</h3>
            <p className="format-file">File should be Jpeg, Png,...</p>
            <DragDropFiles handleDropUpload={handleDropUpload}/>
            <p className="or">or</p>
            <div className="file-input">
                <input type="file" onChange={onchanges} id="file" className="file"/>
                <label htmlFor="file">Choose a file</label>
            </div>
        </BoxWrap>
    )
}

export default FileUpload