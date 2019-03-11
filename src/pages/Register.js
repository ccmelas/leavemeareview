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

class Register extends Component {
    state = {
        name: '',
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

    render() {
        const { loading, errors, redirectToReferrer } = this.state;
        const { from } = this.props.location.state || {
            from: { pathname: '/dashboard' },
        };

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <MainBG>
                <AuthForm handleSubmit={ this.registerUser }>
                    <h4>Sign up</h4>
                    { errors.map((error, i) => <ErrorDisplay key={i} text={error}/>) }
                    <InputGroup 
                        type="text" 
                        placeholder="Name" 
                        required="required" 
                        onChange={this.handleChange('name')}/>

                    <InputGroup
                        type="email"
                        placeholder="E-mail"
                        required="required"
                        onChange={this.handleChange('email')}/>
                    <InputGroup
                        type="password"
                        placeholder="Password"
                        required="required"
                        onChange={this.handleChange('password')}/>

                    <Button
                        length="block"
                        bold
                        type="submit"
                        loading={loading}>
                        Register
                    </Button>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <div className="gap"></div>                    
                    <Separator text="or"/>
                    <div className="gap"></div>
                    <Button length="block" scheme="google">Sign up with Google</Button>
                </AuthForm>
            </MainBG>
        );
    }

    registerUser = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errors: [] });

        const {name, email, password} = this.state;
        const response = await makeRequest('/register', 'post', {name, email, password});

        if (!response.errors) {
            this.props.onAuthentication(response.data.user, response.data.token);
            this.setState({ loading: false, redirectToReferrer: true });
        } else {
            this.setState({ loading: false, errors: response.errors});
        }
    }
}

export default Register;