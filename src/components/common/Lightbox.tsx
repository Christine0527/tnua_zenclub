import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const LightboxOverlay = styled.div<{ isOpen: boolean }>`
    display: ${props => props.isOpen ? "flex" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(45, 58, 31, 0.95);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.3s ease;
`;

const LightboxContent = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    
    img {
        max-height: 85vh;
        border-radius: 8px;
        transform: scale(${props => props.isOpen ? 1 : 0.9});
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
`;

const LightboxCaption = styled.div`
    margin-top: 40px;
    color: white;
    font-weight: 700;
    letter-spacing: 0.15em;
    font-size: 18px;
`;

const LightboxClose = styled.button`
    position: absolute;
    top: 32px;
    right: 32px;
    color: white;
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

interface LightboxProps {
    isOpen: boolean;
    img: string;
    title: string;
    onClose: () => void;
}

export const Lightbox = ({ isOpen, img, title, onClose }: LightboxProps) => {
    return (
        <LightboxOverlay isOpen={isOpen} onClick={onClose}>
            <LightboxClose onClick={onClose}>
                <X size={32} />
            </LightboxClose>
            <LightboxContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <img src={img} alt={title} />
                <LightboxCaption>{title}</LightboxCaption>
            </LightboxContent>
        </LightboxOverlay>
    );
};
