import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Product.css";

import productList from "../data/products.json";

const calcularPrecioConDescuento = (price, discountPercentage) => {
  if (!discountPercentage || discountPercentage === 0) return price;

  const discounted =
    price - (price * discountPercentage) / 100;

  return Math.round(discounted);
};

const formatearPrecio = (precio) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(precio);
};

function Product({
  products = null,
  limit = null,
  showRating = true,
  showBrand = true,
}) {
  const productosAMostrar = products
    ? products
    : limit
    ? productList.slice(0, limit)
    : productList;

  if (!productosAMostrar || productosAMostrar.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">
          No hay productos disponibles
        </p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 py-4">
      {productosAMostrar.map((item) => {
        const precioConDescuento =
          calcularPrecioConDescuento(
            item.price,
            item.discountPercentage
          );

        const tieneDescuento =
          item.discountPercentage > 0;

        return (
          <Link
            to={`/productdetails/${item.id}`}
            key={item.id}
            className="text-decoration-none product-link"
          >
            <Card className="product-card h-100 border-0 shadow-sm">
              <div className="img-container position-relative overflow-hidden">
                {tieneDescuento && (
                  <span
                    className="position-absolute top-0 end-0 m-2 px-2 py-1 bg-danger text-white rounded-pill small fw-bold"
                    style={{ zIndex: 10 }}
                  >
                    -{item.discountPercentage}%
                  </span>
                )}

                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  alt={item.title}
                  className="product-img p-3"
                  loading="lazy"
                />
              </div>

              <Card.Body className="d-flex flex-column">
                {showBrand && (
                  <p className="text-muted small mb-1">
                    {item.brand}
                  </p>
                )}

                <Card.Title className="fs-6 fw-bold text-dark mb-2">
                  {item.title}
                </Card.Title>

                {showRating && item.rating && (
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <span className="text-warning">★</span>
                    <span className="small text-muted">
                      {item.rating}
                    </span>
                  </div>
                )}

                <div className="mt-auto">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="fw-bold"
                      style={{
                        color: "#f85606",
                        fontSize: "1.2rem",
                      }}
                    >
                      {formatearPrecio(
                        precioConDescuento
                      )}
                    </span>

                    {tieneDescuento && (
                      <span className="text-decoration-line-through text-muted small">
                        {formatearPrecio(item.price)}
                      </span>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

Product.propTypes = {
  products: PropTypes.array,
  limit: PropTypes.number,
  showRating: PropTypes.bool,
  showBrand: PropTypes.bool,
};

export default Product;