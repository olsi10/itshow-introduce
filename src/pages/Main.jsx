import React from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
// import Moons from "../components/Moons";

const Container = styled.div`
    height: 1080px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background-color: #433636;
`

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Text = styled.div`
    font-family: 'JockeyOne';
    font-size: 200px;
    margin: 17px 0px 0px 54px;
    color: #fff;
`

const Rabbit = styled.div`
    display: flex;
    height: 172px;
    margin: 67px 86px 0px 0px;
`

const images = [
    "./images/moons/moon1.png",
    "./images/moons/moon2.png",
    "./images/moons/moon3.png",
    "./images/moons/moon4.png",
    "./images/moons/moon5.png",
];

const Moons = styled.div`
    width: 100%;
    position: absolute;
    top: 39%;
    display: flex;
    justify-content: space-around;
`

export const Moblie =  ({children}) => {
    const isMobile = useMediaQuery({
        query : "(max-width: 768px)"
    });

    console.log('몹일');

    return <>{isMobile && children}</>
}

export const PC = ({children}) => {
    const isPC = useMediaQuery({
        query : "(min-width: 769px)"
    });

    console.log('피시');

    return <>{isPC && children}</>
}
export default function Main() {
    return(
        <Container>
            <Title>
                <Text>2023 IT SHOW<br/> MOON</Text>
                <Rabbit>
                    <p style={{fontFamily:'GabiaHeuldot', fontSize:'50px', color:'#fff', marginRight:'32px'}}>안녕!</p>
                    <img src="./images/rabbit/rabbit.png" style={{width:'100px', height:'100%'}} alt="" />
                </Rabbit>
            </Title>
            <Moons>
                {/* https://velog.io/@hyerin0930/React-%EB%B0%98%EC%9D%91%ED%98%95-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-with-react-responsive */}
                {images.map((image, index) => {
                if (index === 1 || index === 2 || index === 3) {
                return <img key={index} src={image} alt={`Image ${index + 1}`} style={{ marginTop: '-100px' }} />;
                } else {
                return <img key={index} src={image} alt={`Image ${index + 1}`} style={{ marginTop: '30px' }} />;
                }
                })}
            </Moons>
            {/* <Moblie>1
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </Moblie>

            <PC>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </PC> */}

        </Container>
    )
}