import React from 'react'
import { InputContainer } from './styles';

function Input({value, onChange}){
  return (
    <InputContainer>
      <input value={value} onChange={onChange} />
    </InputContainer>
  )
}

export default Input

//parei em Criando Funcao de Buscar Repositorios