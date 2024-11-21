import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Select = styled.select.attrs({
    role: 'combobox',
  })<React.SelectHTMLAttributes<HTMLSelectElement>>`
      width: 100%;
      height: 30px;
      padding: 0 5px;
      border: 1px solid lightblue;
      border-radius: 5px;
  `;
  export const Button = styled.button.attrs({
    type: 'button',  // Garantir que o botão tenha um tipo de 'button'
  })<React.ButtonHTMLAttributes<HTMLButtonElement>>`
      width: 100%;
      height: 30px;
      padding: 0 5px;
      border: 1px solid lightblue;
      border-radius: 5px;
      background-color: lightblue;
      color: black;
      cursor: pointer;
  
      &:hover {
          background-color: blue;
          color: white;
      }
  `;
export const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 5px;
  font-size: 16px;
`;
