import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts/1";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
};

axios.get(url).then(response => {
  const post: Post = response.data;
  const { id, userId, title } = post;
  console.log(
    `Simple report: 
    
      The Post with ID: ${id}
     
      Has a Title of: ${title}
  
      Belongs to the UserId: ${userId}
    `
  );
});