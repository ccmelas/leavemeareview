import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserConsumer } from './../App';

const PrivateRouteWithoutContext = ({ user, ...rest }) =>
    user ? (
        <Route {...rest}/>
    ) : (<Redirect to={{
        pathname: '/login',
        state: { from: rest.location }
    }} />);

PrivateRouteWithoutContext.propTypes = {
    user: PropTypes.object
};

const PrivateRoute = (props) => (
    <UserConsumer>
        {({ user }) => (
            <PrivateRouteWithoutContext user={user} {...props} />
        )}
    </UserConsumer>
);

export default PrivateRoute;