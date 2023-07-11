import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input, InputContainer, InputMask } from './styled'

const Form = () => {
    const [phone, setPhone] = useState('');
    return (
        <>
            <InputContainer>
                <Input placeholder='Nome e Sobrenome' placeholderTextColor="#c0c0c1" />
            </InputContainer>
            <InputContainer>
                <Input placeholder='Email' placeholderTextColor="#c0c0c1" />
            </InputContainer>
            <InputContainer>
                <InputMask type='cel-phone'
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) 99999-9999'
                    }}
                    placeholder='(xx) xxxxx-xxxx'
                    placeholderTextColor="#c0c0c1"
                    value={phone}
                    onChangeText={(value) => {
                        setPhone(value)
                    }}
                />
            </InputContainer>
                <InputContainer>
                    <Input placeholder='Senha' secureTextEntry placeholderTextColor="#c0c0c1" />
                </InputContainer>
                <InputContainer>
                    <Input placeholder='Confirmação de senha' secureTextEntry placeholderTextColor="#c0c0c1" />
                </InputContainer>
        </>
    )
}

export default Form