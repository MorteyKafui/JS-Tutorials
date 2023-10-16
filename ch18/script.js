// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(data => data.json()) //JSON
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const getPosts = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const results = await data.json();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

getPosts();
