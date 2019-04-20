import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeRequest } from './../services/http';
import ErrorDisplay from './ErrorDisplay';

export class DataProvider extends Component {
    static propTypes = {
        isDataEmpty: PropTypes.func,
        render: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
    };

    static defaultProps = {
        isDataEmpty: data => {
            if (data === undefined) {
                // eslint-disable-line
                return true;
            }
            return Array.isArray(data)
                ? data.length === 0
                : Object.keys(data).length === 0;
        },
    };

    state = {
        data: undefined,
        loading: true,
        errors: [],
    };

    fetchData = async props => {
        this.setState({ loading: true });
        const response = await makeRequest(props.url, 'GET', {}, props.token);
        if (!response.errors) {
            this.setState({
                data: response.data,
                errors: [],
                loading: false,
            });
        } else {
            this.setState({ errors: response.errors, loading: false });
        }
    };

    componentDidMount() {
        return this.fetchData(this.props);
    }

    render() {
        const { data, errors, loading } = this.state;
        const { isDataEmpty } = this.props;
    
        if (errors.length) {
            return errors.map(error => <ErrorDisplay text={error}/>)
        }
        const showNoData = !loading && isDataEmpty(data);
        
        return (
            <Fragment>
                {loading ? <p>Loading...</p> :
                showNoData ? (
                    <p>Data unavailable</p>
                ) : (
                    this.props.render({
                        data,
                    })
                )}
            </Fragment>
        );
    }
}
