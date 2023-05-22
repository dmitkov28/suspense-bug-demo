const API = (postId) =>
  `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

const fetchKeywords = async (postId) => {
  const url = API(postId);
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

export default async function Placeholder({ postId }) {
  const data = await fetchKeywords(postId);
  return <div>{data.length > 0 ? JSON.stringify(data) : "Not found"}</div>;
}
