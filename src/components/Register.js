import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import MainBG from './MainBG';
import Separator from './Separator';
import AuthForm from './AuthForm';
import InputGroup from './InputGroup';


class Register extends Component {
    render() {
        return (
            <MainBG>
                <AuthForm>
                    <h4>Sign up</h4>
                    <InputGroup type="text" placeholder="Name" required="required" />
                    <InputGroup type="email" placeholder="E-mail" required="required" />
                    <InputGroup type="password" placeholder="Password" required="required" />
                    <Button length="block" bold type="submit">Register</Button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <div className="gap"></div>                    
                    <Separator text="or"/>
                    <div className="gap"></div>
                    <Button length="block" scheme="google">Sign up with Google</Button>
                </AuthForm>
            </MainBG>
        );
    }
}

export default Register;