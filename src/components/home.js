import React from 'react'
import styled from 'styled-components'
import Section from './section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnTxt="Custom order"
                rightBtnTxt="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnTxt="Custom order"
                rightBtnTxt="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnTxt="Custom order"
                rightBtnTxt="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnTxt="Custom order"
                rightBtnTxt="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnTxt="Order order"
                rightBtnTxt="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof costs Less Than a New Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnTxt="Order order"
                rightBtnTxt="Learn more"
            />
            <Section
                title="Accessories"
                description="Solar Roof costs Less Than a New Roof"
                backgroundImg="accessories.jpg"
                leftBtnTxt="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`