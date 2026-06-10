import { useEffect, useRef } from 'react'; // Importamos useRef y useEffect
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Product.css';
import productList from '../data/products.json'; 

function Product() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer para activar la cascada al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('card-visible');
          }, index * 100); // El retraso crea el efecto de cascada uno por uno
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card) => card && observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-center gap-4 py-4'>
      {productList.map((item, index) => (
        <div 
          key={item.id} 
          ref={el => cardsRef.current[index] = el} 
          className="card-cascade" // Clase base del efecto
        >
          <Link to={`/productdetails/${item.id}`} className='product-link'>
            <Card className='product-card h-100 border-0 shadow-sm'>
              <div className="img-container">
                <Card.Img variant="top" src={item.thumbnail} className='product-img' />
              </div>
              <Card.Body>
                <Card.Title className='fs-6 fw-bold text-dark'>{item.title}</Card.Title>
                <div className="d-flex align-items-center gap-2 mb-2">
                  {/* Aquí aplicamos la clase price-pulse que creaste en el CSS */}
                  <span className='fw-bold price-pulse' style={{ color: '#f85606', fontSize: '1.2rem' }}>
                    ${(item.price - (item.price * item.discountPercentage * 0.01)).toFixed(0)}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Product;