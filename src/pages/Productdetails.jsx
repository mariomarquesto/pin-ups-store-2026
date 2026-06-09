import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdStar, MdStarHalf, MdStarOutline,  } from 'react-icons/md';
import { CiDeliveryTruck, CiHeart } from 'react-icons/ci';
import { BsShieldCheck, BsArrowLeft } from 'react-icons/bs';
import { PiKeyReturnFill } from 'react-icons/pi';
import { useParams, useNavigate } from 'react-router-dom';
import productList from '../data/products.json';
import './ProductDetails.css';

const ProductDetails = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = productList.find(p => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) return (
    <Container className="py-5 text-center">
      <h3 className="fs-4">✨ Prenda no encontrada</h3>
      <Button variant="outline-warning" onClick={() => navigate('/')} className="mt-3 rounded-pill px-4">
        Volver a tienda
      </Button>
    </Container>
  );

  const precioFinal = product.price - (product.price * product.discountPercentage * 0.01);
  const formatear = (val) => new Intl.NumberFormat('es-AR', { 
    style: 'currency', 
    currency: 'ARS', 
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(val);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<MdStar key={i} className="text-warning" size={16} />);
      else if (i - 0.5 === rating) stars.push(<MdStarHalf key={i} className="text-warning" size={16} />);
      else stars.push(<MdStarOutline key={i} className="text-secondary" size={16} />);
    }
    return stars;
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('💄 Iniciá sesión para agregar productos');
      navigate('/login');
      return;
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exist = cart.findIndex(i => i.id === product.id);
    if (exist !== -1) cart[exist].quantity += count;
    else cart.push({ ...product, quantity: count });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`🛍️ ${product.title} agregado al carrito`);
  };

  return (
    <Container className="py-4 py-md-5">
      {/* Breadcrumb */}
      <div className="mb-4 d-flex align-items-center gap-2 text-muted small">
        <BsArrowLeft 
          className="cursor-pointer" 
          onClick={() => navigate(-1)} 
          style={{ cursor: 'pointer' }} 
        />
        <span>Volver</span>
        <span className="mx-1">/</span>
        <span className="text-dark fw-semibold text-truncate" style={{ maxWidth: '250px' }}>
          {product.title}
        </span>
      </div>

      <Row className="g-4 g-lg-5">
        {/* Columna imagen */}
        <Col lg={6}>
          <div className="position-relative">
            <div className="overflow-hidden rounded-4 shadow-sm" style={{ backgroundColor: '#fef6f0' }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid w-100"
                style={{ 
                  objectFit: 'contain', 
                  height: 'auto',
                  maxHeight: '450px',
                  minHeight: '300px',
                  transition: '0.3s'
                }}
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />
            </div>
            
            {/* Badge descuento */}
            {product.discountPercentage > 0 && (
              <div className="position-absolute top-0 start-0 mt-3 ms-3 bg-danger text-white px-3 py-1 rounded-pill fw-semibold small">
                -{product.discountPercentage}%
              </div>
            )}
            
            {/* Botón favorito */}
            <div 
              className="position-absolute top-0 end-0 mt-3 me-3 bg-white rounded-circle p-2 shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <CiHeart 
                size={22} 
                className={isFavorite ? 'text-danger' : 'text-muted'} 
                style={{ fill: isFavorite ? '#f85606' : 'none' }}
              />
            </div>
          </div>
          
          {/* Miniaturas */}
          <div className="d-flex gap-2 mt-3 justify-content-center flex-wrap">
            {[product.thumbnail, product.thumbnail, product.thumbnail].map((img, idx) => (
              <div
                key={idx}
                className={`border rounded-3 p-1 ${activeImage === idx ? 'border-warning' : 'border-light'}`}
                style={{ width: '70px', cursor: 'pointer' }}
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  src={img} 
                  alt="thumb" 
                  className="w-100 rounded-2" 
                  style={{ height: '60px', objectFit: 'cover' }} 
                />
              </div>
            ))}
          </div>
        </Col>

        {/* Columna detalles */}
        <Col lg={6}>
          {/* Marca y rating */}
          <div className="mb-3 d-flex flex-wrap align-items-center gap-2">
            <span className="text-uppercase small fw-semibold text-muted tracking-wide">
              {product.brand || 'Pin Ups'}
            </span>
            <span className="text-muted">•</span>
            <div className="d-flex align-items-center gap-1">
              {renderStars(product.rating)} 
              <span className="text-muted small ms-1">({product.rating})</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
            {product.title}
          </h1>
          
          {/* Descripción */}
          <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
            👗 Prenda pensada para talles reales y curvy. Comodidad, estilo y amor propio.
          </p>

          {/* Precios */}
          <div className="mb-4">
            <span className="fw-bold text-primary" style={{ color: '#f85606', fontSize: 'clamp(1.8rem, 5vw, 2.2rem)' }}>
              {formatear(precioFinal)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-muted text-decoration-line-through ms-2">
                {formatear(product.price)}
              </span>
            )}
          </div>

          {/* Selector de cantidad */}
          <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
            <span className="fw-semibold">Cantidad</span>
            <div className="d-flex align-items-center border rounded-3 overflow-hidden">
              <button 
                className="border-0 px-3 py-2 bg-light" 
                onClick={() => setCount(Math.max(1, count - 1))}
              >
                −
              </button>
              <span className="px-4 py-2" style={{ minWidth: '50px', textAlign: 'center' }}>
                {count}
              </span>
              <button 
                className="border-0 px-3 py-2 bg-light" 
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <span className="text-muted small">stock disponible</span>
          </div>

          {/* Botones */}
          <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
            <Button
              className="flex-fill py-2 rounded-pill fw-semibold border-0"
              style={{ backgroundColor: '#f85606', color: 'white' }}
              onClick={handleAddToCart}
            >
              🛒 Agregar al carrito
            </Button>
            <Button 
              variant="outline-secondary" 
              className="flex-fill py-2 rounded-pill fw-semibold"
            >
              💳 Comprar ahora
            </Button>
          </div>

          {/* Ventajas */}
          <div className="border-top pt-4">
            <Row className="g-3 text-center text-sm-start">
              <Col xs={4}>
                <CiDeliveryTruck size={24} className="text-muted mb-1" />
                <p className="small fw-semibold mb-0">Envíos a todo el país</p>
                <span className="small text-muted d-none d-sm-block">3 a 7 días</span>
              </Col>
              <Col xs={4}>
                <PiKeyReturnFill size={24} className="text-muted mb-1" />
                <p className="small fw-semibold mb-0">14 días de cambio</p>
                <span className="small text-muted d-none d-sm-block">sin cargo</span>
              </Col>
              <Col xs={4}>
                <BsShieldCheck size={24} className="text-muted mb-1" />
                <p className="small fw-semibold mb-0">Compra segura</p>
                <span className="small text-muted d-none d-sm-block">Mercado Pago</span>
              </Col>
            </Row>
          </div>

          {/* Etiqueta curvy */}
          <div className="mt-4 text-center text-sm-start">
            <span className="badge bg-light text-dark rounded-pill px-3 py-2 fw-normal">
              👗 Talle real • Curvy friendly • Moda sin tabúes
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;