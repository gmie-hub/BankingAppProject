import React from "react";
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import IMAGES from "../assets/img/image";
import Input from "../components/input";
import { UserContext } from "../context/userContext";

const Dashboard = () => {
    const {logout, handleDeposit, handleWithdraw, users} = React.useContext(UserContext);
    const redirect = useNavigate();

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    const [show1, setShow1] = React.useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // offcanvas
    const [canva, setCanva] = React.useState(false);
    const handleCloseCanva = () => setCanva(false);
    const handleShowCanva = () => setCanva(true);

    const [canva1, setCanva1] = React.useState(false);
    const handleCloseCanva1 = () => setCanva1(false);
    const handleShowCanva1 = () => setCanva1(true);

    let date = new Date();

    function currentDate(){
        return date.toLocaleDateString();
    }

    function currentTime(){
        return date.toLocaleTimeString();
    }

    const [transaction, setTransaction] = React.useState({
        deposited: "",
        withdraw: "",
        depositDescription: "",
        withdrawDescription: "",
        userTransaction: {
            transactionType: "",
            transactionDate: `${currentDate()} ${currentTime()}`,
            description: "",
            transactionAmount: ""
        }
    });
    // const getUser = JSON.parse(localStorage.getItem('currentUser'));
    
    const DepositHandle = (e) => {
        e.preventDefault();
        handleDeposit(transaction.deposited);
        handleClose();
        transaction.userTransaction.transactionType = 'Credit';
        transaction.userTransaction.description = transaction.depositDescription;
        transaction.userTransaction.transactionAmount = transaction.deposited;
   
    }

    const withdrawHandle = (e) => {
        e.preventDefault();
        handleWithdraw(transaction.withdraw);
        handleClose();
        transaction.userTransaction.transactionType = 'Debit';
        transaction.userTransaction.description = transaction.withdrawDescription;
        transaction.userTransaction.transactionAmount = transaction.withdraw;
        
    }
    
   
    users.user.transactionDetails.push(transaction.userTransaction);
    console.log(users.user.transactionDetails);
    console.log(users.deposited);
        // localStorage.setItem("currentUser", JSON.stringify(getUser));
    console.log(users.user);
 
    return (
        <React.Fragment>
            <Container as={"section"} fluid className="section">
                <Row>
                    <Col className="col-lg-2 col-md-6 col-sm-6 bg-color col-md-2">
                        <Button
                            className="d-md-none text-white"
                            variant=""
                            onClick={handleShowCanva}
                            >
                            Profile
                        </Button>
                        <Offcanvas show={canva} onHide={handleCloseCanva}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Welcome!</Offcanvas.Title>
                                </Offcanvas.Header>
                            <Offcanvas.Body>
                                <img className="pic" src={IMAGES.avatar} width={80} height={80} alt="avatar" />
                                <div className="text-center mt-5">
                                    <h5 className="fw-medium text text-center fs-3">WELCOME, <br/>{users.user.lastName} {users.user.firstName}</h5>
                                    <h5 className="fw-medium text text-center fs-3">EMAIL <br/> {users.user.email}</h5>
                                    <h5 className="fw-medium text text-center fs-3">DATE OF BIRTH  <br/>{users.user.dob}</h5>
                                    <h5 className="fw-medium text text-center fs-3 ">PHONE<br/>{users.user.phone}</h5>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div className="show">
                            <img className="pic" src={IMAGES.avatar} width={80} height={80} alt="avatar" />
                            <div className="text-center mt-5">
                                <h5 className="fw-medium text text-center fs-3">WELCOME, <br/>{users.user.lastName} {users.user.firstName}</h5>
                                <h5 className="fw-medium text text-center fs-3">EMAIL <br/> {users.user.email}</h5>
                                <h5 className="fw-medium text text-center fs-3">DATE OF BIRTH  <br/>{users.user.dob}</h5>
                                <h5 className="fw-medium text text-center fs-3 ">PHONE<br/>{users.user.phone}</h5>
                            </div>
                        </div>
                    </Col>

                <Col className="col-lg-8 col-md-12 col-sm-12 order bg-mid">
                    <div className="card cad-bg mx-auto mt-5">
                        <div className="card-body card-adjust my-2">
                            <h3 className="card-title">TIER 1 SAVINGS ACCOUNT</h3>
                            <hr className="text-white" />
                            <h5 className="card-subtitle my-2">Acct No: 0208812596</h5>
                            <h4 className="card-subtitle my-2">Current Balance: {users.user.deposit}</h4>
                        
                        </div>
                    </div>

                    <div className="card mx-5 my-5">
                        <table className="" >
                            <thead>
                                <tr className="table-head">
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Details</th>
                                    <th>Amount</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>

                            <tr className="text-center">
                                <td className="bg-danger">Debit</td>
                            </tr>
                            <tr className="text-center">
                                <td className="bg-success">Credit</td>
                            </tr>
                        </table>
                    </div>
                </Col>

                <Col className="col-lg-2 col-md-6 col-sm-6 bg-color d-flex flex-column justify-content-center">
                <Button
                            className="d-md-none text-white"
                            variant=""
                            onClick={handleShowCanva1}
                            >
                            Transact
                        </Button>
                        <Offcanvas show={canva1} onHide={handleCloseCanva1}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Welcome!</Offcanvas.Title>
                                </Offcanvas.Header>
                            <Offcanvas.Body>
                            <button className="btn rounded-pill form-btn w-75 mx-auto text-white fs-5 input but" onClick={handleShow}>Withdraw</button>
                    <Modal show={show} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Withdraw</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input type="text" placeholder="Description"  
                            class="form-control border rounded mb-3" value={transaction.withdrawDescription} 
                            onChange={(withdrawDescription) => {setTransaction({...transaction, withdrawDescription})}}/>

                            <Input type="number" placeholder="Enter amount to Withdraw"  
                            class="form-control border rounded" value={transaction.withdraw} 
                            onChange={(withdraw) => {setTransaction({...transaction, withdraw})}}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={withdrawHandle}>
                                Withdraw
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <button type="button" className="btn border rounded-pill text-white fs-5 form-btn w-75 mx-auto input but mt-5" onClick={handleShow1}>Deposit</button>
                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input type="text" placeholder="Description" 
                            class="form-control border rounded mb-3" value={transaction.depositDescription} 
                            onChange={(depositDescription) => {setTransaction({...transaction, depositDescription})}}/>
                            
                            <Input type="number" placeholder="Enter amount to deposit" 
                            class="form-control border rounded" value={transaction.deposited} 
                            onChange={(deposited) => {setTransaction({...transaction, deposited})}}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={DepositHandle}>
                                Deposit
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <button 
                        class="btn border rounded-pill form-btn w-75 text-white fs-5 input but mt-5 mx-auto" 
                        id="logout" type="button" 
                        onClick={() => {
                            const out = logout();
                            if (out){
                                redirect('/welcome');
                            }
                        }}>
                        LogOut
                    </button>
                            </Offcanvas.Body>
                        </Offcanvas>

                            <div className="show">          
                    <button className="btn rounded-pill form-btn w-75 mx-auto text-white fs-5 input but" onClick={handleShow}>Withdraw</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Withdraw</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input type="text" placeholder="Description"  
                            class="form-control border rounded mb-3" value={transaction.withdrawDescription} 
                            onChange={(withdrawDescription) => {setTransaction({...transaction, withdrawDescription})}}/>

                            <Input type="number" placeholder="Enter amount to Withdraw"  
                            class="form-control border rounded" value={transaction.withdraw} 
                            onChange={(withdraw) => {setTransaction({...transaction, withdraw})}}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={withdrawHandle}>
                                Withdraw
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <button type="button" className="btn border rounded-pill text-white fs-5 form-btn w-75 mx-auto input but mt-5" onClick={handleShow1}>Deposit</button>
                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input type="text" placeholder="Description" 
                            class="form-control border rounded mb-3" value={transaction.depositDescription} 
                            onChange={(depositDescription) => {setTransaction({...transaction, depositDescription})}}/>
                            
                            <Input type="number" placeholder="Enter amount to deposit" 
                            class="form-control border rounded" value={transaction.deposited} 
                            onChange={(deposited) => {setTransaction({...transaction, deposited})}}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={DepositHandle}>
                                Deposit
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <button 
                        class="btn border rounded-pill form-btn w-75 text-white fs-5 input but mt-5 mx-auto" 
                        id="logout" type="button" 
                        onClick={() => {
                            const out = logout();
                            if (out){
                                redirect('/welcome');
                            }
                        }}>
                        LogOut
                    </button>
 
                            </div>
                </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;