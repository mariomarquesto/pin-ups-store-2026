// src/pages/HelpCenter.jsx
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRuler,
  FaExchangeAlt,
  FaHeart,
  FaShoePrints,
  FaBoxOpen,
  FaCreditCard,
  FaUserCheck,
} from "react-icons/fa";
import { useEffect } from "react";

const HelpCenter = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          section.classList.add("animated");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="help-page"
      style={{
        backgroundColor: "#fef6f0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <div
        className="help-hero text-center py-5"
        style={{
          backgroundColor: "#f85606",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="hero-particles"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-heart"
              style={{
                position: "absolute",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 3}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ❓
            </div>
          ))}
        </div>
        <Container>
          <h1
            className="display-4 fw-bold mb-3 animate-on-scroll"
            style={{ animation: "fadeInUp 0.8s ease" }}
          >
            ✨ Centro de Ayuda ✨
          </h1>
          <p
            className="lead mb-0 animate-on-scroll"
            style={{ animation: "fadeInUp 0.8s ease 0.2s backwards" }}
          >
            Estamos aquí para ayudarte con toda la info que necesitás
          </p>
        </Container>
      </div>

      <Container className="py-5">
        {/* Guía de Talles Reales */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: "#f85606" }}>
            👗 Guía de Talles Reales
          </h2>
          <p className="text-muted">
            Encontrá tu talle ideal · Diseñado para cuerpos reales
          </p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <div
              className="bg-white rounded-4 p-4 shadow-lg h-100 animate-on-scroll"
              style={{ transition: "all 0.3s" }}
            >
              <FaRuler
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold mb-3" style={{ color: "#f85606" }}>
                📏 Tabla de talles - Ropa
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead style={{ backgroundColor: "#f85606", color: "white" }}>
                    <tr>
                      <th>Talle</th>
                      <th>Busto (cm)</th>
                      <th>Cintura (cm)</th>
                      <th>Cadera (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1X</td>
                      <td>102-107</td>
                      <td>86-91</td>
                      <td>112-117</td>
                    </tr>
                    <tr>
                      <td>2X</td>
                      <td>112-117</td>
                      <td>96-102</td>
                      <td>122-127</td>
                    </tr>
                    <tr>
                      <td>3X</td>
                      <td>122-127</td>
                      <td>107-112</td>
                      <td>132-137</td>
                    </tr>
                    <tr>
                      <td>4X</td>
                      <td>132-137</td>
                      <td>117-122</td>
                      <td>142-147</td>
                    </tr>
                    <tr>
                      <td>Plus S</td>
                      <td>95-100</td>
                      <td>80-85</td>
                      <td>100-105</td>
                    </tr>
                    <tr>
                      <td>Plus M</td>
                      <td>105-110</td>
                      <td>90-95</td>
                      <td>110-115</td>
                    </tr>
                    <tr>
                      <td>Plus L</td>
                      <td>115-120</td>
                      <td>100-105</td>
                      <td>120-125</td>
                    </tr>
                    <tr>
                      <td>Plus XL</td>
                      <td>125-130</td>
                      <td>110-115</td>
                      <td>130-135</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted small mt-2">
                ⚠️ Las medidas son orientativas. Consultanos si tenés dudas.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div
              className="bg-white rounded-4 p-4 shadow-lg h-100 animate-on-scroll"
              style={{ transition: "all 0.3s" }}
            >
              <FaShoePrints
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold mb-3" style={{ color: "#f85606" }}>
                👠 Calzado ancho especial
              </h4>
              <div className="table-responsive">
                <table className="table table-bordered text-center">
                  <thead style={{ backgroundColor: "#f85606", color: "white" }}>
                    <tr>
                      <th>Talle</th>
                      <th>Largo (cm)</th>
                      <th>Ancho</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>35</td>
                      <td>22.5</td>
                      <td rowSpan="8">
                        Ancho EE (Ancho especial)
                        <br />
                        Ancho EEE (Extra ancho)
                      </td>
                    </tr>
                    <tr>
                      <td>36</td>
                      <td>23.0</td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td>23.5</td>
                    </tr>
                    <tr>
                      <td>38</td>
                      <td>24.0</td>
                    </tr>
                    <tr>
                      <td>39</td>
                      <td>24.5</td>
                    </tr>
                    <tr>
                      <td>40</td>
                      <td>25.0</td>
                    </tr>
                    <tr>
                      <td>41</td>
                      <td>25.5</td>
                    </tr>
                    <tr>
                      <td>42</td>
                      <td>26.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted small mt-2">
                👣 ¿Pies anchos? Nuestro calzado tiene horma especial para mayor
                comodidad.
              </p>
            </div>
          </Col>
        </Row>

        {/* Cómo medirse correctamente */}
        <div className="bg-white rounded-4 p-4 shadow-sm mb-5 animate-on-scroll">
          <h4 className="fw-bold mb-3" style={{ color: "#f85606" }}>
            📏 ¿Cómo tomar tus medidas?
          </h4>
          <Row>
            <Col md={4}>
              <div className="text-center p-3">
                <div style={{ fontSize: "2rem" }}>📐</div>
                <p className="fw-bold mb-1">Busto</p>
                <small className="text-muted">
                  Alrededor de la parte más ancha del pecho
                </small>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-3">
                <div style={{ fontSize: "2rem" }}>📍</div>
                <p className="fw-bold mb-1">Cintura</p>
                <small className="text-muted">
                  En la parte más angosta del torso
                </small>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-3">
                <div style={{ fontSize: "2rem" }}>📏</div>
                <p className="fw-bold mb-1">Cadera</p>
                <small className="text-muted">
                  Alrededor de la parte más ancha de la cadera
                </small>
              </div>
            </Col>
          </Row>
        </div>

        {/* Cambios y Devoluciones */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: "#f85606" }}>
            🔄 Cambios y Devoluciones
          </h2>
          <p className="text-muted">Tu satisfacción es nuestra prioridad</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll">
              <FaExchangeAlt
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold" style={{ color: "#f85606" }}>
                14 días de cambio
              </h4>
              <p className="text-muted">
                Tenés 14 días corridos desde que recibís el producto para
                solicitar un cambio de talle o producto.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll">
              <FaBoxOpen
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold" style={{ color: "#f85606" }}>
                Condiciones
              </h4>
              <p className="text-muted">
                Producto sin uso, con etiquetas originales y en su packaging.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll">
              <FaCreditCard
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold" style={{ color: "#f85606" }}>
                Reembolso
              </h4>
              <p className="text-muted">
                Si el producto tiene falla, te devolvemos el 100% o reponemos el
                producto sin cargo.
              </p>
            </div>
          </Col>
        </Row>

        {/* Preguntas frecuentes */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: "#f85606" }}>
            ❓ Preguntas frecuentes
          </h2>
          <p className="text-muted">Lo que más nos consultan</p>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5 animate-on-scroll">
          <Accordion.Item
            eventKey="0"
            style={{ border: "none", marginBottom: "10px" }}
          >
            <Accordion.Header
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <strong>🚚 ¿Cuánto tarda el envío?</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "white",
                borderRadius: "0 0 10px 10px",
              }}
            >
              Los envíos tardan entre 3 a 7 días hábiles según tu ubicación.
              Envío gratis en compras superiores a $70,000.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="1"
            style={{ border: "none", marginBottom: "10px" }}
          >
            <Accordion.Header>
              <strong>💳 ¿Qué medios de pago aceptan?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Aceptamos efectivo (en sucursal), tarjetas de crédito/débito,
              Mercado Pago y transferencia bancaria.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="2"
            style={{ border: "none", marginBottom: "10px" }}
          >
            <Accordion.Header>
              <strong>👗 ¿Los talles son reales?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Sí, trabajamos con talles reales (1X a 4X, Plus S a Plus XL)
              diseñados especialmente para cuerpos reales. Consultá nuestra guía
              de talles.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="3"
            style={{ border: "none", marginBottom: "10px" }}
          >
            <Accordion.Header>
              <strong>👠 ¿Los zapatos son anchos?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Sí, nuestro calzado está diseñado con horma ancha especial (EE y
              EEE). Ideales para pies anchos.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="4"
            style={{ border: "none", marginBottom: "10px" }}
          >
            <Accordion.Header>
              <strong>🔄 ¿Puedo cambiar un producto?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Sí, tenés 14 días corridos para cambiar de talle o producto.
              Contactanos por WhatsApp o email para coordinar.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="5"
            style={{ border: "none", marginBottom: "10px" }}
          >
            <Accordion.Header>
              <strong>📍 ¿Dónde está la sucursal?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Estamos en Buenos Aires 190, San Miguel de Tucumán. Te esperamos
              de lunes a viernes de 10 a 20hs, sábados de 10 a 17hs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Contacto */}
        <div className="text-center mb-5 animate-on-scroll">
          <h2 className="fw-bold" style={{ color: "#f85606" }}>
            📞 ¿Necesitás ayuda?
          </h2>
          <p className="text-muted">
            Estamos disponibles para resolver tus dudas
          </p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll">
              <FaUserCheck
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold" style={{ color: "#f85606" }}>
                📧 Email
              </h4>
              <p className="text-muted">hola@pinups.com.ar</p>
              <p className="small">Respondemos en menos de 24 horas hábiles</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center p-4 rounded-4 bg-white shadow-lg h-100 animate-on-scroll">
              <FaHeart
                size={40}
                style={{ color: "#f85606" }}
                className="mb-3"
              />
              <h4 className="fw-bold" style={{ color: "#f85606" }}>
                📍 Sucursal
              </h4>
              <p className="text-muted">
                Buenos Aires 190, San Miguel de Tucumán
              </p>
              <p className="small">Lunes a Viernes 10-20hs · Sábados 10-17hs</p>
            </div>
          </Col>
        </Row>

        {/* Frase motivacional */}
        <div className="text-center mt-4 animate-on-scroll">
          <div
            className="p-4 rounded-4"
            style={{
              background: "linear-gradient(135deg, #f85606, #ff8c5a)",
              color: "white",
            }}
          >
            <FaHeart size={40} className="mb-3 opacity-50" />
            <p className="fs-5 fw-semibold">
              &ldquo;Estamos acá para vos, siempre con una sonrisa y la mejor
              onda&rdquo; 💖
            </p>
            <p className="mb-0 small">— El equipo de Pin Ups</p>
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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

        .help-hero {
          position: relative;
          overflow: hidden;
        }

        .btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
        }

        .rounded-4 {
          border-radius: 20px;
        }

        .shadow-lg {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
          transition: all 0.3s ease;
        }

        .shadow-lg:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(248,86,6,0.2) !important;
        }

        .accordion-button:not(.collapsed) {
          background-color: #fef6f0;
          color: #f85606;
        }

        .accordion-button:focus {
          box-shadow: none;
          border-color: #f85606;
        }

        table {
          font-size: 0.85rem;
        }

        th, td {
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default HelpCenter;
