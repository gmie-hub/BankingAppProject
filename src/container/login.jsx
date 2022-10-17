import { Col, Container, Row, Card } from "react-bootstrap";
import React from "react";
import IMAGES from "../assets/img/image";
import Images from "../components/img";
import Input from "../components/input";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

const Login = () => {
    const {login} = useContext(UserContext);
    const redirect = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        const validUser = login(email, password)
        if(validUser){
            redirect('/register')
        }
        setEmail('');
        setPassword('');
    }

    return(
        <React.Fragment>
            <Container className="sec-welcome" as={'section'} fluid>
                <Row className="justify-content-center align-items-center">
                    <Col lg={7} md={6} sm={12}>
                        <h1 className="text-center fw-bold mb-5 text-font">Welcome</h1>
                        <div className="d-flex flex-row justify-content-center">
                            <Images src={IMAGES.login_img}/>
                        </div>
                    </Col >
                    <Col lg={5} md={6} sm={12}>
                        <div>
                            <Card className="card-bg">
                                <Card.Body>
                                    <form>
                                        <Input 
                                            type={'email'} 
                                            placeholder={'email@example.com'}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <Input 
                                            type={'password'} 
                                            placeholder={'Enter password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </form>
                                    <Button
                                        className={' btn1-bg w-100 my-4 py-3 fs-3 mt-5'} 
                                        name={'Login'}
                                        click={handleSubmit}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Login