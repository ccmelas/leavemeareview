import React from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components';

const StyledInputGroup = styled.div`
    margin-bottom: 2em;
    label {
        display: block;
        margin-bottom: 5px;
    }

    select {
        display: block;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #B1AEAE;
        padding: 1em 1em;
        box-sizing: border-box;
        transition: .2s ease-in all;
        font-family: Monaco, sans-serif;
        height: 40px;
    }

    select:focus {
        outline: 0;
        border-width: 2px;
    }
`;


const SelectInputGroup = (props) => (
    <StyledInputGroup>
        <select { ...props }>
            <option>-- { props.defaultlabel } --</option>
            { props.options.map((option, index) => <option value={option.value} key={index}>{option.name}</option>)}
        </select>
    </StyledInputGroup>
);

SelectInputGroup.PropTypes = {
    defaultlabel: PropTypes.string
};

SelectInputGroup.defaultProps = {
    defaultlabel: 'Select an option'
};

export default SelectInputGroup;