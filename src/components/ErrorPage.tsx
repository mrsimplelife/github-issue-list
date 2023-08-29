import { useRouteError } from 'react-router-dom';
import { styled } from 'styled-components';

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorMessage>{error.statusText || error.message}</ErrorMessage>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const ErrorIcon = styled.div`
  font-size: 4em;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export default ErrorPage;
