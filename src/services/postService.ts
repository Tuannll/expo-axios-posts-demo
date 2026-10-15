import apiClient from '../lib/axiosInstance';
import { Post } from '../types/api';

export const getPosts = async (signal?: AbortSignal): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts', { signal });
  return response.data;
};
