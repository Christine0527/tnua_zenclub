/*=====================================
    TnuaZenClub 

    Author: Assistant
    CreateTime: 2024 / 03 / 11
=====================================*/
import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { CursorGlow } from "./common/CursorGlow";
import { Lightbox } from "./common/Lightbox";
import { Nav } from "./layout/Nav";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { Benefits } from "./sections/Benefits";
import { Posters } from "./sections/Posters";
import { Schedule } from "./sections/Schedule";
import { Join } from "./sections/Join";

const TnuaZenClub = () => {
    const [lightbox, setLightbox] = useState<{ isOpen: boolean; img: string; title: string }>({
        isOpen: false,
        img: "",
        title: ""
    });

    const openLightbox = (img: string, title: string) => {
        setLightbox({ isOpen: true, img, title });
    };

    const closeLightbox = () => {
        setLightbox({ ...lightbox, isOpen: false });
    };

    return (
        <>
            <GlobalStyle />
            <CursorGlow />
            
            <Lightbox 
                isOpen={lightbox.isOpen} 
                img={lightbox.img} 
                title={lightbox.title} 
                onClose={closeLightbox} 
            />

            <Nav />

            <main>
                <Hero />
                <Benefits onOpenLightbox={openLightbox} />
                <Posters onOpenLightbox={openLightbox} />
                <Schedule />
                <Join />
            </main>

            <Footer />
        </>
    );
};

export default TnuaZenClub;
