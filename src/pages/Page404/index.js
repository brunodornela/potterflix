import React from 'react';
import Button from '../../components/Menu/components/Button'
import Background from '../../assets/img/obliviate.gif'
import Menu from '../../components/Menu';
import styled from 'styled-components';

const FullDiv = styled.div`
  color: var(--white);
  min-height: calc(100vh - var(--bodyPaddingTop));
  background-size: cover;
  background-image: ${`url(${Background})`};
  background-position: center;
  display:flex;
  justify-items: center;
`

const TextDiv = styled.div`
  flex:1;
  align-items:center;
`
function Page404() {
    return (
      <>
      <Menu/>
      <FullDiv>        
        <TextDiv style={{display:"flex", flexDirection:"column"}}>
          
          <div style={{flex:1}} ></div>
          <h1 style={{flex:0, verticalAlign:"botto"}}>
            - Obliviate!
          </h1>
          
          <h3 style={{flex:0}}>
            How you get in here?
          </h3>
          
          <Button to="/" style={{flex:0}}>
            Back to home
          </Button>
          
          <h4 style={{flex:1}}>
            Unfortunely, we cant find that page
          </h4>
        </TextDiv>
      </FullDiv>
      
      </>
    )
  }

export default Page404;