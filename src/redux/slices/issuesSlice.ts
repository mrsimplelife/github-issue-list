import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Issue } from '../../entity/Issue';
import { OWNER, REPO } from '../../router';
import { getIssues } from '../../services/github/issues';

type IssuesState = {
  issues: Issue[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
};

const initialState: IssuesState = {
  issues: [],
  status: 'idle',
  error: undefined,
};

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchIssuesBy.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIssuesBy.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = state.issues.concat(action.payload);
      })
      .addCase(fetchIssuesBy.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default issuesSlice.reducer;

export const fetchIssues = createAsyncThunk('issues/fetchIssues', async () => {
  const response = await getIssues(OWNER, REPO);
  return response;
});

export const fetchIssuesBy = createAsyncThunk('issues/fetchIssuesBy', async (page: number) => {
  const response = await getIssues(OWNER, REPO, page);
  return response;
});
