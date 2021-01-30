import Container from "./container";
import Row from "./row";
import Col from "./row";

function Hero(props) {
    
    return (

        <section className="hero">
            <Container>
                <Row rowStyle="align-items-center">
                    <Col id="hero-text" className="col-12 col-sm-7">
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                    </Col>
                    <Col id="hero-image" className="col-12 col-sm-5">
                        <img src={props.imageUrl} alt={props.imageAlt}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    
    )

}

export default Hero;