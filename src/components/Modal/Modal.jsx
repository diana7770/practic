import React from "react";
import styled from "styled-components";

const ModalTitle = styled.h2`
  text-align: center;
  color: #240606;
`;

const StylesModal = styled.div`
  width: 340px;
  background-color: #792320ce;
  border-radius: 30px;
  padding: 40px;
  position: relative;
  overflow: hidden;
`;

const Form = styled.form`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`;

const StylesInput = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #471313;
  background-color: #964b4bcc;
  /* ::placeholder {
    color: white;
  } */
`;

const ModalBtnSend = styled.button`
  border-radius: 15px;
  border: none;
  padding: 10px 20px;
  background-color: #3f0c08;
  color: #f4e5d2;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border-radius: 50px;
  border-color: #420606;
`;

const Modal = ({ closeModal, onSubmit }) => (
  <Backdrop onClick={closeModal}>
    <StylesModal onClick={(e) => e.stopPropagation()}>
      <ModalTitle>Залиште заявку</ModalTitle>
      <ModalCloseBtn type="button" onClick={closeModal}>
        X
      </ModalCloseBtn>
      <Form onSubmit={onSubmit}>
        <StylesInput type="text" placeholder="Name" required />
        <StylesInput type="email" placeholder="Email" required />
        <ModalBtnSend type="submit">Відправити</ModalBtnSend>
      </Form>
    </StylesModal>
  </Backdrop>
);

export default Modal;
