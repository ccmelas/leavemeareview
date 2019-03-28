import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import Button from './../components/Button';
import MainBG from './../components/MainBG';
import Separator from './../components/Separator';
import AuthForm from './../components/AuthForm';
import InputGroup from './../components/InputGroup';
import ErrorDisplay from './../components/ErrorDisplay';

import { makeRequest } from './../services/http';

class Login extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        errors: [],
        redirectToReferrer: false,
    }

    static propTypes = {
        onAuthentication: PropTypes.func.isRequired
    }

    handleChange = name => event => {
        event.preventDefault();
        this.setState({ [name]: event.target.value });
    }

    startGoogleAuth = async () => {
        this.setState({ loading: true, errors: [] });
        const { code } = await window.auth2.grantOfflineAccess();
        const response = await makeRequest(`/login/google?code=${code}`);
        this.loginUser(response);
    } 

    startEmailPasswordAuth = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errors: [] });
        const {email, password} = this.state;
        const response = await makeRequest('/login', 'post', {email, password});
        this.loginUser(response);
    }

    loginUser = (response) => {
        if (!response.errors) {
            this.props.onAuthentication(response.data.user, response.data.token);
            this.setState({ loading: false, redirectToReferrer: true });
        } else {
            this.setState({ loading: false, errors: response.errors});
        }
    }

    render() {
        const { errors, loading, redirectToReferrer } = this.state;

        const { from } = this.props.location.state || {
            from: { pathname: '/dashboard' },
        };

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <MainBG>
                <AuthForm handleSubmit={ this.startEmailPasswordAuth }>
                    <h4>Sign in</h4>
                    { errors.map((error, i) => <ErrorDisplay key={i} text={error}/>) }
                    <InputGroup
                        type="email"
                        placeholder="E-mail"
                        required="required"
                        defaultValue="sample@gmail.com"
                        onChange={this.handleChange('email')} />

                    <InputGroup
                        type="password"
                        placeholder="Password"
                        required="required"
                        defaultValue="123456"
                        onChange={this.handleChange('password')} />

                    <Button
                        length="block"
                        bold
                        type="submit"
                        loading={loading}>Login</Button>

                    <p>New here? <Link to="/register">Register</Link></p>
                    <div className="gap"></div>                    
                    <Separator text="or"/>
                    <div className="gap"></div>
                    <Button length="block" scheme="google"
                        onClick={this.startGoogleAuth}
                        loading={loading}>Sign in with Google</Button>
                </AuthForm>
            </MainBG>
        );
    }
}

export default Login;