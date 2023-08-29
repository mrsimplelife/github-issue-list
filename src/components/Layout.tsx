import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { OWNER, REPO } from '../router';

const Layout = () => (
  <Container>
    <RepoHeader>
      <RepoOwner>{OWNER}</RepoOwner>
      <RepoName>/</RepoName>
      <RepoName>{REPO}</RepoName>
    </RepoHeader>
    <Outlet />
  </Container>
);

export default Layout;

const Container = styled.div`
  background-color: #181a1f;
  padding-right: 20px;
  padding-left: 20px;
  font-family: Arial, sans-serif;
  height: 100vh;
`;

const RepoHeader = styled.div`
  background-color: #20232a;
  padding-left: 16px;
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  height: 54.5px;
`;

const RepoOwner = styled.span`
  color: #61dafb;
  margin-right: 8px;
`;

const RepoName = styled.span`
  color: #e1e4e8;
  font-weight: bold;
`;
