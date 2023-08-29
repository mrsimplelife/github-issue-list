import { Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import IssueDetail from '../pages/IssueDetail';
import Issues from '../pages/Issues';
import Layout from '../components/Layout';

export const OWNER = 'facebook';
export const REPO = 'react';

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
