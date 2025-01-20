'use client';

import { useState } from 'react';
import InputForm from './inputform';
import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const Modal = ({ session }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={classes.body}>
                <button
                    className={classes.btn}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    체중 입력
                </button>
            </div>
            {isModalOpen && <ModalContent session={session} setIsModalOpen={setIsModalOpen} />}
        </>
    );
};

const ModalContent = ({ session, setIsModalOpen }) => {
    return createPortal(
        <div
            className={classes.modal}
            onClick={() => {
                setIsModalOpen(false);
            }}
        >
            <InputForm session={session} />
        </div>,
        document.body
    );
};

export default Modal;
