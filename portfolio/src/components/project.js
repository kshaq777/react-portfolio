import Container from "./container";
import Row from "./row";
import Col from "./col";

function Project(props) {

    props = props.proj
    // let lang = props.proj.lang

    return (
        <div key={props.id}>
            <Container fluid="fluid"> 
                <Row rowStyle="align-items-center">
                    <Col className={props.id%2 === 0 ? "col-12 col-lg-4 order-lg-last" : "col-12 col-lg-4"}>
                        <h3>{props.title}</h3>
                        <h5>Languages & Packages Used:</h5>
                        <ul>
                            {props.lang.map(skill => <li>{skill}</li>)}
                        </ul>
                        <p>{props.desc}</p>
                    </Col>
                    <Col className={props.id%2 === 0 ? "col-12 col-lg-8 pr-5" : "col-12 col-lg-8 pl-5"}>
                        <img className="shadow-img" src={props.image} alt={props.title}></img>
                        <p style={{"margin-top": "20px"}}>Take a look at the code: <a href={props.repo}>{props.repo}</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Project;