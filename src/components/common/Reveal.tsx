import React, { useRef } from "react";
import styled from "styled-components";
import { useIntersection } from "react-use";

const RevealWrapper = styled.div<{ active: boolean }>`
    opacity: ${props => props.active ? 1 : 0};
    transform: translateY(${props => props.active ? 0 : "30px"});
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const Reveal = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const intersection = useIntersection(ref as React.RefObject<HTMLElement>, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    });

    const active = !!(intersection && intersection.isIntersecting);

    return (
        <RevealWrapper ref={ref} active={active}>
            {children}
        </RevealWrapper>
    );
};
