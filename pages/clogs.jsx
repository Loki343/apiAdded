// old way
import React, { useEffect, useState } from "react";
//CSR -> Client Sight Rendering
const Blogs = () => {
  const [data, setData] = useState([]);
  let getBlogs = async () => {
    let res = await fetch("http://localhost:8080/blogs");
    let data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1>Clogs</h1>
      {data.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

//new way

// const Blogs = ({ blogs }) => {
//   return (
//     <div>
//       <h1>Blogs</h1>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h3>{blog.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   let res = await fetch("http://localhost:8080/blogs");
//   let data = await res.json();
//   return {
//     props: {
//       blogs: data,
//     },
//   };
// }

// export default Blogs;
