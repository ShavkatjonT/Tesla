import React from 'react';
import styled from 'styled-components';
import Section from './Section';
const Home = () => {
    return (
        <Container>
            <Section
                title="Modal S"
                description="Order Online for Tuchless Deliver"
                beckgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"

            />

            <Section
                title="Modal Y"
                description="Order Online for Tuchless Deliver"
                beckgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Modal 3"
                description="Order Online for Tuchless Deliver"
                beckgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Modal X"
                description="Order Online for Tuchless Deliver"
                beckgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Lowest Cost Solar Panels is America"
                description="Money-back guarantee"
                beckgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
             <Section
                title="Solar for New Roofs"
                description="Solar Roofs Const Less Than a New Roof Plus Solar Panels"
                beckgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
             <Section
                title="Accessories"
                description=""
                beckgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />

        </Container>
    );
};



export default Home;

const Container = styled.div`
    height:100vh;


`