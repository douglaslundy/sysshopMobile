import React, { Component } from 'react'
import { Container, Input, InputContainer, Logo, Search } from './styled'

const logo = require("../../../../assets/images/horizontal-logo.png")
const serach = require("../../../../assets/icons/search.png")

export class Header extends Component {
  render() {
    return (
      <Container>
        <Logo source={logo} />
        
        <InputContainer>
            <Input placeholder='Pesquisa' placeholderTextColor="#c0c0c1" />
            <Search source={serach} />
        </InputContainer>
      </Container>
    )
  }
}

export default Header