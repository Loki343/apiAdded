// old way
// import React, { useEffect, useState } from "react";
// const Blogs = () => {
//   const [data, setData] = useState([]);
//   let getBlogs = async () => {
//     let res = await fetch("http://localhost:8080/blogs");
//     let data = await res.json();
//     setData(data);
//   };

import Image from "next/image";

//   useEffect(() => {
//     getBlogs();
//   }, []);

//   return (
//     <div>
//       <h1>Blogs</h1>
//       {data.map((blog) => (
//         <div key={blog.id}>
//           <h3>{blog.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blogs;

//new way
const Blogs = ({ blogs }) => {
  return (
    <div>
      <Image src="https://avatars.githubusercontent.com/u/106387298?v=4" alt="abcd" width={100} height={100} />
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};
// SSR -> Server Sight Rendering
export async function getServerSideProps() {
  let res = await fetch("http://localhost:8080/blogs");
  let data = await res.json();
  return {
    props: {
      blogs: data,
    },
  };
}

export default Blogs;