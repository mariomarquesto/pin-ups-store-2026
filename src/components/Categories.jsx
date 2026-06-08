import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Categories = () => {
    // Definimos las categorías de Pin Ups de forma estática
    const pinUpsCategories = [
        "Vestidos",
        "Pantalones",
        "Remeras y Blusas",
        "Camperas y Abrigos",
        "Calzado",
        "Accesorios"
    ];

    return (
        <Card style={{ width: '20%' }} className='rounded-1 shadow-sm'>
            <Card.Header style={{ backgroundColor: '#f85606', color: 'white' }}>
                Categorías
            </Card.Header>
            <ListGroup as="ul" variant="flush">
                {pinUpsCategories.map((item, index) => (
                    <Link 
                        to={`/category/${item.toLowerCase()}`} 
                        key={index} 
                        className='text-decoration-none'
                    >
                        <ListGroup.Item 
                            as="li" 
                            action
                            style={{ color: '#333' }}
                        >
                            {item}
                        </ListGroup.Item>
                    </Link>
                ))}
            </ListGroup>
        </Card>
    );
};

export default Categories;