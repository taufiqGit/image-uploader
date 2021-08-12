import { useRef, useEffect, useState } from 'react'
import image from '../asset/image.svg'

function DragDropFiles({ handleDropUpload }) {
    const DropRef = useRef(null)
    const [dragging, setDragging] = useState(false)
    const [dragCounter, setDragCounter] = useState(0)

    const handleDrag =(e)=>{
        e.preventDefault()
        e.stopPropagation()
        //console.log(e)
    }
    
    const handleDragIn =(e)=>{
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(current => current + 1)
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0){
            setDragging(true)
        }
    }

    const handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragCounter(current => current - 1)
        if (dragCounter === 0) {
            setDragging(false)
        }
       // console.log(e)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0){
            //console.log(e.dataTransfer.files[0])
            handleDropUpload(e.dataTransfer.files[0])
        }
    }

    useEffect(()=>{
        setDragCounter(0)
        let Refs = DropRef.current
        Refs.addEventListener('dragenter', handleDragIn)
        Refs.addEventListener('dragleave', handleDragOut)
        Refs.addEventListener('dragover', handleDrag)
        Refs.addEventListener('drop', handleDrop)
        return ()=>{
            let Refs = DropRef.current
            if (Refs) {
                Refs.removeEventListener('dragenter', handleDragIn)
                Refs.removeEventListener('dragleave', handleDragOut)
                Refs.removeEventListener('dragover', handleDrag)
                Refs.removeEventListener('drop', handleDrop)                  
            }
        }
    }, [])

    return(
        <div ref={DropRef} className={`drag-drop ${dragging ? 'drag-in' : 'drag-out'}`}>
            <img className="image-ilus" src={image} alt="Drag & Drop Your Image"/>
            <p className="text-drag-drop">Drag & Drop your image here</p>
        </div>
    )
}

export default DragDropFiles