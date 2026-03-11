import React from "react";
import styled from "styled-components";
import { Colors, Media } from "../../styles/theme";
import { Reveal } from "../common/Reveal";

const JoinSectionWrapper = styled.section`
    padding: 160px 0;
    background-color: ${Colors.ZenDarkGreen};
    text-align: center;
    color: white;
`;

const JoinTitle = styled.h2`
    font-family: 'Noto Serif TC', serif;
    font-weight: 900;
    font-size: 72px;
    margin-bottom: 32px;
    line-height: 1.1;
    
    ${Media.Tablet(`
        font-size: 64px;
    `)}

    ${Media.Phone(`
        font-size: 48px;
    `)}
`;

const JoinBigBtn = styled.button`
    background-color: ${Colors.ActiveYellow};
    color: ${Colors.ZenDarkGreen};
    padding: 24px 48px;
    border-radius: 99px;
    font-size: 24px;
    font-weight: 900;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const Join = () => {
    return (
        <JoinSectionWrapper id="join">
            <Reveal>
                <JoinTitle>準備好開始了嗎？</JoinTitle>
                <JoinBigBtn onClick={() => alert("報名成功！✨")}>填寫報名表 ✨</JoinBigBtn>
            </Reveal>
        </JoinSectionWrapper>
    );
};
