import { createGlobalStyle, keyframes } from "styled-components";
import { Colors } from "./theme";

export const move = keyframes`
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(100px, 50px) scale(1.2); }
`;

export const float = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-18px); }
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&family=Noto+Serif+TC:wght@500;900&display=swap');
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-family: 'Noto Sans TC', sans-serif;
        background-color: ${Colors.SoftWhite};
        background-image: radial-gradient(${Colors.ZenGreen} 0.5px, transparent 0.5px);
        background-size: 30px 30px;
        color: ${Colors.TextMain};
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }
`;
