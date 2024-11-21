import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
  margin-top: 20px;
`;

type TableHeadColumnProps = {
    width?: number; // Define a propriedade opcional 'width'
    children?: React.ReactNode; // Permite passar conteúdo para dentro do componente
  };
  
  export const TableHeadColumn = styled.th<TableHeadColumnProps>`
    width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
    padding: 10px;
    text-align: left;
  `;