import React, { useContext }  from "react"
import {Container, Row, Col, Card} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import IMAGES from "../assets/img/image"
import Button from "../components/button"
import Images from "../components/img"
import Input from "../components/input"
import { UserContext } from "../context/userContext"

const Register = () => {
    const {register} = useContext(UserContext)
    const redirect = useNavigate();
   
    const [userDetails, setUserDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        gender: "",
        dob: "",
        deposit: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const regData = register(userDetails)
        if(regData){
            redirect("/login");
        }
    }

    return(
        <React.Fragment>
            <Container className="p-block" as={'section'} fluid>
                <Row className="justify-content-center align-items-center">
                    <Col lg={7} md={6} sm={12} className>
                        <h1 className="text-center fw-bold mb-5 text-font">Welcome</h1>
                        <div className="d-flex flex-row justify-content-center">
                            <Images src={IMAGES.register_img}/>
                        </div>
                    </Col>
                    <Col className="col-lg-5 col-md-6 col-12 my-auto">
                        <div>
                            <Card className="card-bg mt-5">
                                <Card.Body>
                                    <form method="POST">
                                        <Input type={'text'} 
                                            placeholder={'Enter your first name'}
                                            value={userDetails.firstName}
                                            onChange={(firstName) => {setUserDetails({...userDetails, firstName})}}
                                        />
                                        <Input type={'text'} 
                                            placeholder={'Enter your last name'}
                                            value={userDetails.lastName}
                                            onChange={(lastName) => {setUserDetails({...userDetails, lastName})}}
                                        />
                                        <Input type={'email'} 
                                            placeholder={'email@example.com'}
                                            value={userDetails.email}
                                            onChange={(email) => {setUserDetails({...userDetails, email})}}
                                        />
                                        <Input 
                                            type={'password'} 
                                            placeholder={'Enter password'}
                                            value={userDetails.password}
                                            onChange={(password) => {setUserDetails({...userDetails, password})}}
                                        />
                                        <Input 
                                            type={'password'} 
                                            placeholder={'Confirm password'}
                                            value={userDetails.confirmPassword}
                                            onChange={(confirmPassword) => {setUserDetails({...userDetails, confirmPassword})}}
                                        />
                                        <Input 
                                            type={'tel'} 
                                            placeholder={'Enter PhoneNumber'}
                                            value={userDetails.phone}
                                            onChange={(phone) => {setUserDetails({...userDetails, phone})}}
                                        />
                                        <Input type={'select'}
                                            value={userDetails.gender}
                                            onChange={(gender) => {setUserDetails({...userDetails, gender})}}
                                        />
                                        <Input 
                                            type={'date'}
                                            value={userDetails.dob}
                                            onChange={(dob) => {setUserDetails({...userDetails, dob})}}
                                        />
                                    
                                        <Input
                                            type={'number'} 
                                            placeholder={'Initial Deposit'}
                                            value={userDetails.deposit}
                                            onChange={(deposit) => {setUserDetails({...userDetails, deposit})}}
                                        />
                                        
                                    </form>
                                    <Button
                                        className={' btn1-bg w-100 my-4 py-3 fs-3 mt-5'} 
                                        name={'Register'}
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

export default Register