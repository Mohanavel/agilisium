import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import {AddExpenseForm} from '../../common';

export function Popup(props) {
    const getData = (data) => {  
        props.getUpdatedData(data);
    }


    return (
        <Modal show={true}>
            <Modal.Header>
                {Object.keys(props.data).length === 0 ? 'Add Details' : 'Update Details' }
                <button type="button" class="close" aria-label="Close" 
                    onClick={() => props.hidePopup(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </Modal.Header>
                <AddExpenseForm data={props.data} length ={props.sendLength} sendData={(data) => getData(data)}/>
        </Modal>
    )
}