/* eslint-disable import/prefer-default-export */
import axiosApi from './api/api-service';

export function fetchTodoService() {
  return axiosApi.get();
}
