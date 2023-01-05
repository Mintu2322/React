import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './Sign_img'
import { useState } from 'react'


const Home = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const { data, setData } = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.v)

        const { value, name } = e.target
        // console.log(e.target.v)

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            alert('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            alert('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (date === "") {
            alert('date field is requred', {
                position: "top-center",
            });
        } else if (password === "") {
            alert('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            alert('password length greater five', {
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");

            localStorage.setItem("userreact", JSON.stringify([...data, inpval]));

        }
    }


    return (
        <>
            <div className='container'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-5 p-' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" onChange={getdata} name='name' placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" onChange={getdata} name='date' />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" onChange={getdata} name='email' placeholder="Enter email" />
                            </Form.Group>


                            <Form.Group className="mt-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" onChange={getdata} name='password' placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className="mt-3 col-lg-1" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'> Already Have an Account <span> SignIn </span></p>
                    </div>
                </section>
                <SIgn_img />
            </div>
        </>
    )
}

export default Home