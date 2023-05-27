"use client";

import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation';

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = Object.fromEntries(new FormData(e.target));
    redirect("/keywords/search" + "?" + new URLSearchParams(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="keyword" placeholder="Type in keyword"></input>
      <select name="platform">
        <option value="google" name="platform">
          google
        </option>
        <option value="youtube" name="platform">
          youtube
        </option>
        <option value="duckduckgo" name="platform">
          duckduckgo
        </option>
      </select>
      <select name="language">
        <option value="en">en</option>
        <option value="de">de</option>
      </select>
      <select name="country">
        <option value="us">us</option>
        <option value="de">de</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}
