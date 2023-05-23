import { Suspense } from "react";
import Keywords from "./Keywords";
import SearchForm from "./SearchForm";

export default function Search({ searchParams }) {
  const { keyword } = searchParams;
  return (
    <div>
      <h1>Keyword Search</h1>
      <SearchForm />
      <Suspense key={keyword} fallback={<p>Fetching keyword...</p>}>
        {keyword && <Keywords key={keyword} keyword={keyword} />}
      </Suspense>
    </div>
  );
}
