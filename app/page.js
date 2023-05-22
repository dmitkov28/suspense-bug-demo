import Link from "next/link";
export default function Home() {
  return (
    <ul>
      <li>
        <Link href={"/pokemon/search"}> Pokemon API</Link>
      </li>
      <li>
        <Link href={"/keywords/search"}> Keywords API</Link>
      </li>
      <li>
        <Link href={"/jsonplaceholder/search"}> JSON Placeholder</Link>
      </li>
    </ul>
  );
}
