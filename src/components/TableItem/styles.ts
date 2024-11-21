import styled from 'styled-components';

interface CategoryProps {
  color: string;
  children: React.ReactNode; // Permite o uso de children
}

interface ValueProps {
  color: string;
  children: React.ReactNode; // Permite o uso de children
}

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<CategoryProps>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFF;
  background-color: ${props => props.color};
`;

export const Value = styled.div<ValueProps>`
  color: ${props => props.color};
`;
