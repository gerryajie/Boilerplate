const axios = require('axios');

let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
let urlUsers = 'https://jsonplaceholder.typicode.com/users';
let urlAlbums = 'https://jsonplaceholder.typicode.com/albums';
let data = {};

axios
  .get(urlPosts)
  .then((response) => {
    data = {
      posts: response.data.map((item) => {
        return { title: item.title, userId: item.userId };
      }),
    };

    return axios.get(urlUsers);
  })
  .then((response) => {
    data = { ...data, users: response.data };

    return axios.get(urlAlbums);
  })
  .then((response) => {
    data = { ...data, albums: response.data };
    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
