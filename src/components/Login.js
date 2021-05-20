import styled from 'styled-components';
import React from 'react';

const Login = () =>{
    return(
        <Container>
            <Content>
                <BImage />
            </Content>
        </Container>
    );
}

const Container = styled.section `
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
`;

const Content = styled.div `
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

const BImage = styled.div `
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/log-back.jpg');
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    z-index: -1;
`;

export default Login;