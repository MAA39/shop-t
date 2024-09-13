const API_BASE_URL = `https://public-api.wordpress.com/wp/v2/`;
const SITE_ID = `takahashishoutenshop.wordpress.com`;

export const POSTS_ENDPOINT_URL = `${API_BASE_URL}sites/${SITE_ID}/posts`;

export const getPosts = async () => {
  const res = await fetch(POSTS_ENDPOINT_URL);
  return res.json();
};

export const getPost = async (id: string) => {
  const res = await fetch(`${POSTS_ENDPOINT_URL}/${id}`);
  return res.json();
};
