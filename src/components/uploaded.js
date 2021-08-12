import React, { useState, useRef } from 'react';
import copy from "copy-to-clipboard"; 
import BoxWrap from "./box_wrap";

const URL_HOST_IMAGE = 'https://rest-node-hihihoho.herokuapp.com'

function Uploaded({ uploadedFile }) {
    const TextCopy = useRef(null)
    
    const copyToClipboard = () => {
        //console.log(TextCopy.current.value)
       copy(TextCopy.current.value);
    }

    return (
        <BoxWrap>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#219653" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <h3 className="title title-uploaded">Uploaded Successfully!</h3>
            <img className="success-image" src={`${URL_HOST_IMAGE}/${uploadedFile.filePath}`} alt="image uploaded"/>
            <div className="clipboard">
                <input ref={TextCopy} type="text" className="link" value={`${URL_HOST_IMAGE}/${uploadedFile.filePath}`} />
                {/* <p className="link">{`${URL_HOST_IMAGE}/${uploadedFile.filePath}`}</p> */}
                <button className="clipboard-btn" onClick={copyToClipboard}>Copy Link</button>
            </div>
        </BoxWrap>
    )
}

export default Uploaded