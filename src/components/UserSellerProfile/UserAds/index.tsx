import React from 'react'
import { Card, Container, Image, InfoContainer, InfoIconContainer, NoAds, Price, PricetitleContainer, PublishedText, Title, TotalAds, IconButton, Icon } from './styled';

const trashIcon = require("../../../../assets/icons/trash.png");
const favoriteIcon = require("../../../../assets/icons/like.png");

interface Products {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface ProductProps {
  products: Products[];
  seller: boolean
}

const UserAds = ({ products, seller }: ProductProps) => {
  return (
    <Container>
      <TotalAds>Você tem {products.length} Anúncios</TotalAds>

      {products.length > 0 ? (
        products.map((product) => (
          <Card key={product.id} activeOpacity={0.85} onPress={() => { }}>
            <Image
              source={{
                uri: product.productImage,
              }}
            />

            {
              !seller ? (
                <InfoContainer>
                  <PricetitleContainer>
                    <Price>R$ {product.price}</Price>
                    <Title numberOfLines={2}>{product.title}</Title>
                  </PricetitleContainer>

                  <InfoIconContainer>
                    <PublishedText>{product.publishedData}</PublishedText>

                    <IconButton activeOpacity={0.85} onPress={() => { }}>
                      <Icon source={trashIcon} />
                    </IconButton>
                  </InfoIconContainer>
                </InfoContainer>
              ) : (
                <InfoContainer>
                  <PricetitleContainer>
                    <Price>R$ {product.price}</Price>
                    <Title numberOfLines={2}>{product.title}</Title>
                  </PricetitleContainer>

                  <InfoIconContainer>
                    <PublishedText>{product.publishedData}</PublishedText>

                    <IconButton activeOpacity={0.85} onPress={() => { }}>
                      <Icon source={favoriteIcon} />
                    </IconButton>
                  </InfoIconContainer>
                </InfoContainer>
              )
            }


          </Card>
        ))
      )
        :
        (
          <NoAds>Você não tem anúncios</NoAds>
        )
      }
    </Container>
  );
};

export default UserAds;