import { UIEvent } from 'react';

const useInfinityScroll = (callback: () => void) => {
  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (Math.floor(scrollHeight - scrollTop) <= clientHeight) {
      callback();
    }
  };
  return handleScroll;
};

export default useInfinityScroll;
