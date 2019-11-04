import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Player = props => {
  const { buttonLabel, className, playerName, bio } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='secondary' onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        centered={true}
        style={{ maxWidth: '900px' }}
      >
        <ModalHeader toggle={toggle}>{playerName}</ModalHeader>
        <ModalBody>{bio}</ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default Player;
