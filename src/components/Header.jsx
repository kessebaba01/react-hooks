import React from 'react'
import { StyledHeader } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
function Header() {
  return (
    <StyledHeader>
        <Container>
        <Nav>
            <Logo src='./images/logo.svg' alt='' />
            <Button>Try It Free</Button>
        </Nav>
        </Container>
    </StyledHeader>
  )
}

export default Header