import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import DashboardStatistics from './subpages/DashboardStatistics';
import Reviews from './subpages/Reviews';
import SingleReview from './subpages/SingleReview';
import Profile from './subpages/Profile';
import NotFound from './../components/NotFound';

import { UserConsumer } from './../App';

const StyledDashboard = styled.main`
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
`;

const DashboardContentArea = styled.section`
    flex: 1;
    height: 85vh;
    padding: 4em;
    overflow-y: scroll;

    @media (max-width: 600px) {
        padding: 2em;
    }
`;


class Dashboard extends Component {
    logout = (event) => {
        event.preventDefault();
        this.props.onLogout();
    }

    render () {
        return (
            <UserConsumer>
                {({ user, token }) => (
                    <Router>  
                        <StyledDashboard>
                            <Sidebar user={user}>
                                <Menu>
                                    <ul>
                                        <li>
                                            <NavLink exact 
                                                to="/dashboard" 
                                                activeClassName="active">
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/reviews" 
                                                activeClassName="active">
                                                Reviews
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/profile" 
                                                activeClassName="active">
                                                My Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <button onClick={this.logout}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </Menu>
                            </Sidebar>
                            <DashboardContentArea>
                                <Switch>
                                    <Route exact path="/dashboard" render={() => (
                                        <DashboardStatistics token={token}/>
                                    )}></Route>
                                    <Route exact path="/dashboard/reviews" render={() => (
                                        <Reviews token={token}/>
                                    )}></Route>
                                    <Route path="/dashboard/reviews/:review" render={({ match }) => (
                                        <SingleReview match={match} token={token}/>
                                    )}></Route>
                                    <Route exact path="/dashboard/profile" render={({location}) => (
                                        <Profile user={user} />
                                    )}></Route>
                                    <Route component={NotFound}></Route>
                                </Switch>
                            </DashboardContentArea>
                        </StyledDashboard>
                    </Router>
                )}
            </UserConsumer>
        )
    }
}

export default Dashboard;