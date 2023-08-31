import { UIEvent, useCallback } from 'react';

const useInfinityScroll = (callback: () => void) => {
  const handleScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
      if (Math.floor(scrollHeight - scrollTop) <= clientHeight) {
        callback();
      }
    },
    [callback]
  );
  return handleScroll;
};

export default useInfinityScroll;
