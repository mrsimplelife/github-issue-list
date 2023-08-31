import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Ad from '../components/Ad';
import Loader from '../components/Loader';
import useInfinityScroll from '../hooks/useInfinityScroll';
import useIssues from '../hooks/useIssues';
import Item from '../components/Item';

const Issues = () => {
  const { issues, getIssues, getMoreIssues, loading } = useIssues();

  useEffect(() => getIssues(), [getIssues]);

  const handleScroll = useInfinityScroll(getMoreIssues);

  if (issues.length === 0) {
    return <Loader />;
  }
  return (
    <IssueList onScroll={handleScroll}>
      {issues.map((issue, index) => (
        <Fragment key={issue.id}>
          <Link to={`issue/${issue.number}`}>
            <Item issue={issue} />
          </Link>
          {(index + 1) % 4 === 0 && <Ad />}
        </Fragment>
      ))}
      {loading && (
        <BottomLoader>
          <Loader />
        </BottomLoader>
      )}
    </IssueList>
  );
};

export default Issues;

const IssueList = styled.div`
  border-radius: 4px;
  height: calc(100% - 54.5px);
  overflow: auto;
`;

const BottomLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
