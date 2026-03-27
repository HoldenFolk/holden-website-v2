import apiClient from './apiClient';

export const fetchGithubProjects = async () => {
  const response = await apiClient.get('/projects');
  return response.data.projects;
};

export const fetchResumeUrl = async (password) => {
  const response = await apiClient.post('/resume', { password });
  return response.data.url;
};
