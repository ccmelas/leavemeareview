import axios from 'axios';

import { host } from './host';

const buildError = (error) => {
    const errors = [];

    switch (error.response.status) {
        case 401:
            errors.push('Authorization Failed.');
            break;
        case 422:
            // Invalid Data
            error.response.data.errors.forEach(error => errors.push(error.msg));
            break;
        default:
            errors.push('An unknown error occurred');
    }

    return { errors };
}

export const makeRequest = async (endpoint, method = 'GET', data = {}, token) => {
    const headers = {};

    if (token)
        headers['Authorization'] = `Bearer ${token.value}`; 
    try {
        const response = await axios({ 
            method,
            url: `${host}${endpoint}`,
            data,
            headers
        });

        return response;

    } catch (error) {
        return buildError(error);
    }
}