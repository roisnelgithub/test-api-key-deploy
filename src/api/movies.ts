export const getMovies = async (name: string) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${name}`
  );
  const data = await res.json();
  return data;
};
