import styled from 'styled-components';
import SliderImg from './HeadCarousel';
import MiniCards from './MiniCards';
import NewItems from './NewItems';
import Originals from './originals';
import Recommend from './Recommend';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movies/movieSlice';
import { selectedUserName } from '../features/user/userSlice';

const Home = (props) =>{
    const dispatch = useDispatch();
    const userName = useSelector(selectedUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        console.log("hello");
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(recommends);
            switch (doc.data().type) {
              default :
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;  

              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
          });
    
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
        });
      }, [userName]);


    return(
       <Container>
           <SliderImg/>
           <MiniCards/>
           <NewItems/>
           <Trending/>
           <Recommend/>
           <Originals/>
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