import { useState } from "react";
import Modal from 'react-modal';
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps{
  onOpenTransactionModal: ()=> void;
}

export function Header({onOpenTransactionModal}: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logo} alt="logot" />
        <button 
          type="button" 
          onClick={onOpenTransactionModal}
          >Nova transação</button>
        
      </Content>
    </Container>
  );
}
