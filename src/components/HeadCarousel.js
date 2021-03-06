import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SliderImg = (props) =>{

    let CarPos ={
        data:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    return(
        <div>
            <Carousel {...CarPos}>
                <Slides>
                    <a href="/">
                        <img src="/images/slider1.jpg" alt="slider--1" />
                    </a>
                </Slides>
                <Slides>
                    <a href="/">
                        <img src="/images/slider2.jpg" alt="slider--2" />
                    </a>
                </Slides>
                <Slides>
                    <a href="/">
                        <img src="/images/slider3.jpg" alt="slider--3" />
                    </a>                
                </Slides>
                <Slides>
                    <a href="/">
                        <img src="/images/slider4.jpg" alt="slider--4" />
                    </a>                
                </Slides>
            </Carousel>
        </div>    
    );
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index:1;
        
        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease-in;
        }
    }

    ul li button {
        &:before{
            font-size:10px;
            color: rgb(150,150,171);
        }
    }

    li.slick-active button:before {
        color: white;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`;

const Slides = styled.div`
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default SliderImg;