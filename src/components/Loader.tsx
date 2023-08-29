import { keyframes, styled } from 'styled-components';

const Loader = () => (
  <LoaderContainer>
    <RotatingContainer>
      <Circle />
      <Circle />
    </RotatingContainer>
  </LoaderContainer>
);

export default Loader;

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

const pulse = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  `;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RotatingContainer = styled.div`
  display: flex;
  animation: ${rotate} 2s infinite linear;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  animation: ${pulse} 1.5s infinite;

  &:nth-child(2) {
    margin-left: 20px;
    animation-delay: 0.75s;
  }
`;
