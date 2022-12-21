import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'


const Login = () => {
    return (
        <div className='container'>
        <section className='d-flex justify-content-between'>
            <div className='left_data mt-3 p-5' style={{ width: "100%" }}>
                <h3 className='text-center col-lg-4'>Sign In</h3>
                <Form>
                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                        <Form.Control type="email" onChange={getdata} name='email' placeholder="Enter email" />
                    </Form.Group>
                    
                    <Form.Group className="mt-3 col-lg-6" controlId="formBasicPassword">
                        <Form.Control type="password" onChange={getdata} name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" className="mt-3 col-lg-6" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
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

export default Login