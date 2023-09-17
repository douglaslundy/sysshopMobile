import { View, Text, Alert } from 'react-native'
import React from 'react'
import { Container, ContentText, DeleteBtn, DeleteIcon } from './styled'
import { Address } from '..'

const deleteIcon = require("../../../../assets/icons/trash.png")

interface ItemProps {
    item: Address
}

const AddressCard = ({ item }: ItemProps) => {
    return (
        <Container>
            <ContentText>{`Rua: ${item.street} - Nº: ${item.number} \nUF: ${item.state} \nCEP: ${item.cep} `}</ContentText>
            <DeleteBtn onPress={() => {Alert.alert("Clikado")}}>
                <DeleteIcon source={deleteIcon} />
            </DeleteBtn>
        </Container>
    )
}

export default AddressCard