"use client";

import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keywordQuery = Object.fromEntries(new FormData(e.target));
    router.push("/dummyjson/search" + "?" + new URLSearchParams(keywordQuery));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="product"
        placeholder="Type in product name"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
