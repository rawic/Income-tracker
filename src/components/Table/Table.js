import React from 'react';
import { StyledHeader, StyledHeading } from './Table.styles';

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

const Body = ({ children }) => <div>{children}</div>;

const Table = ({ children }) => children;

Table.Header = Header;
Table.Heading = Heading;
Table.Body = Body;

export default Table;
