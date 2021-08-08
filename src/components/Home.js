import styled from 'styled-components';
import SliderImg from './HeadCarousel';
import MiniCards from './MiniCards';

const Home = (props) =>{
    return(
       <Container>
           <SliderImg/>
           <MiniCards/>
       </Container>
    );
}

export default Home;


const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url('/images/home-background.png') center center no-repeat / cover fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index:-1;
    }
`;