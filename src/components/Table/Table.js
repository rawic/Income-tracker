import React from 'react';
import { StyledHeadings, StyledHeading } from './Table.styles';

// TODO:

const Headings = ({ children }) => <StyledHeadings>{children}</StyledHeadings>;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

const Body = ({ children }) => <div>{children}</div>;

const Table = ({ children }) => children;

Table.Heading = Heading;
Table.Headings = Headings;
Table.Body = Body;
export default Table;
