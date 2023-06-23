import React from "react";
import styled, {keyframes} from "styled-components";
import { useNavigate } from "react-router-dom";


const rotate = keyframes` /* 2. css코드를 씀. */
0%{
    transform: rotate(0deg);
    border-radius: 0px;
}
50%{ 
    border-radius: 100px;
}
100%{
    transform: rotate(350deg);
    border-radius: 0px;
}
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background-color: #433636;
    overflow: hidden;
    @media screen and (max-width: 700px) {
        width: 100vw;
        height: auto;
    }
`


const Moons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3%;
    @media screen and (max-width: 800px) {
        // flex-flow: column-reverse;
        flex-direction: column;
        gap: 43px;
    }
    @media screen and (max-height: 800px) {
        // flex-flow: column-reverse;
        flex-direction: column;
        gap: 60px;
    }
    
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
    @media screen and (max-width: 1330px) {
        font-size: 70px;
    }
    @media screen and (max-width: 700px) {
        font-size: 50px;
        padding: 15px 0px 0px 0px;
    }
`

const Rabbit = styled.div`
    display: flex;
    height: 172px;
    margin: 67px 86px 0px 0px;
    @media screen and (max-width: 700px) {
        display: none;
    }
`
const Image = styled.img`
    width: 100px;
    height: 100%;
    &:hover{
        animation: ${rotate} 1s linear infinite;
    }
`
export default function Main() {
    const navigate = useNavigate();
    return(
        <Container>
            <Title>
                <Text>2023 IT SHOW<br/> MOON</Text>
                <Rabbit>
                    <p style={{fontFamily:'GabiaHeuldot', fontSize:'50px', color:'#fff', marginRight:'32px'}}>안녕!</p>
                    <Image src="./images/rabbit/rabbit.png" alt="rabbit" />
                </Rabbit>
            </Title>
            <Moons>
                <div className="m5" onClick={()=>{navigate('/detail/1', {state : {id: 1}})}}><img src="./images/moons/moon5.png" alt="" /><div className="moon-name">초승달</div></div>
                <div className="m4" onClick={()=>{navigate('/detail/2', {state : {id: 2}})}}><img src="./images/moons/moon4.png" alt="" /><div className="moon-name">상현달</div></div>
                <div className="m3" onClick={()=>{navigate('/detail/3', {state : {id: 3}})}}><img src="./images/moons/moon3.png" alt="" /><div className="moon-name">보름달</div></div>
                <div className="m2" onClick={()=>{navigate('/detail/4', {state : {id: 4}})}}><img src="./images/moons/moon2.png" alt="" /><div className="moon-name">하현달</div></div>
                <div className="m1" onClick={()=>{navigate('/detail/5', {state : {id: 5}})}}><img src="./images/moons/moon1.png" alt="" /><div className="moon-name">그믐달</div></div>
            </Moons>

        </Container>
    )
}