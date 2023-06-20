import React from "react";
import Items from "../components/Items";
import { styled } from "styled-components";
import soft from "../soft.json"
import { useLocation } from "react-router-dom";

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background: #F3EDED;
    overflow: hidden;
`
const Header = styled.div`
    height: 45vw;
    display: flex;
    gap: 180px;
    justify-content: center;
    align-items: center;
`
const Moon = styled.div`
    width: 20vw;
    height: 20vw;
    background: url('/images/detail/fullmoon.png') center/contain no-repeat;
    transition: 0.3s;
    &:hover{
        -webkit-filter: drop-shadow(5px 5px 5px #ffd0a5);
        filter: drop-shadow(-21px 4px 50px #ffd0a5);
    }
`
const Text=styled.div`
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 1000px) {
        font-size: 
    }
`
export default function Detail() {
    // const location = useLocation();
    // const id = location.state.id;

    const moon={
        "초승달" : "halfmoon",
        "상현달" : "halfmoon",
        "보름달" : "fullmoon",
        "하현달" : "halfmoon",
        "그믐달" : "halfmoon",
    }

    return(
        <Container>
            <Header>
                <Moon />
                <div>
                    <Text>음력 15일~16일</Text>
                    <Text>보름달</Text>
                    <Text>풍년을 기원하고 즐기는 흥겨운 나날들</Text>
                </div>
            </Header>
            {/* soft.filter((e)=> e.subject==="그믐달"). */}
            {soft.map((a)=>{
                return(
                    <Items name={a.name} poster={a.poster} comm={a.comment} team={a.team} lang={a.language} tool={a.tool} github={a.github} />
                )
            })}
        </Container>
    );
}