import Slider from '../../src/components/Slider';
import ProductContainer from '../../src/components/JustForYou';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      {/* Slider - ancho completo, fuera del container */}
      <div className="w-100">
        <Slider />
      </div>
      
      {/* Contenido con container para mantener márgenes */}
      <Container>
        <div className="banner mt-3">
          <img src='./pin-ups-baner.png' alt="Banner Image" style={{ width: '100%' }} />
        </div>
        
        <ProductContainer />
        
        <div className='d-flex justify-content-center align-items-center'>
          <Button variant="outline-success" className='mt-3' style={{ width: '15rem' }}>
            Load More
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Home;