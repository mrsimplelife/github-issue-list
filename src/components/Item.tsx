import { styled } from 'styled-components';
import { Issue } from '../entity/Issue';
import { memo } from 'react';

type IssueItemProps = {
  issue: Issue;
};

const Item = memo(({ issue }: IssueItemProps) => {
  return (
    <IssueItem>
      <IssueNumber>#{issue.number}</IssueNumber>
      <IssueTitle>{issue.title}</IssueTitle>
      <IssueInfo>
        <IssueAuthor>{issue.user.login}</IssueAuthor>
      </IssueInfo>
      <IssueLabel>
        <IssueDate>{new Date(issue.created_at).toLocaleDateString()}</IssueDate>
      </IssueLabel>
      <CommentCount>{issue.comments}</CommentCount>
    </IssueItem>
  );
});

export default Item;

const IssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #22252a;
  border-bottom: 1px solid #2e3238;
  &:hover {
    background-color: #292d32;
    cursor: pointer;
  }
`;
const IssueNumber = styled.span`
  color: #6a737d;
  font-weight: 500;
  margin-right: 15px;
  min-width: 70px;
`;

const IssueTitle = styled.span`
  font-weight: bold;
  color: #e1e4e8;
  margin-right: 16px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IssueInfo = styled.span`
  font-size: 14px;
  color: #b1b5ba;
  display: flex;
  align-items: center;
`;

const IssueLabel = styled.span`
  background-color: #50545a;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
  color: #a1a6ac;
  margin-right: 10px;
  min-width: 70px;
`;

const IssueAuthor = styled.span`
  color: #586069;
  margin: 0 15px;
`;

const IssueDate = styled.span`
  display: flex;
  justify-content: center;
  color: #fff;
  text-align: center;
  min-width: 70px;
`;

const CommentCount = styled.span`
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 2em;
  color: #24292e;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding: 2px 5px;
  min-width: 20px;
  display: flex;
  justify-content: center;
`;
