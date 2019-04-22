import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddReview from './pages/AddReview';
import Dashboard from './pages/Dashboard';
import NotFound from './components/NotFound';

import PrivateRoute from './components/PrivateRoute';

const UserContext = React.createContext({ user: null });
export const UserConsumer = UserContext.Consumer;
const UserProvider = UserContext.Provider;


const theme = {
	colorPrimary: '#6537e2',
	colorSecondary: '#EAC93F',
	colorAccent: '#6537E2',
	colorWhite: '#FFF',
	fontHeader: "'Lucida Grande', sans-serif",
	fontHeaderTwo: "Verdana"
};

class App extends Component {
	state = {
		user: null,
		token: null,
	};

	handleAuthentication = (user, token) => {
		window.localStorage.setItem("authUser", JSON.stringify(user));
		window.localStorage.setItem("token", JSON.stringify(token));
		this.setState({ user, token });
	};

	componentWillMount() {
		const user = window.localStorage.getItem("authUser");
		const token = window.localStorage.getItem("token");

		const parsedToken = token && JSON.parse(token);
		
		if (parsedToken && parsedToken.expiry > Date.now()) {
			this.setState({
				user: JSON.parse(user),
				token: parsedToken
			});	
		}
	}

	handleLogout = () => {
		window.localStorage.removeItem("authUser");
		window.localStorage.removeItem("token");
		this.setState({ user: null, token: null});
	}
	
  	render() {
		const { user, token } = this.state;
		return (
			<UserProvider value={{ user, token }}>
				<ThemeProvider theme={theme}>
					<Router>
						<Switch>
							<Route exact path="/" component={ Home }></Route>
							<Route path="/login" render={({ location }) => (
								<Login location={location} onAuthentication={this.handleAuthentication}></Login>
							)}></Route>
							<Route path="/register" render={({ location }) => (
								<Register location={location} onAuthentication={this.handleAuthentication}/>
							)}></Route>
							<PrivateRoute path="/dashboard" render={() => (
								<Dashboard onLogout={this.handleLogout}/>
							)}></PrivateRoute>
							<Route path="/review/:username" render={({ match }) => (
								<AddReview match={match} onAuthentication={this.handleAuthentication}/>
							)}></Route>
							<Route component={NotFound}></Route>
						</Switch>
					</Router>
				</ThemeProvider>
			</UserProvider>
		);
  	}
}

export default App;
