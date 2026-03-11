import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Glow = styled.div<{ x: number; y: number }>`
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(151, 188, 98, 0.15) 0%, transparent 70%);
    position: fixed;
    pointer-events: none;
    z-index: 0;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
`;

export const CursorGlow = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return <Glow x={mousePos.x} y={mousePos.y} />;
};
