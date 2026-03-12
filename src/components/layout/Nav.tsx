import React from "react";
import styled from "styled-components";
import { Smile, Instagram } from "lucide-react";
import { Colors, Media } from "../../styles/theme";

const NavWrapper = styled.nav`
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    max-width: 1024px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    z-index: 50;
    border-radius: 16px;
    padding: 12px 24px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLogo = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    
    div {
        background-color: ${Colors.ZenGreen};
        padding: 6px;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }
    
    span {
        font-weight: 900;
        letter-spacing: -0.05em;
        font-size: 20px;
        color: ${Colors.ZenDarkGreen};
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    
    ${Media.Tablet(`
        display: none;
    `)}
    
    a {
        color: ${Colors.ZenDarkGreen};
        text-decoration: none;
        transition: color 0.3s;
        &:hover {
            color: ${Colors.ZenGreen};
        }
    }
`;

const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const NavIcon = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${Colors.Gray100};
    color: ${Colors.ZenDarkGreen};
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1) rotate(5deg);
        background-color: ${Colors.ZenGreen};
        color: white;
    }
`;

const JoinBtn = styled.a`
    padding: 8px 20px;
    background-color: ${Colors.ZenGreen};
    color: white;
    border-radius: 99px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
        background-color: ${Colors.ZenDarkGreen};
    }
`;

export const Nav = () => {
    return (
        <NavWrapper>
            <NavLogo href="#home">
                <div>
                    <Smile size={20} color="white" />
                </div>
                <span>TNUA ZEN</span>
            </NavLogo>
            
            <NavLinks>
                <a href="#benefits">為什麼禪定？</a>
                <a href="#posters">歷屆海報</a>
                <a href="#schedule">活動資訊</a>
            </NavLinks>

            <NavActions>
                <NavIcon href="https://www.instagram.com/tnua_zenclub?igsh=Y3J2bHZjdGp4aTl0&utm_source=qr" target="_blank">
                    <Instagram size={20} />
                </NavIcon>
                <JoinBtn href="#join">手刀報名</JoinBtn>
            </NavActions>
        </NavWrapper>
    );
};
