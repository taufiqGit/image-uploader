import React from 'react' 

function BoxWrap({ children }) {
    return(
        <div className="box">
            { children }
        </div>
    )
}

export default BoxWrap