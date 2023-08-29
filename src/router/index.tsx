import { Outlet, Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import { styled } from 'styled-components';
import IssueDetail from '../pages/IssueDetail';
import Issues from '../pages/Issues';
import ErrorPage from '../components/ErrorPage';

export const OWNER = 'facebook';
export const REPO = 'react';

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

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route errorElement={<ErrorPage />}>
      <Route path='/' element={<Layout />}>
        <Route index element={<Issues />} />
        <Route path='/issue/:id' element={<IssueDetail />} />
      </Route>
    </Route>
  )
);

export default router;

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
