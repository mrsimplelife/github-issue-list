import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Loader from '../components/Loader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Issue } from '../entity/Issue';
import { RootState } from '../redux/store';
import { OWNER, REPO } from '../router';
import { getIssueDetail } from '../services/github/issues';

const IssueDetail = () => {
  const { id } = useParams();
  const { issues } = useSelector((state: RootState) => state.issues);
  let selectedIssue = issues.find((issue) => issue.number === parseInt(id!));

  const [issue, setIssue] = useState<Issue>();
  useEffect(() => {
    if (!selectedIssue) {
      getIssueDetail(OWNER, REPO, id!).then((issue) => {
        setIssue(issue);
      });
    }
  }, [id, selectedIssue]);

  if (!selectedIssue && !issue) return <Loader />;
  if (!selectedIssue) selectedIssue = issue!;
  return (
    <IssueDetailContainer>
      <IssueHeader>
        <IssueNumber>#{selectedIssue.number}</IssueNumber>
        <IssueTitle>{selectedIssue.title}</IssueTitle>
      </IssueHeader>
      <UserInfo>
        <UserProfile src={selectedIssue.user.avatar_url} alt={`${selectedIssue.user.login}'s profile`} />
        <UserName>{selectedIssue.user.login}</UserName>
        <IssueDate>{new Date(selectedIssue.created_at).toLocaleDateString()}</IssueDate>
      </UserInfo>
      <CommentCount>코멘트 수: {selectedIssue.comments}</CommentCount>
      <IssueBody>
        <MarkdownRenderer content={selectedIssue.body} />
      </IssueBody>
    </IssueDetailContainer>
  );
};
export default IssueDetail;

const IssueDetailContainer = styled.div`
  height: calc(100% - 54.5px);
  overflow: auto;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  background-color: #181818;
`;

const IssueHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const IssueNumber = styled.span`
  color: #aaa;
  margin-right: 8px;
`;

const IssueTitle = styled.h1`
  font-size: 24px;
  color: #e0e0e0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const UserProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #f0f0f0;
  margin-right: 8px;
`;

const IssueDate = styled.span`
  color: #aaa;
`;

const CommentCount = styled.div`
  margin: 16px 0;
  font-weight: bold;
  color: #e0e0e0;
`;

const IssueBody = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #d0d0d0;
`;
