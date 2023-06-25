import React from 'react'
import Header from "../../components/common/Header"
import NavBar from '../../components/common/NavBar'
import { Container } from './styled'
import ProductList from '../../components/common/ProductList'
const Home = () => {
  return (
    <Container>
      <Header />
      <ProductList />
      <NavBar />
    </Container>
  )
}

export default Home;