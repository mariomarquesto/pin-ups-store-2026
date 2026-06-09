// src/pages/Location.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaHeart,  } from 'react-icons/fa';
import {  useEffect } from 'react';

const Location = () => {

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          section.classList.add('animated');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="location-page" style={{ backgroundColor: '#fef6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <div className="location-hero text-center py-5" style={{ backgroundColor: '#f85606', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-particles" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="floating-heart" style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}>📍</div>
          ))}
        </div>
        <Container>
          <h1 className="display-4 fw-bold mb-3 animate-on-scroll" style={{ animation: 'fadeInUp 0.8s ease' }}>📍 Nuestra Sucursal</h1>
          <p className="lead mb-0 animate-on-scroll" style={{ animation: 'fadeInUp 0.8s ease 0.2s backwards' }}>Buenos Aires 190 · San Miguel de Tucumán</p>
        </Container>
      </div>

      <Container className="py-5">
        
        {/* Mapa y datos de contacto */}
        <Row className="g-4 mb-5">
          <Col lg={7}>
            <div className="map-container rounded-4 overflow-hidden shadow-lg animate-on-scroll" style={{ height: '450px', position: 'relative' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.345678901234!2d-65.21234567890123!3d-26.823456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2sBuenos%20Aires%20190%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pin Ups Sucursal"
              ></iframe>
            </div>
          </Col>
          <Col lg={5}>
            <div className="contact-info bg-white rounded-4 p-4 shadow-lg animate-on-scroll h-100">
              <h3 className="fw-bold mb-4" style={{ color: '#f85606' }}>✨ Información de contacto</h3>
              
              <div className="mb-4 d-flex align-items-start">
                <FaMapMarkerAlt size={24} style={{ color: '#f85606' }} className="me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Dirección</h5>
                  <p className="text-muted mb-0">Buenos Aires 190, San Miguel de Tucumán<br />Tucumán, Argentina</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <FaClock size={24} style={{ color: '#f85606' }} className="me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Horarios de atención</h5>
                  <p className="text-muted mb-0">
                    Lunes a Viernes: 10:00 - 20:00<br />
                    Sábados: 10:00 - 17:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <FaPhoneAlt size={24} style={{ color: '#f85606' }} className="me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Teléfono</h5>
                  <p className="text-muted mb-0">+54 381 347-1147</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <FaEnvelope size={24} style={{ color: '#f85606' }} className="me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Email</h5>
                  <p className="text-muted mb-0">hola@pinups.com.ar</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Cómo llegar */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: '#f85606' }}>🚗 ¿Cómo llegar?</h2>
          <p className="text-muted">Diferentes opciones para que nos visites</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s' }}>
              <div className="mb-3 d-flex align-items-center justify-content-center" style={{ fontSize: '3rem' }}>🚗</div>
              <h4 className="fw-bold" style={{ color: '#f85606' }}>En auto</h4>
              <p className="text-muted">Desde Av. Belgrano, doblá en calle Buenos Aires. Tenemos estacionamiento gratuito para clientas.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s' }}>
              <div className="mb-3 d-flex align-items-center justify-content-center" style={{ fontSize: '3rem' }}>🚌</div>
              <h4 className="fw-bold" style={{ color: '#f85606' }}>En colectivo</h4>
              <p className="text-muted">Líneas 3, 5, 8, 10, 12, 18. Bajada en Av. Belgrano y Buenos Aires.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s' }}>
              <div className="mb-3 d-flex align-items-center justify-content-center" style={{ fontSize: '3rem' }}>🚶</div>
              <h4 className="fw-bold" style={{ color: '#f85606' }}>A pie</h4>
              <p className="text-muted">En pleno centro, a 3 cuadras de la Plaza Independencia. Fácil acceso peatonal.</p>
            </div>
          </Col>
        </Row>

        {/* Beneficios de visitarnos */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: '#f85606' }}>✨ Beneficios de visitarnos</h2>
          <p className="text-muted">Te esperamos con todo el amor Pin Ups</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={3}>
            <div className="text-center p-3 rounded-4 bg-white shadow-sm h-100 animate-on-scroll">
              <div className="mb-2" style={{ fontSize: '2rem' }}>👗</div>
              <p className="fw-bold mb-0">Probate antes de comprar</p>
              <small className="text-muted">Vestidores amplios y cómodos</small>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center p-3 rounded-4 bg-white shadow-sm h-100 animate-on-scroll">
              <div className="mb-2" style={{ fontSize: '2rem' }}>💳</div>
              <p className="fw-bold mb-0">Todos los medios de pago</p>
              <small className="text-muted">Tarjetas, efectivo, transferencia</small>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center p-3 rounded-4 bg-white shadow-sm h-100 animate-on-scroll">
              <div className="mb-2" style={{ fontSize: '2rem' }}>🎁</div>
              <p className="fw-bold mb-0">Promos exclusivas</p>
              <small className="text-muted">Solo para visitas presenciales</small>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center p-3 rounded-4 bg-white shadow-sm h-100 animate-on-scroll">
              <div className="mb-2" style={{ fontSize: '2rem' }}>☕</div>
              <p className="fw-bold mb-0">Cafecito de bienvenida</p>
              <small className="text-muted">Mientras mirás la colección</small>
            </div>
          </Col>
        </Row>

        {/* Frase motivacional */}
        <div className="text-center mt-4 animate-on-scroll">
          <div className="p-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f85606, #ff8c5a)', color: 'white' }}>
            <FaHeart size={40} className="mb-3 opacity-50" />
            <p className="fs-4 fst-italic">&quot;Te esperamos con las puertas abiertas y el corazón ❤️&quot;</p>
            <p className="mt-3 mb-0">— Ana y Ale, fundadoras de Pin Ups</p>
          </div>
        </div>

        {/* Botón volver */}
        <div className="text-center mt-5">
          <Link to="/">
            <button className="btn rounded-pill px-4 py-2" style={{ backgroundColor: '#f85606', color: 'white', border: 'none', transition: 'all 0.3s' }}>
              ← Volver a la tienda
            </button>
          </Link>
        </div>

      </Container>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating-heart {
          font-size: 24px;
          animation: float 3s infinite ease-in-out;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .location-hero {
          position: relative;
          overflow: hidden;
        }

        .btn:hover, .bg-white:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
        }

        .rounded-4 {
          border-radius: 20px;
        }

        .shadow-lg {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }

        .shadow-lg:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(248,86,6,0.2) !important;
        }

        .map-container {
          transition: all 0.3s ease;
        }

        .map-container:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </div>
  );
};

export default Location;