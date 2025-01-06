'use client'

import { useState } from "react";
import InputForm from "./inputform";
import classes from "./Modal.module.css"

const Modal = ({session}) => {
    const [isMaodalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
           <button onClick={() => {
            setIsModalOpen(true) 
           }}>체중 입력</button>
           {isMaodalOpen && <ModdalContent setIsModalOpen={setIsModalOpen} session={session}/>}
        </div>
    )
}

const ModdalContent = ({session,setIsModalOpen}) => {
    return (
        <div className={classes.modal} onClick={()=>{setIsModalOpen(false)}}>
            <InputForm session={session} setIsModalOpen={setIsModalOpen}  />
        </div>
    )
}

export default Modal