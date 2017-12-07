import { APP_ID, APP_KEY } from './config';

export const GET_HEADER = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'X-Yummly-App-ID': APP_ID,
    'X-Yummly-App-Key': APP_KEY,
  }
}