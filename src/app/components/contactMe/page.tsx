"use client";
import ScrollToTopButton from "../scrollToTopButton";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./modal";
import ContactMeForm from "./form";

export default function ContactMe() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <div
      id="contactMe"
      className="flex justify-center items-center md:min-h-screen md:mx-auto py-3"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white rounded-md shadow-md"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
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
  );
}
