"use client";

import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = Object.fromEntries(new FormData(e.target));
    router.push("/keywords/search" + "?" + new URLSearchParams(keyword));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        placeholder="Type in keyword"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
