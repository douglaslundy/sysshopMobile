import React from 'react'
import { InputDisabled, PlaceholderDisabled } from './styled'
import DropDownComponent from '../../../common/DropDownComponent'

const FieldsDisabled = () => {

  const Data = [
    {
        value: "Teste 1",
    },
    {
        value: "Teste 2",
    },
    {
        value: "Teste 3",
    },
    {
        value: "Teste 4",
    },
];

  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>Douglas Lundy</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>douglaslundy@gmail.com</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>(35) 98429-7193</PlaceholderDisabled>
      </InputDisabled>
      <DropDownComponent data={Data} placeholder='Selecione o endereço' />
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  )
}

export default FieldsDisabled;