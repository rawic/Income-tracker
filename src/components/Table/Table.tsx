import React from 'react';
import { StyledHeader, StyledHeading } from './Table.styles';

interface TableCompositionI {
  Header: React.FC<{ children: string }>,
  Heading: React.FC<{ children: string }>,
  Body: React.FC<{ children: string }>,
}

const Header: React.FC<{ children: string }> = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const Heading: React.FC<{ children: string }> = ({ children }) => <StyledHeading>{children}</StyledHeading>;

const Body: React.FC<{ children: string }> = ({ children }) => <div>{children}</div>;

const Table: React.FC & TableCompositionI = ({ children }) => <>{children}</>;

Table.Header = Header;
Table.Heading = Heading;
Table.Body = Body;

export default Table;
