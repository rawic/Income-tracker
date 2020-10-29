import React from 'react';
import { StyledHeader, StyledHeading } from './Table.styles';

import TableCompositionI from './Table.interface'

const Header: React.FC<{ children: string }> = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const Heading: React.FC<{ children: string }> = ({ children }) => <StyledHeading>{children}</StyledHeading>;

const Body: React.FC<{ children: string }> = ({ children }) => <div>{children}</div>;

const Table: React.FC & TableCompositionI = ({ children }) => <>{children}</>;

Table.Header = Header;
Table.Heading = Heading;
Table.Body = Body;

export default Table;
