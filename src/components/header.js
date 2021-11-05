import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'

function Header() {
    return (
        <Container>
            <Logo>
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
            </Logo>
            <CenterMenu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </CenterMenu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenuIcon />
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    width: 100vw;
`
const Logo = styled.div``
const CenterMenu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`
const CustomMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`