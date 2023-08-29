import { useCallback, useState } from 'react';

const useError = () => {
  const [error, setError] = useState<Error>();

  const handleError = useCallback((error: Error) => {
    setError(error);
  }, []);

  if (error) {
    throw error;
  }

  return handleError;
};

export default useError;
