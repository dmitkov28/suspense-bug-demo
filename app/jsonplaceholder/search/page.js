import { Suspense } from "react";
import Placeholder from "./Placeholder";
import SearchForm from "./SearchForm";

export default function Search({ searchParams }) {
  const { postId } = searchParams;
  return (
    <div>
      <h1>Placeholder API Search</h1>
      <SearchForm />
      <Suspense key={postId} fallback={<p>Fetching keyword...</p>}>
        {postId && <Placeholder key={postId} postId={postId} />}
      </Suspense>
    </div>
  );
}
