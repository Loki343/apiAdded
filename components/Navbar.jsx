import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const onClickBlogs = () => {
    router.push("/blogs");
  };
  const goBack = ()=>{
    router.back()
  }
  return (
    <div
      style={{
        display: "flex",
        fontSize: "24px",
        gap: "10px",
        padding: "8px",
        justifyContent: "center",
        backgroundColor: "lightcyan",
        boxShadow: "10px 5px 5px grey",
      }}
    >
      <button onClick={goBack}>Go Back</button>
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/clogs">Clogs</Link>
      <button onClick={onClickBlogs}>Blogs</button>
    </div>
  );
};

export default Navbar;
