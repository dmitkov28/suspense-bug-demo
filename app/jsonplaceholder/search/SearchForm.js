"use client";

import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keywordQuery = Object.fromEntries(new FormData(e.target));
    router.push("/jsonplaceholder/search" + "?" + new URLSearchParams(keywordQuery));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="postId"
        placeholder="Type in post id"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
