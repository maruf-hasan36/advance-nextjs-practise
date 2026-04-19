import React from "react";

// const getPost = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (error) {
//     throw new error("Data isn't loaded");
//   }
// };

const pagePost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("data inn't loaded");
  }
  const posts = await res.json();
  // const posts = await getPost();
  return (
    <div>
      <h1>Posts are comming soon : {posts.length}</h1>
    </div>
  );
};

export default pagePost;
