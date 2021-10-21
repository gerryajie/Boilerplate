const axios = require('axios');

const fetchApi = async () => {
  let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  let urlUsers = 'https://jsonplaceholder.typicode.com/users';
  let urlAlbums = 'https://jsonplaceholder.typicode.com/albums';
  let data = {};

  try {
    // const responsePosts = await axios.get(urlPosts); // Wait to finish
    // const responseUsers = await axios.get(urlUsers); // Wait to finish
    // const responseAlbums = await axios.get(urlAlbums); // Wait to finish
    const response = await Promise.all([
      axios.get(urlPosts),
      axios.get(urlUsers),
      axios.get(urlAlbums),
    ]);

    // data = {
    //   posts: responsePosts.data.filter((item) => item.userId === 5),
    //   users: responseUsers.data,
    //   albums: responseAlbums.data,
    // };

    data = {
      posts: response[0].data.filter((item) => item.userId === 5),
      users: response[1].data,
      albums: response[2].data,
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
