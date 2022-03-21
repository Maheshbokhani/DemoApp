/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {ASYNC_GET_TOKEN} from './config';

const expiredTokenObj = 'Token Expired!';
const suspendUserObj = 'Unautherise User!';

const secureFetch = async (type: string, body = '', isForm = false) => {
  const accessToken = await ASYNC_GET_TOKEN();
  const requestObj: any = {};
  if (type === 'GET' || type === 'DELETE') {
    requestObj['method'] = type;
    if (accessToken) {
      requestObj['headers'] = {
        Authorization: 'Bearer ' + accessToken,
        Accept: 'application/json',
      };
    }
    return requestObj;
  } else {
    requestObj['method'] = type;
    if (accessToken) {
      requestObj['headers'] = {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    } else {
      requestObj['headers'] = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }
    requestObj['body'] = isForm ? body : JSON.stringify(body);
    return requestObj;
  }
};

export const securePost = async (path: string, body: any, isForm = false) => {
  return await fetch(`${path}/`, await secureFetch('POST', body, isForm)).then(
    res => {
      if (res.status === 401) {
        throw expiredTokenObj;
      } else if (res.status === 403) {
        throw suspendUserObj;
      } else {
        return res.json();
      }
    },
  );
};

export const securePut = async (path: string, body: any) => {
  return await fetch(`${path}/`, await secureFetch('PUT', body)).then(res => {
    if (res.status === 401) throw expiredTokenObj;
    else if (res.status === 403) throw suspendUserObj;
    else return res.json();
  });
};

export const secureGet = async (path: string) => {
  return await fetch(`${path}`, await secureFetch('GET')).then(res => {
    if (res.status === 401) {
      throw expiredTokenObj;
    } else if (res.status === 403) {
      throw suspendUserObj;
    } else {
      return res.json();
    }
  });
};

export const secureDelete = async (path: string) => {
  return await fetch(`${path}`, await secureFetch('DELETE')).then(res => {
    if (res.status === 401) throw expiredTokenObj;
    else if (res.status === 403) throw suspendUserObj;
    else return res.json();
  });
};
