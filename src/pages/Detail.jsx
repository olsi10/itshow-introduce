import React from "react";
import Items from "../components/Items";
import { styled } from "styled-components";

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background: #F3EDED;
`
const Header = styled.div`
    height: 1080px;
    display: flex;
    gap: 180px;
    justify-content: center;
    align-items: center;
`
const Moon = styled.div`
    width: 465px;
    height: 488px;
    background: url('/images/detail/fullmoon.png') center/contain no-repeat;
    transition: 0.3s;
    &:hover{
        -webkit-filter: drop-shadow(5px 5px 5px #ffd0a5);
        filter: drop-shadow(-21px 4px 50px #ffd0a5);
    }
`
const Text=styled.div`
    font-weight: bold;
`
export default function Detail() {
    return(
        <Container>
            <Header>
                <Moon />
                <div>
                    <Text style={{fontSize: '15px'}}>음력 15일~16일</Text>
                    <Text style={{fontSize: '150px'}}>보름달</Text>
                    <Text style={{fontSize: '25px'}}>풍년을 기원하고 즐기는 흥겨운 나날들</Text>
                </div>
            </Header>
            <Items />
            <Items />
            <Items />
        </Container>
    );
}