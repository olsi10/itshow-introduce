import React from "react";
import { styled } from "styled-components";

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
    height: 20vh;
    background: url('https://show2022.netlify.app/panel-img/%EB%9D%BC%EB%96%BC%EB%8A%94%EB%A7%90%EC%9D%B4%EC%95%BC%20%EC%95%9E.jpg') center/cover no-repeat;
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
const Cast = styled.div`
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
const Items = () => {
    return(
        <Container>
            <Image />
            <Contents>
                <Title>voiceflow</Title>
                <Cast>Design, Develope. 웹솔루션 김유진, 웹솔루션 박선주, 웹솔루션 임수민</Cast>
                <Expl>소리와 몸짓으로 직접 참여하는 아케이드 게임들🎮🕹</Expl>
                <IconImages>React.js, node.js, express, mongoDB</IconImages>
                <Github>
                    <img src="/images/github.png" alt="" />
                    <a href="https://github.com/55soup/itshow-voiceflow" target="_blank">https://github.com/55soup/itshow-voiceflow</a>
                </Github>
            </Contents>
        </Container>
    );
}

export default Items;