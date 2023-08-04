import { View, Text, Alert } from 'react-native'
import React from 'react'
import { InputContainer } from '../styled';
import { AddresText, Input } from './styled';
import DefaultButton from '../../../common/DefaultButton';

const FieldsEnabled = () => {
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
            <InputContainer>
                <Input value='DropDown' />
            </InputContainer>
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
                buttonHandle={() => {Alert.alert('Opções alteradas com sucerro')} }
                buttonType='primary'
                marginVertical={ 10}
            />

        </>
    );
};

export default FieldsEnabled;