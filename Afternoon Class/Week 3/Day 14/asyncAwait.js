const axios = require('axios');

let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
let urlUsers = 'https://jsonplaceholder.typicode.com/users';
let urlAlbums = 'https://jsonplaceholder.typicode.com/albums';
let data = {};

const fetchApi = async () => {
  try {
    // let responsePosts = await axios.get(urlPosts); // Wait this for finish
    // let responseUsers = await axios.get(urlUsers);
    // let responseAlbums = await axios.get(urlAlbums);
    let response = await Promise.all([
      axios.get(urlPosts),
      axios.get(urlUsers),
      axios.get(urlAlbums),
    ]);

    // data = {
    //   posts: responsePosts.data.map((item) => {
    //     return { title: item.title, userId: item.userId };
    //   }),
    //   users: responseUsers.data,
    //   albums: responseAlbums.data,
    // };

    data = {
      posts: response[0].data.map((item) => {
        return { title: item.title, userId: item.userId };
      }),
      users: response[1].data,
      albums: response[2].data,
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
