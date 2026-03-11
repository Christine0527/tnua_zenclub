import React from "react";
import styled from "styled-components";
import { Image as ImageIcon } from "lucide-react";
import { Colors, Media } from "../../styles/theme";
import { move } from "../../styles/GlobalStyle";
import { Reveal } from "../common/Reveal";

const HeroWrapper = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const BlobBase = styled.div`
    position: absolute;
    filter: blur(60px);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    animation: ${move} 20s infinite alternate;
`;

const HeroBlob1 = styled(BlobBase)`
    width: 384px;
    height: 384px;
    top: 80px;
    left: -80px;
    background-color: ${Colors.ZenGreen};
`;

const HeroBlob2 = styled(BlobBase)`
    width: 320px;
    height: 320px;
    bottom: 80px;
    right: -80px;
    background-color: ${Colors.ActiveYellow};
    animation-delay: -5s;
`;

const ContentMaxWidth = styled.div<{ maxWidth?: string }>`
    max-width: ${props => props.maxWidth || "1024px"};
    margin: 0 auto;
    padding: 0 24px;
`;

const HeroContent = styled(ContentMaxWidth)`
    text-align: center;
    position: relative;
    z-index: 10;
`;

const HeroTag = styled.div`
    display: inline-block;
    padding: 6px 16px;
    background-color: white;
    border: 2px solid ${Colors.ZenDarkGreen};
    border-radius: 99px;
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 32px;
`;

const SerifBold = styled.h1`
    font-family: 'Noto Serif TC', serif;
    font-weight: 900;
    font-size: 80px;
    line-height: 1.1;
    margin-bottom: 32px;
    
    span {
        color: ${Colors.ZenGreen};
        text-decoration: underline;
        text-decoration-style: wavy;
        text-underline-offset: 8px;
    }
    
    ${Media.Tablet(`
        font-size: 48px;
    `)}
`;

const HeroDesc = styled.p`
    font-size: 24px;
    color: #5A635B;
    margin-bottom: 48px;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    
    ${Media.Tablet(`
        font-size: 18px;
    `)}
`;

const HeroActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
    
    ${Media.Phone(`
        flex-direction: column;
    `)}
`;

const BtnPlayful = styled.a`
    position: relative;
    padding: 16px 40px;
    background-color: ${Colors.ZenDarkGreen};
    color: white;
    font-weight: 700;
    border-radius: 99px;
    text-decoration: none;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.05);
    }
`;

const ViewPosters = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
        color: ${Colors.ZenGreen};
    }
`;

export const Hero = () => {
    return (
        <HeroWrapper id="home">
            <HeroBlob1 />
            <HeroBlob2 />
            
            <HeroContent>
                <Reveal>
                    <HeroTag>👋 北藝大最酷的療癒社團</HeroTag>
                </Reveal>
                
                <Reveal>
                    <SerifBold>
                        生活太累？<br />
                        來這裡 <span>深呼吸</span>
                    </SerifBold>
                </Reveal>
                
                <Reveal>
                    <HeroDesc>
                        不用在那裡盤腿坐整天。<br />
                        我們學的是如何在吵雜的系館裡，保持腦袋清醒。
                    </HeroDesc>
                </Reveal>

                <Reveal>
                    <HeroActions>
                        <BtnPlayful href="#join">加入我們</BtnPlayful>
                        <ViewPosters href="#posters">
                            <ImageIcon size={24} /> 欣賞歷屆海報
                        </ViewPosters>
                    </HeroActions>
                </Reveal>
            </HeroContent>
        </HeroWrapper>
    );
};
