export const getPages = (page) => {
  const url =
    `https://api.unsplash.com/search/collections?page=${page}&limit=20&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(`Error in fetching art ${err}`);
    });
};