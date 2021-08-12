import React from 'react'
import BoxWrap from './box_wrap'

const Loading =()=>{
    return(
        <BoxWrap>
            <h2 className="title title-loading">Uploading...</h2>
            <div className="parent-loading">
                <div className="child-loading"></div>
            </div>
        </BoxWrap>
    )
}

export default Loading