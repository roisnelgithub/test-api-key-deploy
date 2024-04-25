export const getMovies = async (name: string) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${import.meta.env.PROD}&s=${name}`
  );
  const data = await res.json();
  return data;
};
