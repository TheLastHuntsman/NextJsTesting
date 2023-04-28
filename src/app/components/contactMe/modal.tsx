import { motion } from 'framer-motion';
import { Children } from 'react';
import Backdrop from '../backdrop/page';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.1,
            type: "spring",
            stiffness: 100
        }
    },
    exit: {
        y: "-100vh",
        opacity: 0
}
}

type modalProps = {
    modalOpen: boolean;
    handleClose: any;
    text: string;
    children?: any;
}
const Modal = ({handleClose, text, modalOpen, children}: modalProps) => {
    return (
        <Backdrop onClick = {handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal
            w-1/2 h-1/2
            flex flex-col justify-center items-center
            "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                {children}
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    )

}

export default Modal;