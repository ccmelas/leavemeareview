import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import MainBG from './MainBG';
import Separator from './Separator';
import AuthForm from './AuthForm';
import InputGroup from './InputGroup';


class Login extends Component {
    render() {
        return (
            <MainBG>
                <AuthForm>
                    <h4>Sign in</h4>
                    <InputGroup type="email" placeholder="E-mail" required="required" />
                    <InputGroup type="password" placeholder="Password" required="required"/>
                    <Button length="block" bold type="submit">Login</Button>
                    <p>New here? <Link to="/register">Register</Link></p>
                    <div className="gap"></div>                    
                    <Separator text="or"/>
                    <div className="gap"></div>
                    <Button length="block" scheme="google">Sign in with Google</Button>
                </AuthForm>
            </MainBG>
        );
    }
}

export default Login;