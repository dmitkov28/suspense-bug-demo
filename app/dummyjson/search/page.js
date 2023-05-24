import { Suspense } from "react";
import Placeholder from "./Placeholder";
import SearchForm from "./SearchForm";

export default function Search({ searchParams }) {
  const { product } = searchParams;
  return (
    <div>
      <h1>DummyJSON</h1>
      <SearchForm />
      <Suspense key={product} fallback={<p>Fetching product...</p>}>
        {product && <Placeholder key={product} product={product} />}
      </Suspense>
    </div>
  );
}
