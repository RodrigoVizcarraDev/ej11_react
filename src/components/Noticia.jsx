import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Noticia = ({tituloNoticia, descripcionNoticia, imagenNoticia}) => { 
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imagenNoticia} />
                <Card.Body>
                    <Card.Title>{tituloNoticia}</Card.Title>
                    <Card.Text className="text-truncate d-inline-block w-100">
                        {descripcionNoticia}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticia;
