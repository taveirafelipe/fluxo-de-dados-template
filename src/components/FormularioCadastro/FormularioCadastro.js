import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

const onChangeImagem = (event) =>{
  // console.log(event.target.value)
  props.setImagem(event.target.value)
}
const onChangeDescricao = (event) =>{
  // console.log(event.target.value)
  props.setDescricao(event.target.value)
}
const onChangeTitulo= (event) =>{
  // console.log(event.target.value)
  props.setTitulo(event.target.value)
}

const {atualiza} = props;


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
      <StyledLabel htmlFor="foto">
          Título:
          <Input 
            id="titulo" 
            onChange={onChangeTitulo}
            value={props.titulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input 
            id="foto" 
            onChange={onChangeImagem}
            value={props.imagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" 
          onChange={onChangeDescricao}
          value={props.descricao}/>
        </StyledLabel>
        <SendButton onClick={atualiza} >Enviar</SendButton>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro