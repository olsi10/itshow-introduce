import { useState } from "react";
import Items from "../components/Items";
import { styled } from "styled-components";
import soft from "../soft.json"
import { useLocation } from "react-router-dom";
import Alart from "../components/Alart";

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background: #F3EDED;
    overflow: hidden;
    padding-bottom: 4rem;
`
const Header = styled.div`
    height: 45vw;
    display: flex;
    gap: 180px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1050px){
        margin: 5rem 50rem;
        gap: 50px;
    }
`
const HeaderContent = styled.div`
    width: 40rem;
    @media screen and (max-width: 768px){
        width: 14rem;
    }
`
const Moon = styled.div`
    width: 20vw;
    height: 20vw;
    background: ${(props) =>`url(/images/detail/${props.id}.png)`};
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.3s;
    z-index: 3;
    &:hover{
        -webkit-filter: drop-shadow(5px 5px 5px #ffd0a5);
        filter: drop-shadow(-21px 4px 50px #ffd0a5);
    }
    @media screen and (max-width: 768px){
        width: ${(props) => props.id===1 || props.id === 5 ? '30vw' : '40vw'};
        height: ${(props) => props.id===1 || props.id === 5 ? '30vw' : '40vw'};
    }
`
const Back = styled.div`
    width: 17vw;
    height: 17vw;
    top: 15.7vw;
    background: url('/images/detail/back.png') center/contain no-repeat;
    position: absolute;
    @media screen and (max-width: 768px){
        top: 25vw;
        width: 35vw;
        height: 35vw;
    }
`
const Images = styled.div`
    display: flex;
`
const Text=styled.div`
    font-weight: bold;
    font-size: 30px;
`
const MoonText = styled(Text)`
    font-size: 5vw;
    @media screen and (max-width: 768px) {
        font-size: 8vw;
    }
    `
const MoonContent = styled(Text)`
    font-size: 2.5vw;
    @media screen and (max-width: 768px) {
        font-size: 4vw;
    }      
`
const MoonDate = styled(Text)`
    font-size: 1.5vw;
    @media screen and (max-width: 768px) {
        font-size: 3vw;
    }   
`;



export default function Detail() {
    const location = useLocation();
    const id = location.state.id;
    const [isAlart, setIsAlart] = useState(false);
    
    const moon={
        1 : ["초승달", "음력 2~4일", "새로움, 생기발랄한 시작 (미림, 공유)"],
        2 : ["상현달", "음력 7~8일", "푸르른 세상과의 이음새 (커뮤니티)"],
        3 : ["보름달", "음력 15~16일", "풍년을 기원하고 즐기는 흥겨운 나날들 (게임)"],
        4 : ["하현달", "음력 22일~23일", "잠시 멈추어 쉬는 편안함 (심리테스트, 일기)"],
        5 : ["그믐달", "음력 27일~28일", "한달의 홀가분한 마무리 (일본글로벌 인턴쉽 서비스)"],
    }

    const filterSoft = soft.filter((e)=> e.subject===moon[id][0]);
    return(
        <Container>
            {isAlart ? <Alart/> : null}
            <Header>
                <Images>
                    <Back id={id}/>
                    <Moon id={id}/>
                </Images>
                <HeaderContent>
                    <MoonDate>{moon[id][1]}</MoonDate>
                    <MoonText>{moon[id][0]}</MoonText>
                    <MoonContent>{moon[id][2]}</MoonContent>
                </HeaderContent>
            </Header>
            {filterSoft.map((a, i)=>{
                return(
                    // onClick={()=>{setIsAlart(!isAlart)}}
                    <Items idx={i} name={a.name} poster={a.poster} comm={a.comment} team={a.team} lang={a.language} tool={a.tool} github={a.github} />
                )
            })}
        </Container>
    );
}