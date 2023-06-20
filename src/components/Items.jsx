import React from "react";
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 65vw;
    border-radius: 20px;
    box-shadow: 4px 4px 20px #E4E4E4;
    background: white;
    display: flex;
    flex-direction: column;
    font-family: GabiaHeuldot;
    @media screen and (max-width: 900px) {
        width: 80vw;
        height: 120vw;
    }
`
const Image = styled.div`
    width: 36vw;
    height: 30vh;
    // background: url('https://show2022.netlify.app/panel-img/%EB%9D%BC%EB%96%BC%EB%8A%94%EB%A7%90%EC%9D%B4%EC%95%BC%20%EC%95%9E.jpg') center/cover no-repeat;
    background: ${(props) => `url(${props.poster})`} center/cover no-repeat;
    background-position: 0 0;
    border-radius: 20px;
    box-shadow: 4px 4px 20px #E4E4E4;
    align-self: center;
    margin-top: 36px;
    @media screen and (max-width: 768px) {
        width: 70vw;
        height: 100vw;
    }
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    margin-bottom: 35px;
    gap: 15px;
    @media screen and (max-width: 768px) {
       gap: 10px;
       padding: 0 7vw;
    }
`
const Title = styled.div`
    font-size: 1.5vw;
    font-weight: bold;
    margin-top: 20px;
    @media screen and (max-width: 700px) {
        font-size: 5vw;
    }
`
const Team = styled.div`
    font-size: 18px;
    font-weight: bold;
`
const Expl = styled.div`
    font-size: 22px
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 768px) {
        gap: 10px;
    }
`
const IconImages = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`
const LangIcon = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    @media screen and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`
const Github = styled.div`
    margin-top: 23px;
    display: flex;
    gap: 20px;
`
const Items = (props) => {
    const navigate = useNavigate();

    return(
        <Container onClick={props.onClick}>
            <Image poster={props.poster} onClick={()=>{window.open(props.poster)}}/>
            <Contents>
                <Title>{props.name}</Title>
                <Team>{props.team}</Team>
                <Expl>{props.comm}</Expl>
                <IconImages>
                    {props.lang.split(',').map((a)=>{
                        return(
                            <LangIcon src={`/images/logos/${a.trim()}.png`} alt={a}/>
                        )
                    })}
                </IconImages>
                <IconImages>
                    {props.tool.split(',').map((a)=>{
                        return(
                            <LangIcon src={`/images/logos/${a.trim()}.png`} alt={a}/>
                        )
                    })}
                </IconImages>
                <Github>
                    <img src="/images/github.png" alt="" style={{width: '30px', height: '30px'}}/>
                    <a href={props.github} target="_blank">repository</a>
                </Github>
            </Contents>
        </Container>
    );
}

export default Items;