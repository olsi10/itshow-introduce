import React from "react";
import { useMediaQuery } from "react-responsive";

const images = [
    "./images/moons/moon1.png",
    "./images/moons/moon2.png",
    "./images/moons/moon3.png",
    "./images/moons/moon4.png",
    "./images/moons/moon5.png",
];

export const Moblie =  ({children}) => {
    const isMobile = useMediaQuery({
        query : "(max-width: 768px)"
    });

    return <>{isMobile && children}</>
}

export const PC = ({children}) => {
    const isPC = useMediaQuery({
        query : "(min-width: 769px)"
    });

    return <>{isPC && children}</>
}


export default function Moons() {
    return(
        <>
        <Moblie>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </Moblie>

        <PC>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </PC>
        </>


    )
}