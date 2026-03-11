import React from "react";
import styled from "styled-components";
import { MapPin, Sun, Moon } from "lucide-react";
import { Colors, Media } from "../../styles/theme";
import { Reveal } from "../common/Reveal";

const SectionContainer = styled.section<{ bgColor?: string }>`
    padding: 128px 0;
    background-color: ${props => props.bgColor || Colors.White};
    position: relative;
    z-index: 20;
`;

const ContentMaxWidth = styled.div<{ maxWidth?: string }>`
    max-width: ${props => props.maxWidth || "1024px"};
    margin: 0 auto;
    padding: 0 24px;
`;

const ScheduleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 48px;
    
    ${Media.Tablet(`
        display: flex;
        flex-direction: column;
    `)}
`;

const ScheduleSticky = styled.div`
    grid-column: span 2;
    position: sticky;
    top: 128px;
    
    ${Media.Tablet(`
        position: static;
    `)}
`;

const ScheduleBadge = styled.div`
    display: inline-block;
    padding: 4px 12px;
    background-color: ${Colors.ZenGreen}33;
    color: ${Colors.ZenDarkGreen};
    border-radius: 8px;
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 16px;
    letter-spacing: 0.1em;
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

const ScheduleTitle = styled(SectionTitleBase)`
    font-size: 60px;
    margin-bottom: 24px;
`;

const SectionDescBase = styled.p`
    color: ${Colors.Gray500};
    margin: 0;
    line-height: normal;
`;

const ScheduleSectionDesc = styled(SectionDescBase)`
    line-height: 1.6;
    margin-bottom: 32px;
`;

const LocationBadge = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: #F4F1E8;
    border-radius: 16px;
    border: 2px solid rgba(45, 58, 31, 0.05);
    
    div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        color: ${Colors.ZenGreen};
    }
    
    span {
        font-weight: 700;
        color: ${Colors.ZenDarkGreen};
    }
`;

const ScheduleList = styled.div`
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
`;

const ScheduleIconBox = styled.div<{ color: string }>`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 10px 15px -3px ${props => props.color}4D;
    color: white;
    transition: transform 0.3s;
`;

const ScheduleItem = styled.div<{ color: string }>`
    background: white;
    padding: 32px;
    border-radius: 32px;
    border: 3px solid ${props => props.color};
    display: flex;
    gap: 24px;
    align-items: center;
    transition: all 0.3s;
    
    &:hover {
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        
        ${ScheduleIconBox} {
            transform: scale(1.05);
        }
    }
`;

const ScheduleItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ScheduleItemTimeBase = styled.div`
    font-size: 12px;
    font-weight: 900;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
`;

const WedTime = styled(ScheduleItemTimeBase)`
    color: ${Colors.ZenGreen};
    font-size: 18px;
`;

const ThuTime = styled(ScheduleItemTimeBase)`
    color: #D4AF37;
    font-size: 18px;
`;

const ScheduleItemTitle = styled.h3`
    font-size: 24px;
    font-weight: 900;
    color: ${Colors.ZenDarkGreen};
`;

export const Schedule = () => {
    return (
        <SectionContainer id="schedule">
            <ContentMaxWidth>
                <ScheduleGrid>
                    <ScheduleSticky>
                        <Reveal>
                            <ScheduleBadge>SCHEDULE</ScheduleBadge>
                            <ScheduleTitle>活動時程 ✨</ScheduleTitle>
                            <ScheduleSectionDesc>
                                我們固定在綜合宿舍團體教室舉行。無論是每週的小時光，還是深度的社課分享，都歡迎你。
                            </ScheduleSectionDesc>
                            <LocationBadge>
                                <div><MapPin size={20} /></div>
                                <span>綜合宿舍團體教室 C</span>
                            </LocationBadge>
                        </Reveal>
                    </ScheduleSticky>
                    
                    <ScheduleList>
                        <Reveal>
                            <ScheduleItem color={Colors.ZenGreen}>
                                <ScheduleIconBox color={Colors.ZenGreen}>
                                    <Sun size={32} />
                                </ScheduleIconBox>
                                <ScheduleItemInfo>
                                    <WedTime>每週三 中午</WedTime>
                                    <ScheduleItemTitle>午間禪 | 12:30 - 13:10</ScheduleItemTitle>
                                </ScheduleItemInfo>
                            </ScheduleItem>
                        </Reveal>
                        <Reveal>
                            <ScheduleItem color={Colors.ActiveYellow}>
                                <ScheduleIconBox color={Colors.ActiveYellow}>
                                    <Moon size={32} />
                                </ScheduleIconBox>
                                <ScheduleItemInfo>
                                    <ThuTime>每週四 晚上</ThuTime>
                                    <ScheduleItemTitle>社課時光 | 19:30 - 21:00</ScheduleItemTitle>
                                </ScheduleItemInfo>
                            </ScheduleItem>
                        </Reveal>
                    </ScheduleList>
                </ScheduleGrid>
            </ContentMaxWidth>
        </SectionContainer>
    );
};
