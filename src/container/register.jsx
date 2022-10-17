import React from "react"
import { useContext } from "react"
import {Container, Row, Col, Card} from "react-bootstrap"
import IMAGES from "../assets/img/image"
import Button from "../components/button"
import Images from "../components/img"
import Input from "../components/input"
import { UserContext } from "../context/userContext"

const Register = () => {
    const {dispatch} = useContext(UserContext)
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [gender, setGender] = React.useState('Female');
    const [dob, setDOB] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_USER', user: {
                firstName, lastName, email, password, phone, gender, dob, deposit
            }});
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhone('');
        setGender('');
        setDOB('');
        setDeposit('');
        
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
                                    <form>
                                        <Input type={'text'} 
                                            placeholder={'Enter your first name'}
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <Input type={'text'} 
                                            placeholder={'Enter your last name'}
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <Input type={'email'} 
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
                                        <Input 
                                            type={'password'} 
                                            placeholder={'Confirm password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <Input 
                                            type={'tel'} 
                                            placeholder={'Enter PhoneNumber'}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <Input type={'select'}
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        <Input 
                                            type={'date'}
                                            value={dob}
                                            onChange={(e) => setDOB(e.target.value)}
                                        />
                                    
                                        <Input
                                            type={'number'} 
                                            placeholder={'Initial Deposit'}
                                            value={deposit}
                                            onChange={(e) => setDeposit(e.target.value)}
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