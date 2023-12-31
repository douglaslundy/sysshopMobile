import React from 'react'
import { AdsContainer, Container, DenounceText } from './styled'
import DefaultTitle from '../../components/common/DefaultTitle'
import ProfileInfo from '../../components/common/ProfileInfo'
import UserAds from '../../components/UserSellerProfile/UserAds'
import DefaultButton from '../../components/common/DefaultButton'
import NavBar from '../../components/common/NavBar'

const Data = [
  {
    id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 3 jogos acompanhando",
    publishedData: "14/02/23",
  },
  {
    id: "2",
    productImage:
      "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
    price: "2600",
    title: "Playstation 5 novo com 1 jogo acompanhando",
    publishedData: "14/02/23",
  },
  {
    id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 2 jogos acompanhando",
    publishedData: "14/02/23",
  },
];


const SellerProfile = () => {
  return (
   <>
     <Container contentContainerStyle={{ paddingBottom: 120 }}>
      <DefaultTitle title='Perfil do Vendedor' fontSize={20} />
      <ProfileInfo />
      <AdsContainer>
        <UserAds products={Data} seller />
      </AdsContainer>
      <DefaultButton
        buttonHandle={() => { }}
        buttonText='Fale com vendedor'
        buttonType='primary'
        marginVertical={10}
      />
      <DenounceText>Algo Estranho? Denuncie Aqui!</DenounceText>
    </Container>
    <NavBar />
   </>
  )
}

export default SellerProfile