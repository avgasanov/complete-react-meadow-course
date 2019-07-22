import React from 'react'
import Modal from 'react-modal';
import { AST_PropAccess } from 'terser';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.clearSelectedState}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearSelectedState}>Okay</button>
        </Modal>
);

export default OptionModal;