import React from 'react';
import PropTypes from 'prop-types';
import StyledSubmitButton from './SubmitButton.styles';

const SubmitButton = ({ children }) => (
  <StyledSubmitButton type="submit">{children}</StyledSubmitButton>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
