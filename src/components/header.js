/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
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
                <CustomMenuIcon onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#"> Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#">  Trade-in</a></li>
                <li><a href="#"> Cybertruck</a></li>
                <li><a href="#"> Roadster</a></li>
                <li><a href="#"> Semi</a></li>
                <li><a href="#"> Charging Dock</a></li>
            </BurgerNav>
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
    z-index: 1;
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

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background : white;
    width: 300px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    text-align: start;
    transform: ${(props) => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: ease 0.47s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a {
            font-weight: 600;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    flex-flow: row-reverse;
`