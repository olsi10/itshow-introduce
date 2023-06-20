// 사진눌렀을 때 나오는 alart창
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 50;
  position: fixed;
`
const Image = styled.div`
  width: 42rem;
  height: 42rem;
  border-radius: 0.8rem;
  background-size: cover;
  background-position: center;
  background-image: ${(props) =>
    `url(${props.img})`};
`


const Alart = (props) => {
  return (
    <>
        <Background onClick={props.click}/>
        <Image img={props.img}/>
    </>
  );
};

export default Alart;
