function Footer() {
  return (
    <footer className="pt-5 pb-4 mt-5" style={{ backgroundColor: '#fef6f0', borderTop: '1px solid #f0e0d0' }}>
      <div className="container">
        <div className="row g-4">
          
          {/* Columna 1: Atención al Cliente */}
          <div className="col-md-3 col-6">
            <h5 className="fw-semibold mb-3" style={{ color: '#f85606', fontSize: '0.9rem', letterSpacing: '1px' }}>
              ATENCIÓN AL CLIENTE
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Centro de Ayuda</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Guía de Talles Reales</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Cambios y Devoluciones</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Contacto por WhatsApp</a></li>
            </ul>
          </div>
          
          {/* Columna 2: Pin Ups */}
          <div className="col-md-3 col-6">
            <h5 className="fw-semibold mb-3" style={{ color: '#f85606', fontSize: '0.9rem', letterSpacing: '1px' }}>
              PIN UPS
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/aboutus" className="text-dark text-decoration-none small">Sobre Nosotras</a></li>
              <li className="mb-2"><a href="/location" className="text-dark text-decoration-none small">📍 Sucursal</a></li>
              <li className="mb-2"><a href="/termsandconditions" className="text-dark text-decoration-none small">Términos y Condiciones</a></li>
              <li className="mb-2"><a href="/privacypolicy" className="text-dark text-decoration-none small">Política de Privacidad</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Métodos de Pago y Envíos */}
          <div className="col-md-3 col-6">
            <h5 className="fw-semibold mb-3" style={{ color: '#f85606', fontSize: '0.9rem', letterSpacing: '1px' }}>
              MEDIOS DE PAGO
            </h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge bg-white text-dark border px-3 py-2 fw-normal">Efectivo</span>
              <span className="badge bg-white text-dark border px-3 py-2 fw-normal">Mercado Pago</span>
              <span className="badge bg-white text-dark border px-3 py-2 fw-normal">Transferencia</span>
              <span className="badge bg-white text-dark border px-3 py-2 fw-normal">Tarjetas</span>
            </div>
            <h5 className="fw-semibold mb-3" style={{ color: '#f85606', fontSize: '0.9rem', letterSpacing: '1px' }}>
              ENVÍOS
            </h5>
            <p className="small text-muted">Correo Argentino / Andreani. Envíos a todo el país.</p>
          </div>
          
          {/* Columna 4: Logo y Redes */}
          <div className="col-md-3 col-6 text-center text-md-start">
            <img 
              src='/pin-ups-logo2.png' 
              alt="Pin Ups Logo" 
              width={55} 
              height={55}
              className="rounded-circle mb-2"
              style={{ objectFit: 'cover', border: '2px solid #f85606' }}
            />
            <p className="small fw-semibold mt-2" style={{ color: '#f85606' }}>Calidad y estilo en talles reales</p>
            
            <h5 className="fw-semibold mb-3 mt-3" style={{ color: '#f85606', fontSize: '0.9rem', letterSpacing: '1px' }}>
              SEGUINOS
            </h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-secondary fs-5" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.tiktok.com/@pinupstuc" className="text-secondary fs-5" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
              <a href="#" className="text-secondary fs-5" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="mt-4" style={{ borderColor: '#f0e0d0' }} />
        
        {/* Copyright */}
        <div className="text-center pt-3 pb-2">
          <p className="small text-muted mb-0">© {new Date().getFullYear()} Pin Ups · Moda para talles reales · Hecho con 💖 para vos</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;