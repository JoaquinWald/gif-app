export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GUMu3PyVscEvAupzoXJks5ciXX7agWOK&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    webp: img.images.fixed_width_downsampled.url,
  }));

  return gifs;

}