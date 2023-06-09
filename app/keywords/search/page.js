import { Suspense } from "react";
import Keywords, { buildURL } from "./Keywords";
import SearchForm from "./SearchForm";

export default function Search({ searchParams }) {
  const { keyword, platform, country, language } = searchParams;
  return (
    <div>
      <h1>Keyword Search</h1>
      <SearchForm />
      <Suspense key={buildURL(keyword, platform, country, language)} fallback={<p>Fetching keyword...</p>}>
        {keyword && <Keywords key={keyword} keyword={keyword} platform={platform} country={country} language={language} />}
      </Suspense>
    </div>
  );
}
