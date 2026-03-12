import React from "react";
import styled, { css } from "styled-components";
import { BatteryCharging, Target, Sparkles, Users, CloudSun } from "lucide-react";
import { Colors, Media } from "../../styles/theme";
import { float } from "../../styles/GlobalStyle";
import { Reveal } from "../common/Reveal";

const SectionContainer = styled.section<{ bgColor?: string; rounded?: boolean }>`
    padding: 128px 0;
    background-color: ${props => props.bgColor || Colors.White};
    position: relative;
    z-index: 20;
    
    ${props => props.rounded && css`
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        box-shadow: 0 -20px 50px -12px rgba(0, 0, 0, 0.1);
        
        ${Media.Tablet(`
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
        `)}
    `}
`;

const ContentMaxWidth = styled.div<{ maxWidth?: string }>`
    max-width: ${props => props.maxWidth || "1024px"};
    margin: 0 auto;
    padding: 0 24px;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 64px;
`;

const SectionTitleBase = styled.h2`
    font-family: 'Noto Serif TC', serif;
    font-weight: 900;
    font-size: 60px;
    margin-bottom: 16px;
    line-height: 1.1;
    
    ${Media.Tablet(`
        font-size: 64px;
    `)}

    ${Media.Phone(`
        font-size: 48px;
    `)}
`;

const SectionDescBase = styled.p`
    color: ${Colors.Gray500};
    margin: 0;
    line-height: normal;
`;

const BenefitSectionDesc = styled(SectionDescBase)`
    max-width: 448px;
    margin: 0 auto;
    text-align: center;
`;

const Grid4 = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-bottom: 80px;
    
    ${Media.Tablet(`
        grid-template-columns: repeat(2, 1fr);
    `)}
    
    ${Media.Phone(`
        grid-template-columns: 1fr;
    `)}
`;

const BenefitCard = styled.div<{ color: string }>`
    padding: 32px;
    background-color: ${Colors.SoftWhite};
    border-radius: 40px;
    transition: all 0.5s ease;
    
    &:hover {
        background-color: ${props => props.color}1A; // 10% opacity
        
        div {
            transform: scale(1.1) rotate(12deg);
        }
    }
`;

const IconBox = styled.div<{ color: string }>`
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    box-shadow: 0 10px 15px -3px ${props => props.color}80;
    color: white;
    transition: transform 0.5s;
`;

const CardTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 12px;
`;

const CardDesc = styled.p`
    color: ${Colors.Gray500};
    font-size: 14px;
    line-height: 1.6;
`;

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    max-width: 896px;
    margin: 0 auto;
    align-items: center;
    
    ${Media.Phone(`
        grid-template-columns: repeat(2, 1fr);
    `)}
