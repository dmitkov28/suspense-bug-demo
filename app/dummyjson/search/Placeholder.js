const API = (product) => `https://dummyjson.com/products/search?q=${product}`

const fetchKeywords = async (product) => {
  const url = API(product);
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

export default async function Placeholder({ product }) {
  const data = await fetchKeywords(product);
  return <div>{data ? JSON.stringify(data) : "Not found"}</div>;
}
