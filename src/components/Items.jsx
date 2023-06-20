import React from "react";
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 65vw;
    height: 23%;
    border-radius: 20px;
    box-shadow: 4px 4px 20px #E4E4E4;
    background: white;
    display: flex;
    flex-direction: column;
`
const Image = styled.div`
    width: 36vw;
    height: 30vh;
    // background: url('https://show2022.netlify.app/panel-img/%EB%9D%BC%EB%96%BC%EB%8A%94%EB%A7%90%EC%9D%B4%EC%95%BC%20%EC%95%9E.jpg') center/cover no-repeat;
    background: ${(props) => `url(${props.poster})`} center/cover no-repeat;
    border-radius: 20px;
    box-shadow: 4px 4px 20px #E4E4E4;
    align-self: center;
    margin-top: 36px;
`
const Contents = styled.div`
    padding: 0 15vw;
    margin-bottom: 35px;
`
const Title = styled.div`
    font-size: 35px;
    font-weight: bold;
    margin-top: 20px;
`
const Team = styled.div`
    font-size: 18px;
`
const Expl = styled.div`
    font-size: 22px
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const IconImages = styled.div`
    margin-top: 35px;
`
const Github = styled.div`
    margin-top: 23px;
    display: flex;
    gap: 20px;
`
const Items = (props) => {
    const navigate = useNavigate();
    return(
        <Container>
            <Image poster={props.poster} onClick={()=>{window.open(props.poster)}}/>
            <Contents>
                <Title>{props.name}</Title>
                <Team>{props.team}</Team>
                <Expl>{props.comment}</Expl>
                <IconImages>{props.lang} {props.tool}</IconImages>
                <Github>
                    <img src="/images/github.png" alt="" />
                    <a href={props.github} target="_blank">{props.github}</a>
                </Github>
            </Contents>
        </Container>
    );
}

export default Items;