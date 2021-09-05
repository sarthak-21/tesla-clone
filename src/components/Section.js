import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props){
  return (
    <Wrap bgImage = {props.backgroundImage}>
       <Fade bottom>
          <ItemText>
             <h1>{props.title}</h1>
             <p>{props.description}</p>
          </ItemText>
       </Fade>
       <Buttons>
          <Fade bottom>
             <ButtonGroup>
              <LeftButton>
                 {props.leftBtnText}
              </LeftButton>
              {props.rightBtnText &&
                <RightButton>
                 {props.rightBtnText}
              </RightButton>
              }
             </ButtonGroup>
          </Fade>
          <DownArrow src="/images/down-arrow.svg" />
       </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
     width: 100vw;
     /* vw = view width */
     /* vh = vertical height [dynamic] */
     height: 100vh;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-image: ${props => `url("/images/${props.bgImage}")`};
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
`

const ItemText = styled.div`
     padding-top: 15vh;
     text-align: center;

`

const ButtonGroup = styled.div`
     display: flex;
     margin-bottom: 30px;
     @media (max-width: 786px){
       flex-direction: column;
     }
`

const LeftButton = styled.div`
     background-color: rgba(23, 26, 32, 0.8);
     height: 40px;
     width: 256px;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100px;
     opacity: 0.85;
     text-transform: uppercase;
     font-size: 12px;
     margin: 8px;
     font-weight: 600;
`
const RightButton = styled(LeftButton)`
     background: white;
     opacity: 0.65;
     color: black;
     /* at line 16 we are only going to display the RightButton when there is a rightBtnText */
`

const DownArrow = styled.img`
     height: 40px;
     animation: animateDown infinite 1.5s;
     overflow-x: hidden;
`

const Buttons = styled.div``
