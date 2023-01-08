import React, { useState } from "react";
import axios from "axios";

const Blog = ({ blog }) => {
  const [data, setData] = useState(blog);

  const updateDescription = async () => {
    console.log("current data", data);
    let res = await axios.patch(`http://localhost:8080/blogs/${data.id}`, {
      description: "Hello",
    });
    let d = await res.data;
    console.log("backend updated",d)
    setData(d)
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      <h1>{blog.description}</h1>
      <button onClick={updateDescription}>Change Description</button>
    </div>
  );
};

export async function getStaticPaths() {
  //fetch blogs and map to generate
  let res = await fetch(`http://localhost:8080/blogs`);
  let data = await res.json();
  return {
    paths: data.map((blog) => ({ params: { id: String(blog.id) } })),
    fallback: false, //can also be true or blocking
  };
}

//context is variable which provides you current url information
export async function getStaticProps(context) {
  let id = context.params.id;
  let res = await fetch(`http://localhost:8080/blogs/${id}`);
  let data = await res.json();
  return {
    props: {
      blog: data,
    },
  };
}

export default Blog;
