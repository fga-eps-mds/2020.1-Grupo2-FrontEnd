const ENDPOINTS = {
  API: {
    base_url: `https://gaiadex-backend-homolog.herokuapp.com`,
    auth: {
      user: {
        route: '/auth/user',
        method: 'GET',
      },
      delete: {
        route: '/auth/delete',
        method: 'DELETE',
      },
      update: {
        route: '/auth/update',
        method: 'POST',
        body: (userBody) => userBody,
      },
      findOne: {
        route: (userID) => `/auth/user/${userID}`,
        method: 'GET',
      },
      create: {
        route: '/auth/signup',
        method: 'POST',
        body: (userBody) => userBody,
      },
      login: {
        route: '/auth/login',
        method: 'POST',
        body: (userBody) => userBody,
      },
      getUser: {
        route: '/auth/user',
        method: 'GET',
      },
    },

    plant: {
      create: {
        route: '/plant/register',
        method: 'POST',
        body: (plantBody) => plantBody,
      },
      find: {
        route: (plantID) => `/plant/${plantID}`,
        method: 'GET',
      },
      list: {
        route: '/plant',
        method: 'GET',
      },
    },

    myPlant: {
      create: {
        route: (plantId) => `/myplants/add/${plantId}`,
        method: 'POST',
      },
      update: {
        route: (myPlantID) => `/myplants/edit/${myPlantID}`,
        method: 'PUT',
      },
      delete: {
        route: (myPlantID) => `/myplants/delete/${myPlantID}`,
        method: 'DELETE',
        body: (nickname) => nickname,
      },
    },

    favorite: {
      create: {
        route: (plantID) => `/favorites/add/${plantID}`,
        method: 'POST',
      },
      list: {
        route: '/favorites/list',
        method: 'GET',
      },
      delete: {
        route: (plantID) => `/favorites/delete/${plantID}`,
        method: 'DELETE',
      },
    },

    topic: {
      find: {
        route: (topicID) => `/topic/find/${topicID}`,
        method: 'GET',
      },
      create: {
        route: (plantID) => `/topic/create/${plantID}`,
        method: 'POST',
        body: (topicBody) => topicBody,
      },
      update: {
        route: (topicID) => `/topic/update/${topicID}`,
        method: 'PUT',
        body: (topicBody) => topicBody,
      },
      like: {
        route: (topicID) => `/topic/like/${topicID}`,
        method: 'POST',
      },
      dislike: {
        route: (plantID) => `/topic/dislike/${plantID}`,
        method: 'POST',
      },
    },

    comment: {
      create: {
        route: (commentID) => `/comment/create/${commentID}`,
        method: 'POST',
        body: (commentBody) => commentBody,
      },
      update: {
        route: (commentID) => `/comment/update/${commentID}`,
        method: 'PUT',
        body: (commentBody) => commentBody,
      },
      delete: {
        route: (commentID) => `/comment/delete/${commentID}`,
        method: 'DELETE',
      },
      like: {
        route: (commentID) => `/comment/like/${commentID}`,
        method: 'POST',
      },
      dislike: {
        route: (commentID) => `/comment/dislike/${commentID}`,
        method: 'POST',
      },
    },

    scanner: {
      route: '/scanner/',
      method: 'POST',
      body: (scannerBody) => scannerBody,
    },
  },
};

export default ENDPOINTS;
