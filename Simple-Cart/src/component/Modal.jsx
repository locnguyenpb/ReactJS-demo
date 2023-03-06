import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const CloseStyles = styled.button`
  background: unset;
  border: unset;
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 14px;
`

const ConfirmStyles = styled.button`
  width: 100%;
  border: unset;
  margin-top: 15px;
`

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 10;
`;

const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid black;
  padding: 35px;
  z-index: 10;
`;

export default function Modal({ open, children, onClose, onConfirm }) {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <OverlayStyles></OverlayStyles>
      <ModalStyles>
      <CloseStyles onClick={onClose}>X</CloseStyles>
        {children}
      <ConfirmStyles onClick={onConfirm}>OK</ConfirmStyles>
      </ModalStyles>
    </>,
    document.getElementById('portal')
  )
}
