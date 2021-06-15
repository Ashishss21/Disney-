import styled from "styled-components";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <LogoMain src="/images/loginLogo.svg" alt="Image" />
          <Button>Get it all here</Button>
          <Desc>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Desc>
          <LogoMainTwo src="/images/logo-two.png" alt="Small image"/>
        </Logo>
        <BImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

const Content = styled.div`
  /* margin-bottom: 10vw; */
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/log-back.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Logo = styled.div`
  margin-bottom: 2vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const LogoMain = styled.img`
  margin-left: 12px;
  max-width: 680px;
  min-height: 10px;
  display: block;
  width: 100%;
`;

const Button = styled.button`
  font-weight: 500;
  color: #f0f0f0;
  background-color: #0063e5;
  letter-spacing: 1.5px;
  width: 100%;
  padding: 15px 10px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 18px;
  cursor: pointer;
  border: 1px solid transparent;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
    font-size: 20px;
    transition: 0.3s;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const LogoMainTwo = styled.img`
    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`;

export default Login;