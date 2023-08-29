import { keyframes, styled } from 'styled-components';

const Ad = () => {
  return (
    <a href='https://www.wanted.co.kr/' target='_blank' rel='noopener noreferrer'>
      <AdImage src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100' />
    </a>
  );
};

const fadeInScale = keyframes`
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  `;

const AdImage = styled.img`
  width: 100%;
  cursor: pointer;
  animation: ${fadeInScale} 0.5s ease-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export default Ad;
