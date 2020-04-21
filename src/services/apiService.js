import axios from 'axios';

const fetchPicturesWithQuery = (searchQuery, page) => {
  const apiKey = `15321800-0af55316b9677918b25647eb1`;

  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${apiKey}&q=${searchQuery}&page=${page}`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchPicturesWithQuery,
};
