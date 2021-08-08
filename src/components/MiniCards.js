import styled from 'styled-components';

const MiniCards = () =>{
    return(
        <Container>
            <card>
                <img src="" alt="card"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="" type="video/mp4"/>
                </video>
            </card>
        </Container>
    );
}

export default MiniCards;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;