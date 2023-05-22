"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonQuery = Object.fromEntries(new FormData(e.target));
    router.push("/search" + "?" + new URLSearchParams(pokemonQuery));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemon"
        placeholder="Type in Pokemon name"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
