import React from "react";

const Modal = ({ open, onClose, children }) => {
  const handleClose = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };
  if (!open) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed top-0 left-0 w-full h-full bg-[#00000099] flex items-center justify-center z-20 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
