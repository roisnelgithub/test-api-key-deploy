export const getMovies = async (name: string) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=2cdaa36f&s=${name}`);
  const data = await res.json();
  return data;
};
