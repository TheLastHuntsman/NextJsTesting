import { motion } from 'framer-motion';


type backdropProps = {
    onClick: any;
    children?: any;
  };


const backdrop = ({ children, onClick}: backdropProps) => {
    return (
        <motion.div
            className="backdrop
            h-full w-full absolute t-0 l-0
            flex justify-center items-center
            bg-[#000000e1]"

            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {
            children
            }
        </motion.div>
    )
}

export default backdrop;