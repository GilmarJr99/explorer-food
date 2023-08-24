import React from 'react';
import {  Container, Form } from './styles';
import Polygon_Logo from '../../assets/images/Polygon1.png';
import Input from '../../components/Input';

export function SignIn() {
  return (   
      <Container>      
            <Form>
              <header>
                <img src={Polygon_Logo} alt="" />
                <h1>food explorer</h1>
              </header>
              <p>Email</p>   
              <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" /> 
              <p className="password">Senha</p>
              <Input type="email" placeholder="No mínimo 6 caracteres" /> 
              <button type='button'>Entrar</button>
              <footer>
                 Criar uma conta 
              </footer>        
            </Form>           
      </Container>  
     
  );
}
