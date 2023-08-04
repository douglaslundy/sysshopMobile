import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styled'
import NavBar from '../../components/common/NavBar'
import DefaultTitle from '../../components/common/DefaultTitle'
import ProfileInfo from '../../components/common/ProfileInfo'
import Form from '../../components/UserProfile/Form'

const UserProfile = () => {
  return (
    <>
    <Container contentContainerStyle={{paddingBottom: 140}}>
        <DefaultTitle fontSize={20} title="Meu Perfil" />
        <ProfileInfo />
        <Form />
    </Container>
    <NavBar />
    </>
  )
}

export default UserProfile