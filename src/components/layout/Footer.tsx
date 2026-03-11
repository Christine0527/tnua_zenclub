import React from "react";
import styled from "styled-components";
import { Colors } from "../../styles/theme";

const FooterWrapper = styled.footer`
    padding: 48px 0;
    text-align: center;
    color: ${Colors.Gray400};
    font-size: 14px;
`;

export const Footer = () => {
    return (
        <FooterWrapper>
            <p>© 2024 TNUA ZEN CLUB. Made with 🧘 in Beitou.</p>
        </FooterWrapper>
    );
};