`;

const PhotoCard = styled.div<{ rotate: string; translateY?: string }>`
    background: white;
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    transform: rotate(${props => props.rotate}) translateY(${props => props.translateY || "0"});
    
    img {
        width: 100%;
        border-radius: 8px;
    }
    
    &:hover {
        transform: scale(1.05) rotate(0deg) !important;
        z-index: 10;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
`;

const FloatingVisual = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 48px;
    
    ${Media.Phone(`
        flex-direction: column;
    `)}
`;

const FloatIconContainer = styled.div`
    position: relative;
    width: 256px;
    height: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${Media.Phone(`
        width: 192px;
        height: 192px;
    `)}
`;

const BlobBase = styled.div`
    position: absolute;
    filter: blur(60px);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    animation: ${float} 20s infinite alternate;
`;

const BenefitBlob1 = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(151, 188, 98, 0.12); /* 極淡的綠色 */
    border-radius: 50%;
    animation: ${float} 5s ease-in-out infinite;
`;

const BenefitBlob2 = styled.div`
    position: absolute;
    inset: 7%; /* 比外圈縮小一點 */
    background-color: rgba(255, 211, 91, 0.15); /* 極淡的黃色 */
    border-radius: 50%;
`;

const FloatingCloudSun = styled(CloudSun)`
    position: relative;
    z-index: 10;
    width: 45%; /* 縮小圖示以符合圖中比例 */
    height: 45%;
    color: ${Colors.ZenGreen};
    animation: ${float} 5s ease-in-out infinite;
`;

const Quote = styled.div`
    max-width: 448px;
    text-align: left;
    
    ${Media.Phone(`
        text-align: center;
    `)}
    
    p {
        font-family: 'Noto Serif TC', serif;
        font-weight: 900;
        font-size: 32px;
        color: ${Colors.ZenDarkGreen};
        margin-bottom: 16px;
        line-height: 1.1;
        
        ${Media.Tablet(`
            font-size: 30px;
        `)}

        ${Media.Phone(`
            font-size: 30px;
        `)}
    }
`;

const TagList = styled.div`
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    
    ${Media.Phone(`
        justify-content: center;
    `)}
    
    span {
        padding: 4px 12px;
        background-color: ${Colors.Gray100};
        border-radius: 99px;
        font-size: 12px;
        font-weight: 700;
        color: ${Colors.Gray400};
    }
`;

interface BenefitsProps {
    onOpenLightbox: (img: string, title: string) => void;
}

export const Benefits = ({ onOpenLightbox }: BenefitsProps) => {
    return (
        <SectionContainer id="benefits" rounded>
            <ContentMaxWidth>
                <Reveal>
                    <SectionHeader>
                        <SectionTitleBase>在這裡，你可以...</SectionTitleBase>
                        <BenefitSectionDesc>
                            不只是靜坐，更是一種生活態度的修煉。
                        </BenefitSectionDesc>
                    </SectionHeader>
                </Reveal>
                
                <Grid4>
                    <Reveal>
                        <BenefitCard color={Colors.ActiveYellow}>
                            <IconBox color={Colors.ActiveYellow}>
                                <BatteryCharging size={28} />
                            </IconBox>
                            <CardTitle>清空大腦壓力</CardTitle>
                            <CardDesc>期末地獄、展演壓力？透過靜心，給大腦一個徹底重新開機的機會。</CardDesc>
                        </BenefitCard>
                    </Reveal>
                    <Reveal>
                        <BenefitCard color={Colors.ZenGreen}>
                            <IconBox color={Colors.ZenGreen}>
                                <Target size={28} />
                            </IconBox>
                            <CardTitle>提升專注力</CardTitle>
                            <CardDesc>不再輕易被瑣事干擾。在創作中，學習如何進入全然專注的「心流」狀態。</CardDesc>
                        </BenefitCard>
                    </Reveal>
                    <Reveal>
                        <BenefitCard color={Colors.ZenDarkGreen}>
                            <IconBox color={Colors.ZenDarkGreen}>
                                <Sparkles size={28} />
                            </IconBox>
                            <CardTitle>發掘內在智慧</CardTitle>
                            <CardDesc>靜下心來，聽聽內心的聲音。在平靜中尋找靈感，覺察被焦慮遮蔽的直覺。</CardDesc>
                        </BenefitCard>
                    </Reveal>
                    <Reveal>
                        <BenefitCard color="#FF8B8B">
                            <IconBox color="#FF8B8B">
                                <Users size={28} />
                            </IconBox>
                            <CardTitle>找到契合夥伴</CardTitle>
                            <CardDesc>北藝大最強大的後盾。不只有禪定，更有溫暖的社群，與你共享生活。</CardDesc>
                        </BenefitCard>
                    </Reveal>
                </Grid4>

                <Reveal>
                    <PhotoGrid>
                        <PhotoCard rotate="-3deg" onClick={() => onOpenLightbox("/333078_0.jpg", "社課活動")}>
                            <img src="/333078_0.jpg" alt="照片1" />
                        </PhotoCard>
                        <PhotoCard rotate="2deg" translateY="16px" onClick={() => onOpenLightbox("/333077_0.jpg", "靜心時光")}>
                            <img src="/333077_0.jpg" alt="照片2" />
                        </PhotoCard>
                        <PhotoCard rotate="-2deg" onClick={() => onOpenLightbox("/333079_0.jpg", "溫馨合照")}>
                            <img src="/333079_0.jpg" alt="照片3" />
                        </PhotoCard>
                        <PhotoCard rotate="4deg" translateY="8px" onClick={() => onOpenLightbox("/333080_0.jpg", "快樂回憶")}>
                            <img src="/333080_0.jpg" alt="照片4" />
                        </PhotoCard>
                    </PhotoGrid>
                </Reveal>

                <Reveal>
                    <FloatingVisual>
                        <FloatIconContainer>
                            <BenefitBlob1 />
                            <BenefitBlob2 />
                            <FloatingCloudSun />
                        </FloatIconContainer>
                        <Quote>
                            <p>「在喧囂的藝術大學裡，<br />找到屬於你的平靜綠洲。」</p>
                            <TagList>
                                <span>#放鬆</span>
                                <span>#靈感</span>
                                <span>#能量</span>
                            </TagList>
                        </Quote>
                    </FloatingVisual>
                </Reveal>
            </ContentMaxWidth>
        </SectionContainer>
    );
};
