import apiClient from '../lib/axiosInstance';
import { getPosts } from './postService';

const run = async () => {
  const signal = new AbortController().signal;
  const expected = [{ id: 1, userId: 1, title: 'Title', body: 'Body' }];
  const originalGet = apiClient.get;
  let request: unknown;

  apiClient.get = (async (_url: string, config?: { signal?: AbortSignal }) => {
    request = config;
    return { data: expected };
  }) as typeof apiClient.get;

  try {
    const posts = await getPosts(signal);
    console.assert(posts === expected, 'getPosts must return response data');
    console.assert((request as { signal?: AbortSignal }).signal === signal, 'getPosts must forward signal');
  } finally {
    apiClient.get = originalGet;
  }
};

void run();
