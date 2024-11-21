import styled from "styled-components";

// Define a interface para aceitar o tipo `children`
interface InfoProps {
  color?: string;
  children: React.ReactNode;
}

export const Info = styled.div<InfoProps>`
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  font-weight: bold;
`;

// Restante do código
export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`;
