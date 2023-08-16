import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { InputContainer } from '../styled';
import { AddresText, Input } from './styled';
import DefaultButton from '../../../common/DefaultButton';
import DropDownComponent from '../../../common/DropDownComponent';

const FieldsEnabled = () => {
    const [select, setSelect] = useState("");
    const Data = [{ value: "Endereço 1", disabled: true }]
    return (
        <>
            <InputContainer>
                <Input value='Douglas Lundy' />
            </InputContainer>
            <InputContainer>
                <Input value='douglaslundy@gmail.com' />
            </InputContainer>
            <InputContainer>
                <Input value='(35) 98429-7193' />
            </InputContainer>

            <DropDownComponent
                data={Data}
                placeholder='Seus endereços'
                setSelected={setSelect}
            />

            <InputContainer>
                <Input placeholder='Senha'
                    placeholderTextColor="#c0c0c1"
                    secureTextEntry
                />
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder='Nova Senha'
                    placeholderTextColor="#c0c0c1"
                    secureTextEntry
                />
            </InputContainer>
            <InputContainer>
                <Input
                    placeholder='Confirmar Nova Senha'
                    placeholderTextColor="#c0c0c1"
                    secureTextEntry
                />
            </InputContainer>

            <AddresText onPress={() => { Alert.alert("texto clicado") }}>Editar Endereços</AddresText>

            <DefaultButton
                buttonText='Salvar Alterações'
                buttonHandle={() => { Alert.alert('Opções alteradas com sucerro') }}
                buttonType='primary'
                marginVertical={10}
            />

        </>
    );
};

export default FieldsEnabled;