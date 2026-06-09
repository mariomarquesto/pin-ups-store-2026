// src/pages/AboutUs.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart, FaUsers,  FaQuoteLeft, FaInstagram, FaWhatsapp, FaStar } from 'react-icons/fa';
import {  useEffect } from 'react';

const AboutUs = () => {

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
    <div className="about-us-page" style={{ backgroundColor: '#fef6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Hero Section con animación */}
      <div className="about-hero text-center py-5" style={{ backgroundColor: '#f85606', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-particles" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="floating-heart" style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}>❤️</div>
          ))}
        </div>
        <Container>
          <h1 className="display-4 fw-bold mb-3 animate-on-scroll" style={{ animation: 'fadeInUp 0.8s ease' }}>✨ Sobre Nosotras ✨</h1>
          <p className="lead mb-0 animate-on-scroll" style={{ animation: 'fadeInUp 0.8s ease 0.2s backwards' }}>Moda para talles reales · Calzado ancho especial · Amor propio</p>
        </Container>
      </div>

      <Container className="py-5">
        
        {/* Historia */}
        <Row className="align-items-center mb-5 animate-on-scroll">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="rounded-4 overflow-hidden shadow-lg position-relative" style={{ transform: 'perspective(1000px) rotateY(-2deg)', transition: 'all 0.5s' }}>
              <img 
                src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600" 
                alt="Mujeres reales" 
                className="img-fluid w-100"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-3">
                <small>👗✨ Cuerpos reales, estilos reales</small>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-4">
              <h2 className="fw-bold mb-3" style={{ color: '#f85606' }}>💖 Nuestra historia</h2>
              <p className="lead fw-semibold">&quot;Nacimos para que todas las mujeres se sientan hermosas, cómodas y seguras.&quot;</p>
              <p>Pin Ups nació de la amistad y el sueño compartido de dos mujeres que saben lo que es buscar ropa que realmente les quede bien.</p>
              <p>Cansadas de encontrar solo talles estándar y zapatos que aprietan, decidieron crear su propia marca: <strong className="text-primary" style={{ color: '#f85606' }}>Pin Ups</strong>.</p>
              <p>Hoy somos una comunidad que celebra la diversidad, los cuerpos reales y el estilo sin limitaciones.</p>
            </div>
          </Col>
        </Row>

        {/* Fundadoras */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: '#f85606' }}>👭 Nuestras fundadoras</h2>
          <p className="text-muted">Dos amigas, un sueño, una pasión</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s', cursor: 'pointer' }}>
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #f85606, #ff8c5a)' }}>
                <FaHeart size={50} color="white" />
              </div>
              <h3 className="fw-bold" style={{ color: '#f85606' }}>Ana</h3>
              <p className="text-muted">✨ Alma creativa | Diseñadora</p>
              <p>&quot;Creo ropa que abraza, que acompaña, que hace sentir única a cada mujer.&quot;</p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                {[...Array(5)].map((_, i) => <FaStar key={i} style={{ color: '#f85606' }} />)}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s', cursor: 'pointer' }}>
              <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #f85606, #ff8c5a)' }}>
                <FaUsers size={50} color="white" />
              </div>
              <h3 className="fw-bold" style={{ color: '#f85606' }}>Ale</h3>
              <p className="text-muted">🌟 Corazón del negocio | Gestora</p>
              <p>&quot;Me aseguro de que cada cliente reciba atención personalizada.&quot;</p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                {[...Array(5)].map((_, i) => <FaStar key={i} style={{ color: '#f85606' }} />)}
              </div>
            </div>
          </Col>
        </Row>

        {/* Lo que ofrecemos */}
        <div className="text-center mt-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: '#f85606' }}>🌸 Lo que ofrecemos</h2>
          <p className="text-muted mb-4">Soluciones pensadas para vos, para tu comodidad, para tu estilo</p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s' }}>
              <div className="mb-3" style={{ fontSize: '3rem' }}>👗</div>
              <h4 className="mt-3 fw-bold" style={{ color: '#f85606' }}>Talles reales</h4>
              <p className="text-muted">1X, 2X, 3X, 4X y más. Ropa diseñada para cuerpos reales, con cortes que abrazan sin apretar.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s' }}>
              <div className="mb-3" style={{ fontSize: '3rem' }}>👠</div>
              <h4 className="mt-3 fw-bold" style={{ color: '#f85606' }}>Calzado ancho especial</h4>
              <p className="text-muted">Zapatos diseñados para pies anchos. Ancho EE y EEE. Comodidad sin renunciar al estilo.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll" style={{ transition: 'all 0.3s' }}>
              <div className="mb-3" style={{ fontSize: '3rem' }}>💬</div>
              <h4 className="mt-3 fw-bold" style={{ color: '#f85606' }}>Atención personalizada</h4>
              <p className="text-muted">Te asesoramos por WhatsApp, mail o redes. Queremos que encuentres lo que buscás.</p>
            </div>
          </Col>
        </Row>

        {/* Frase motivacional */}
        <div className="text-center mt-5 pt-4 animate-on-scroll">
          <div className="p-5 rounded-4" style={{ background: 'linear-gradient(135deg, #f85606, #ff8c5a)', color: 'white' }}>
            <FaQuoteLeft size={50} className="mb-3 opacity-50" />
            <p className="fs-3 fst-italic">&quot;La moda no tiene talla. El estilo no tiene límite. Pin Ups es para todas.&quot;</p>
            <p className="mt-3 mb-0">— Ana y Ale, fundadoras de Pin Ups</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="text-center mt-5 animate-on-scroll">
          <h3 className="fw-bold" style={{ color: '#f85606' }}>📱 Seguinos en redes</h3>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="bg-white rounded-circle p-3 shadow-lg" style={{ transition: 'all 0.3s', cursor: 'pointer' }}>
                <FaInstagram size={30} style={{ color: '#f85606' }} />
              </div>
            </a>
            <a href="https://wa.me/5493813471147" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="bg-white rounded-circle p-3 shadow-lg" style={{ transition: 'all 0.3s', cursor: 'pointer' }}>
                <FaWhatsapp size={30} style={{ color: '#25D366' }} />
              </div>
            </a>
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

        .about-hero {
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
      `}</style>
    </div>
  );
};

export default AboutUs;