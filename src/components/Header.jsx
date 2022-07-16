import React, { useState, useSelector } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const [BurgerStatus, setBurgerStatus] = useState(false)

    const Object = [
        {
            name: "Model S"
        },
        {
            name: "Model 3"
        },
        {
            name: "Model X"
        },
        {
            name: "Model Y"
        },

    ]


    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                {
                    Object.map((e, i) => (
                        <a key={i} href="#">{e.name}</a>
                    ))
                }
            </Menu>

            <RightMenu>

                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

                <CustomMenu onClick={() => setBurgerStatus(true)}>
                </CustomMenu>
                   

            </RightMenu>

            <BurgerNav show={BurgerStatus}>
                <CustomWrapper>
                    <CustomColse onClick={() => setBurgerStatus(false)}>X</CustomColse>
                </CustomWrapper>
                {
                    Object.map((e, i) => (
                        <li key={i}><a href="#">{e.name}</a></li>
                    ))
                }
                <li><a href="#">Existion Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cubertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgerNav>


        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    z-index:1;
    padding:0 20px;
    align-items:center;
    top:0;
    justify-content:space-between;
    left:0;
    right:0;

`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }

    @media(max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:800px;
        text-transform:uppercase;
        margin-right:10px;
    
    };

    @media(max-width:400px){
        a{
            display:none;
        }
    };

`
const CustomMenu = styled(AiOutlineMenu)`
    cursor:pointer;

`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:#fff;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? "translateX(0)" : "translateX(100%)"};

    transition:transform 0.3s ease-in;

    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);

        a{
            font-weight:600;
        }
    
    }

`
const CustomColse = styled.div`
    cursor:pointer;
`

const CustomWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`