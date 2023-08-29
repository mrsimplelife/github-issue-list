import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssues, fetchIssuesBy } from '../redux/slices/issuesSlice';
import { AppDispatch, RootState } from '../redux/store';

const useIssues = () => {
  const { issues, status } = useSelector((state: RootState) => state.issues);

  const dispatch = useDispatch<AppDispatch>();

  const getIssues = useCallback(() => {
    dispatch(fetchIssues());
  }, [dispatch]);

  const pageRef = useRef(1);

  const getMoreIssues = () => {
    if (status !== 'loading') {
      pageRef.current += 1;
      dispatch(fetchIssuesBy(pageRef.current));
    }
  };

  const loading = status === 'loading';

  return { issues, getIssues, getMoreIssues, loading };
};

export default useIssues;
