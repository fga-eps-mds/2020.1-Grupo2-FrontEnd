import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { ENDPOINTS, getToken, setToken } from '../settings';

const baseHeaders = (token = '') => ({
  authtoken: token,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
export const getUserLogado = () => {
  const USER = ENDPOINTS.API.auth;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.getUser.route, {
      method: USER.getUser.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserLogin = (User) => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.login.route, {
      method: USER.login.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        email: User.email,
        password: User.password,
      }),
    })
      .then((res) => {
        setToken(res.headers.get('authtoken'));
        return res.json();
      })
      .then(resolve)
      .then(reject);
  });
};

export const UserSignup = (User) => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.signup.route, {
      method: USER.signup.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        username: User.username,
        email: User.email,
        password: User.password,
        passwordConfirmation: User.password,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserUpdate = (User) => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.update.route, {
      method: USER.update.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        username: User.username,
        email: User.email,
        password: User.password,
        passwordConfirmation: User.password,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserDelete = () => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.delete.route, {
      method: USER.delete.method,
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const createTopic = (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.create.route(topicID), {
      method: TOPIC.create.method,
      headers: baseHeaders(window.localStorage.getItem('token')),
    })
      .then(resolve)
      .then(reject);
  });
};

export const getPlant = (plantID) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.getPlant.route(plantID), {
      method: PLANT.getPlant.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const scannerPlant = (scannerBody) => {
  const SCANNER = ENDPOINTS.API.scanner;
  console.log(scannerBody.filename);
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + SCANNER.route, {
      method: SCANNER.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        filename: scannerBody.filename,
        data: scannerBody.data,
        mime: scannerBody.mime,
        plantType: scannerBody.plantType,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const registerPlant = (plant) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.register, {
      method: PLANT.register.method,
      headers: baseHeaders(window.localStorage).getItem('token'),
      body: {
        scienctificName: plant.species.scientificNameWithoutAuthor,
        genderName: plant.species.genus.scientificNameWithoutAuthor,
        family_name: plant.species.family.scientificNameWithoutAuthor,
        common_name: plant.commonNames[0],
        gbifID: plant.gbifID,
      },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
