import React from 'react'
import { ArrowIconDisabled, DropDownDisabled, DropDownDisabledContainer, InputDisabled, PlaceholderDisabled } from './styled'

const arrowIcon = require("../../../../../assets/icons/arrow-down.png")

const FieldsDisabled = () => {

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
      <DropDownDisabledContainer>
        <DropDownDisabled
          setSelected={() =>{}}
          data={[]}
          placeholder='Seus endereços'
          arrowicon={<ArrowIconDisabled source={arrowIcon}/>}
        />
      </DropDownDisabledContainer>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  )
}

export default FieldsDisabled;