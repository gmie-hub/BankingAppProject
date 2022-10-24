import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import IMAGES from "../assets/img/image"
import Button from "../components/button"
import Images from "../components/img"

const Welcome = () => {
    const redirect = useNavigate();
    const handleRegister = () => {
        redirect('/register');
    }
    const handleLogin = () => {
        redirect('/login');
    }
    return(
        <React.Fragment>
            <Container className="sec-welcome" as={'section'} fluid>
                <Row className="welcome-pg">
                    <Col className="col-lg-7 col-md-6 col-12">
                        
                        <h1 className="text-center fw-bold mb-5 text-font">Welcome</h1>
                        <Images src={IMAGES.welcome_img}/>
                    </Col>
                    <Col className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="w-75 mt-5 ">
                        <Button className={' btn1-bg w-100 my-4 py-3 fs-3'} click={handleRegister} name={'Register'}/>
                        <Button className={' btn2-bg w-100 py-3 fs-3'} click={handleLogin} name={'Login'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Welcome