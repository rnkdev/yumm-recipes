import { GET_HEADER } from './header';
import { YUMMLY_DOMAIN as DOMAIN } from './config';
import fetch from 'isomorphic-fetch';

export function searchRecipe(query, start) {
  const apiEndPoint = `${DOMAIN}/recipes`;
  let queryUrl = `${apiEndPoint}?q=${query}`;

  if (start !== undefined) {
    queryUrl = `${queryUrl}&start=${start}`;
  }
  return fetch(queryUrl, GET_HEADER)
}