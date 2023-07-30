import { View, Text } from 'react-native'
import React from 'react'
import { Container, DefaultText, Hr, MainInfoContainer, Name, NamePhoneContainer, Phone } from './styled'
import { AirbnbRating } from 'react-native-ratings'

const ProfileInfo = () => {
    const Rate = 4;
    return (
        <>
            <Container>
                <MainInfoContainer>
                    <NamePhoneContainer>
                        <Name>Douglas Lundy</Name>
                        <Phone>(35)98429-7193</Phone>
                    </NamePhoneContainer>
                    {!Rate ? (
                        <DefaultText>Sem Avaliações</DefaultText>
                    ) : (
                        <AirbnbRating selectedColor='#5F96ED'
                            showRating={false}
                            isDisabled={true}
                            size={16}
                            defaultRating={Rate}
                            starContainerStyle={{
                                paddingTop: 4,
                            }}
                        />
                    )
                    }
                </MainInfoContainer>
                <DefaultText>Usuário desde 01/01/2023</DefaultText>
                <DefaultText>04 anúncios ativos</DefaultText>
            </Container>
            <Hr />
        </>
    );
}

export default ProfileInfo