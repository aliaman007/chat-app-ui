// components/NewConversationModal.js
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Use your preferred modal library
import { startNewConversation } from '../services/api';

const NewConversationModal = ({ contacts, showModal, handleClose }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleStartConversation = () => {
    // Start a new conversation with the selected contact
    startNewConversation(selectedContact)
      .then((data) => {
        // Handle success, e.g., close modal, show success alert
        handleClose();
      })
      .catch((error) => {
        // Handle error, e.g., show error alert
        console.error('Error starting conversation:', error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Conversation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} onClick={() => setSelectedContact(contact)}>
              {contact.name}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleStartConversation}>Start Conversation</button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewConversationModal;
