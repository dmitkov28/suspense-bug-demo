import { Suspense } from "react";
import Pokemon from "./Pokemon";
import SearchForm from "./SearchForm";

export default function Search({ searchParams }) {
  const { pokemon } = searchParams;
  return (
    <div>
      <h1>Pokemon Search</h1>
      <SearchForm />
      <Suspense key={pokemon} fallback={<p>Fetching pokemon...</p>}>
      <Pokemon key={pokemon} pokemon={pokemon} />
      </Suspense>
    </div>
  );
}
