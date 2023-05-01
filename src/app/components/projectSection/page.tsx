"use client";

import ProjCard from "../projCard"
import tempImage from "../../../../public/placeholderProj.jpg";
import ScrollButton from "../scrollButton";



import ScrollToTopButton from "../scrollToTopButton";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../contactMe/contactMeModal";
import ContactMeForm from "../contactMe/contactMeForm";

export default function ProjectSection(){
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };



    return (
        <div
        id="projectSection"
        className="flex flex-col items-center justify-center md:min-h-[90vh]  overflow-auto
        "
      >
        <h1 className="text-center uppercase text-2xl md:text-8xl p-5">Projects</h1>
        <div
          id="projectCards"
          className="grid grid-cols-1 md:grid-cols-3
          text-center justify-center py-2 max-w-7xl gap-3 mx-auto"
        >
          <ProjCard
            image={tempImage}
            title="Hello"
            tabIndex={0}
            info="Placeholder!"
          ></ProjCard>

          <ProjCard
            image={tempImage}
            title="Hello"
            tabIndex={1}
            info="Placeholder!"
          ></ProjCard>
          <ProjCard
            image={tempImage}
            title="Hello"
            tabIndex={2}
            info="Placeholder!"
          ></ProjCard>
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="border shadow-md hover:bg-[#4B7F52] p-5"
        onClick={() => (modalOpen ? close() : open())}
      >
        Get in touch!
      </motion.button>
      {modalOpen && (
        <Modal
        modalOpen={modalOpen}
        handleClose={close}
        text="Hello!"
        >
          <ContactMeForm />
        </Modal>
      )}
    </div>

    )
}