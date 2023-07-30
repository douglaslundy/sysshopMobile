import { View, Text } from 'react-native'
import React from 'react'
import {
    Container,
    InfoLikeContainer,
    LikeButton,
    LikeIcon,
    ProductImage,
    ProductInfoContainer,
    ProductPrice,
    ProductPriceTitleContainer,
    ProductTitle,
    PublishText,
    SellerInfoContainer,
    SellerName
}
    from './styled'
import { Alert } from 'react-native'
import { ProductType } from '..';

const like = require("../../../../../assets/icons/like.png");
const liked = require("../../../../../assets/icons/liked.png");

interface DataProps {
    data: ProductType;
}

const ProductCard = ({data}: DataProps) => {
  return (
    <Container activeOpacity={0.85}onPress={() => {
        Alert.alert('Você clikou em produto')
    }}>
        <ProductImage
            source={{
                uri: data.productImage,
            }}
        />
        <ProductInfoContainer>
            <ProductPriceTitleContainer>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
            </ProductPriceTitleContainer>
            <InfoLikeContainer>
                <SellerInfoContainer>
                    <PublishText>Publicado em {data.publishedData} por:</PublishText>
                    <SellerName>{data.sellerName}</SellerName>
                </SellerInfoContainer>
                {!data.liked ? (
                    <LikeButton onPress={() => {
                        Alert.alert('Você deu Like')
                    }}>
                        <LikeIcon source={like} />
                    </LikeButton>
                ) : (
                    <LikeButton>
                        <LikeIcon source={liked} />
                    </LikeButton>
                )}
            </InfoLikeContainer>
        </ProductInfoContainer>
    </Container>
  )
}

export default ProductCard