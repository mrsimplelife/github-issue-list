import { AxiosResponse } from 'axios';
import api from './api';
import { Issue } from '../../entity/Issue';

export const getIssues = async (owner: string, repo: string, page: number = 1) => {
  const response: AxiosResponse<Issue[]> = await api.get(`${owner}/${repo}/issues`, {
    params: { state: 'open', sort: 'comments', page: page, per_page: 30 },
  });
  return response.data;
};

export const getIssueDetail = async (owner: string, repo: string, number: string) => {
  const response: AxiosResponse<Issue> = await api.get(`${owner}/${repo}/issues/${number}`);
  return response.data;
};
