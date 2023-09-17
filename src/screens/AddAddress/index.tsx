import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Container, Input, InputContainer, InputMask } from './styled'
import DefaultTitle from '../../components/common/DefaultTitle'
import DefaultButton from '../../components/common/DefaultButton'
import axios from 'axios'

const AddAddress = () => {
  const [fields, setFields] = useState({
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",

  });

  const handleGetAddress = async () => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${fields.cep}/json/`);

    setFields({
      ...fields,
      street: data.logradouro,
      state: data.uf,
      city: data.localidade,
      district: data.bairro,
    });
  };

  return (
    <Container contentContainerStyle={{ paddingBottom: 40 }}>
      <DefaultTitle title='Cadastrar Endereço' fontSize={20} />
      <InputContainer>
        <InputMask
          type="zip-code"
          placeholder="Cep"
          placeholderTextColor="#c0c0c1"
          value={fields.cep}
          onChangeText={(value) => {
            setFields({ ...fields, cep: value.replace(/[^0-9]/g, "") });
          }}
          onBlur={handleGetAddress}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Rua"
          value={fields.street}
          placeholderTextColor="#c0c0c1"
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Nº"
          value={fields.number}
          placeholderTextColor="#c0c0c1"
          keyboardType='number-pad'
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Complemento"
          value={fields.complement}
          placeholderTextColor="#c0c0c1"
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Bairro"
          value={fields.district}
          placeholderTextColor="#c0c0c1"
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Cidade"
          value={fields.city}
          placeholderTextColor="#c0c0c1"
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Estado"
          value={fields.state}
          placeholderTextColor="#c0c0c1"
          maxLength={2}
        />
      </InputContainer>

      <DefaultButton
        buttonText='Cadastrar Endereço'
        buttonType='primary'
        buttonHandle={() => { }}
        marginVertical={30}
      />
    </Container>
  )
}

export default AddAddress