import React, { useState } from 'react';
import Modal from 'react-modal';
export default props => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="page__header">
      <h2 className="page__title">{props.title}</h2>
      <button className="button" type="button" onClick={openModal}>
        About
      </button>
      <Modal className="modal" isOpen={isOpen} onRequestClose={closeModal}>
        {props.children}
        <button
          className="button modal__button"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};
