import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import DashboardStatistics from './subpages/DashboardStatistics';


const StyledDashboard = styled.main`
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
`;

const DashboardContentArea = styled.section`
    flex: 1;
    min-height: 100vh;
    padding: 4em;

    @media (max-width: 600px) {
        padding: 2em;
    }
`;


class Dashboard extends Component {
    render () {
        return (
            <Router>  
                <StyledDashboard>
                    <Sidebar>
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
                                        Profile
                                    </NavLink>
                                </li>
                            </ul>
                        </Menu>
                    </Sidebar>
                    <DashboardContentArea>
                        <Switch>
                            <Route exact path="/dashboard" component={DashboardStatistics}></Route>
                        </Switch>
                    </DashboardContentArea>
                </StyledDashboard>
            </Router>
        )
    }
}

export default Dashboard;