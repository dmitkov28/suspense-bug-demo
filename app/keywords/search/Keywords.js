const buildURL = (query) => `https://6vsezq9oh2.execute-api.eu-central-1.amazonaws.com/prod/api/v1/keywords?platform=duckduckgo&query=${query}&country=us&language=en`

const fetchKeywords = async (query) => {
  const url = buildURL(query)
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw Error;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default async function Keywords({ keyword: querySearchParam }) {
  const data = await fetchKeywords(querySearchParam);
  return (
    <div>
      {data.length > 0 ? JSON.stringify(data) : "Not found"}
    </div>
  );
}
