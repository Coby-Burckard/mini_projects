//API key l6EdrXsuOCc2igDghuhY0V0bdu3nwcxbzjxJaaN4
// url https://api.nasa.gov/planetary/apod?api_key=l6EdrXsuOCc2igDghuhY0V0bdu3nwcxbzjxJaaN4

const fetchNASAAPODImage = async (
  date = "today",
  hd = true,
  key = "l6EdrXsuOCc2igDghuhY0V0bdu3nwcxbzjxJaaN4"
) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}&hd=${hd}`
  );
  return response.json();
};

export { fetchNASAAPODImage };
