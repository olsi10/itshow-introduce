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
    @media screen and (max-width: 800px) {
        width: 80vw;
        height: 123vw;
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
    @media screen and (max-width: 800px) {
        width: 70vw;
        height: 100vw;
    }
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    margin: 15px 0 35px 0;
    gap: 20px;
    @media screen and (max-width: 768px) {
       gap: 15px;
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
const Items = (props) => {
    const navigate = useNavigate();

    return(
        <Container onClick={props.onClick}>
            <Image poster={props.poster} onClick={()=>{window.open(props.poster)}}/>
            <Contents>
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                    <Title>{props.name}</Title>
                    {props.github ? 
                            <a href={props.github} target="_blank" style={{float: 'right', margin:' auto 0 0 auto'}}>
                                <img src="/images/github.png" alt="" style={{width: '30px', height: '30px'}}/>
                            </a>
                            : null
                    }
                </div>
                <Team>{props.team}</Team>
                <Expl>{props.comm}</Expl>
                <IconImages>
                    {props.lang.split(',').map((a)=>{
                        return(
                            <LangIcon src={`/images/logos/${a.trim()}.png`} alt={a}/>
                        )
                    })}
                    {props.tool ? 
                        props.tool.split(',').map((a)=>{
                            return(
                                <LangIcon src={`/images/logos/${a.trim()}.png`} alt={a}/>
                            )
                        }) : null
                    }
                </IconImages>
            </Contents>
        </Container>
    );
}

export default Items;