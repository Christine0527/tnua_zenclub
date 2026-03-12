import React, { useRef } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
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

const PosterContent = styled(ContentMaxWidth)`
    max-width: 1200px;
`;

const CarouselHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 48px;
    
    ${Media.Phone(`
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    `)}
`;

const CarouselHeaderInfo = styled.div`
    max-width: 512px;
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

const PosterSectionDesc = styled(SectionDescBase)`
    font-weight: 500;
`;

const CarouselArrows = styled.div`
    display: flex;
    gap: 16px;
`;

const ArrowBtn = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid ${Colors.ZenDarkGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
        background-color: ${Colors.ZenDarkGreen};
        color: white;
    }
`;

const PosterSliderWrapper = styled.div`
    margin: 0 -20px;
`;

const PosterSlide = styled.div`
    padding: 30px 20px;
    box-sizing: border-box;
`;

const PosterPolaroid = styled.div<{ rotate?: string }>`
    background: white;
    padding: 16px 16px 48px 16px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    user-select: none;
    cursor: zoom-in;
    transform: rotate(${props => props.rotate || "0deg"});
    border-radius: 4px;
    
    img {
        width: 100%;
        aspect-ratio: 3/4;
        object-fit: cover;
        border-radius: 2px;
        margin-bottom: 20px;
        border: 1px solid rgba(0, 0, 0, 0.03);
    }
    
    p {
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        color: ${Colors.ZenDarkGreen};
        letter-spacing: 0.05em;
        margin: 0;
    }
    
    &:hover {
        transform: translateY(-20px) rotate(0deg) scale(1.05);
        z-index: 50;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18);
    }
`;

interface PostersProps {
    onOpenLightbox: (img: string, title: string) => void;
}

export const Posters = ({ onOpenLightbox }: PostersProps) => {
    const sliderRef = useRef<Slider>(null);

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.2,
                }
            }
        ]
    };

    const posterData = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        url: `/${i + 1}.jpg`,
        rotate: `${(Math.random() * 6 - 3).toFixed(1)}deg` // 隨機旋轉 -3 到 3 度
    }));

    return (
        <SectionContainer id="posters" bgColor="#F4F1E8">
            <PosterContent>
                <Reveal>
                    <CarouselHeader>
                        <CarouselHeaderInfo>
                            <SectionTitleBase>歷屆社課海報 🎨</SectionTitleBase>
                            <PosterSectionDesc>可用滑鼠左右拖曳，或點擊圖片直接放大欣賞。</PosterSectionDesc>
                        </CarouselHeaderInfo>
                        <CarouselArrows>
                            <ArrowBtn onClick={() => sliderRef.current?.slickPrev()}>
                                <ChevronLeft size={24} />
                            </ArrowBtn>
                            <ArrowBtn onClick={() => sliderRef.current?.slickNext()}>
                                <ChevronRight size={24} />
                            </ArrowBtn>
                        </CarouselArrows>
                    </CarouselHeader>
                </Reveal>

                <Reveal>
                    <PosterSliderWrapper>
                        <Slider ref={sliderRef} {...carouselSettings}>
                            {posterData.map((poster) => (
                                <PosterSlide key={poster.id}>
                                    <PosterPolaroid 
                                        rotate={poster.rotate} 
                                        onClick={() => onOpenLightbox(poster.url, poster.title)}
                                    >
                                        <img src={poster.url} alt={poster.title} />
                                    </PosterPolaroid>
                                </PosterSlide>
                            ))}
                        </Slider>
                    </PosterSliderWrapper>
                </Reveal>
            </PosterContent>
        </SectionContainer>
    );
};
