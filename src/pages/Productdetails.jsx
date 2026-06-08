import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdStar, MdStarHalf, MdStarOutline, } from 'react-icons/md';
import { CiDeliveryTruck, CiHeart } from 'react-icons/ci';
import { BsShieldCheck, BsArrowLeft } from 'react-icons/bs';
import { PiKeyReturnFill } from 'react-icons/pi';
import { useParams, useNavigate } from 'react-router-dom';
import productList from '../data/products.json';
import './ProductDetails.css'; // Opcional, para estilos extra

const Productdetails = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

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
  const formatear = (val) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(val);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<MdStar key={i} className="text-warning" />);
      else if (i - 0.5 === rating) stars.push(<MdStarHalf key={i} className="text-warning" />);
      else stars.push(<MdStarOutline key={i} className="text-secondary" />);
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
    <Container fluid className="px-3 px-md-4 px-lg-5 py-3 py-md-4 py-lg-5">
      {/* Breadcrumb responsive */}
      <div className="mb-3 mb-md-4 d-flex align-items-center gap-2 text-muted small flex-wrap">
        <BsArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        <span>Volver</span>
        <span className="mx-1">/</span>
        <span className="text-dark fw-semibold text-truncate" style={{ maxWidth: '200px' }}>{product.title}</span>
      </div>

      <Row className="g-3 g-md-4 g-lg-5">
        {/* Columna imagen - responsive */}
        <Col xs={12} md={6} lg={6}>
          <div className="position-relative">
            <div className="overflow-hidden rounded-3 rounded-md-4 shadow-sm" style={{ backgroundColor: '#fef6f0' }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid w-100"
                style={{ 
                  objectFit: 'contain', 
                  height: 'auto',
                  maxHeight: '400px',
                  minHeight: '280px',
                  transition: '0.3s'
                }}
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />
            </div>
            
            {/* Badge descuento responsive */}
            {product.discountPercentage > 0 && (
              <div className="position-absolute top-0 start-0 mt-2 mt-md-3 ms-2 ms-md-3 bg-danger text-white px-2 px-md-3 py-1 rounded-pill fw-semibold small">
                -{product.discountPercentage}%
              </div>
            )}
            
            {/* Corazón like responsive */}
            <div className="position-absolute top-0 end-0 mt-2 mt-md-3 me-2 me-md-3 bg-white rounded-circle p-1 p-md-2 shadow-sm">
              <CiHeart size={18} className="text-muted" style={{ width: '18px', height: '18px' }} />
            </div>
          </div>
          
          {/* Miniaturas responsive */}
          <div className="d-flex gap-2 mt-3 justify-content-center flex-wrap">
            {[product.thumbnail, product.thumbnail, product.thumbnail].map((img, idx) => (
              <div
                key={idx}
                className={`border rounded-2 rounded-md-3 p-1 ${activeImage === idx ? 'border-warning' : 'border-light'}`}
                style={{ width: '60px', maxWidth: '15%', cursor: 'pointer' }}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt="thumb" className="w-100 rounded-1" style={{ height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </Col>

        {/* Columna detalles - responsive */}
        <Col xs={12} md={6} lg={6}>
          {/* Marca y rating */}
          <div className="mb-2 mb-md-3 d-flex flex-wrap align-items-center gap-2">
            <span className="text-uppercase small text-muted tracking-wide">
              {product.brand || 'Pin Ups'}
            </span>
            <span className="text-muted d-none d-sm-inline">•</span>
            <div className="d-flex align-items-center gap-1 small flex-wrap">
              {renderStars(product.rating)} 
              <span className="text-muted ms-1">({product.rating})</span>
            </div>
          </div>

          {/* Título responsive */}
          <h1 className="fs-2 fs-md-1 display-md-5 fw-semibold lh-sm mb-2 mb-md-3">
            {product.title}
          </h1>
          
          {/* Descripción */}
          <p className="text-muted mb-3 mb-md-4 small small-md" style={{ lineHeight: 1.5 }}>
            👗 Prenda pensada para talles reales y curvy. Comodidad, estilo y amor propio.
          </p>

          {/* Precios responsive */}
          <div className="mb-3 mb-md-4">
            <span className="fs-3 fs-md-2 fw-bold text-warning" style={{ color: '#f85606' }}>
              {formatear(precioFinal)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-muted text-decoration-line-through ms-2 small">
                {formatear(product.price)}
              </span>
            )}
          </div>

          {/* Cantidad responsive */}
          <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4 mb-4 mb-md-5">
            <span className="fw-semibold">Cantidad</span>
            <div className="d-flex align-items-center border rounded-3 overflow-hidden">
              <button 
                className="border-0 px-3 py-2 bg-light" 
                onClick={() => setCount(Math.max(1, count - 1))}
                style={{ minWidth: '40px' }}
              >
                −
              </button>
              <span className="px-3 px-md-4 py-2" style={{ minWidth: '50px', textAlign: 'center' }}>{count}</span>
              <button 
                className="border-0 px-3 py-2 bg-light" 
                onClick={() => setCount(count + 1)}
                style={{ minWidth: '40px' }}
              >
                +
              </button>
            </div>
            <span className="text-muted small">stock disponible</span>
          </div>

          {/* Botones responsive - stack en móvil */}
          <div className="d-flex flex-column flex-sm-row gap-2 gap-md-3 mb-4 mb-md-5">
            <Button
              className="flex-fill py-2 py-md-3 rounded-pill fw-semibold border-0"
              style={{ backgroundColor: '#f85606', color: 'white' }}
              onClick={handleAddToCart}
            >
              🛒 Agregar al carrito
            </Button>
            <Button 
              variant="outline-secondary" 
              className="flex-fill py-2 py-md-3 rounded-pill fw-semibold"
            >
              💳 Comprar ahora
            </Button>
          </div>

          {/* Ventajas responsive - grid flexible */}
          <div className="border-top pt-3 pt-md-4">
            <Row className="g-2 g-md-3 text-center text-sm-start">
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

          {/* Etiqueta curvy responsive */}
          <div className="mt-3 mt-md-4 text-center text-sm-start">
            <span className="badge bg-light text-dark rounded-pill px-2 px-md-3 py-1 py-md-2 fw-normal small">
              👗 Talle real • Curvy friendly • Moda sin tabúes
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdetails;