const buildURL = (keyword, platform, country, language) =>
  `https://6vsezq9oh2.execute-api.eu-central-1.amazonaws.com/prod/api/v1/keywords?platform=${platform}&query=${keyword}&country=${country}&language=${language}`;

const fetchKeywords = async (keyword, platform, country, language) => {
  const url = buildURL(keyword, platform, country, language);
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

export default async function Keywords({ keyword, platform , country, language}) {
  const data = await fetchKeywords(keyword, platform, country, language);
  return <div>{data.length > 0 ? JSON.stringify(data) : "Not found"}</div>;
}
