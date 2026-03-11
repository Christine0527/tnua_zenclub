import { css } from "styled-components";

export const Colors = {
    ZenGreen: "#97BC62",
    ZenDarkGreen: "#2D3A1F",
    ActiveYellow: "#FFD35B",
    SoftWhite: "#FBFAF5",
    TextMain: "#2D3A1F",
    Gray100: "#F3F4F6",
    Gray400: "#9CA3AF",
    Gray500: "#6B7280",
    White: "#FFFFFF",
};

export const Media = {
    Tablet: (styles: any) => css`
        @media (max-width: 1024px) {
            ${styles}
        }
    `,
    Phone: (styles: any) => css`
        @media (max-width: 640px) {
            ${styles}
        }
    `,
};
