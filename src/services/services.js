import axios from "axios";

const keyApi = `7dbf79a7ec9fee0ed11175b6a2c600f3`;
export default {
  async getData() {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getCasts(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}&language=en-US`
        )
        .then(data => data.data.cast);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getReviews(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${keyApi}&language=en-US&page=1`
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US`
        )
        .then(data => data.data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async searchFilms(query) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=en-US&query=${query}&page=1&include_adult=false`
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};

// ___
// export default {
//   async getBestOfTheDay() {
//     try {
//       const data = await axios.get(`/trending/movie/day?api_key=${key}`);
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   },
//   async searchData(query) {
//     try {
//       const data = await axios.get(
//         `/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
//       );
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   },
//   async getDetailsById(id) {
//     try {
//       const data = await axios.get(
//         `/movie/${id}?api_key=${key}&language=en-US`
//       );
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   },
//   async getActorsById(id) {
//     try {
//       const data = await axios.get(`/movie/${id}/credits?api_key=${key}`);
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   },
//   async getReviewsById(id) {
//     try {
//       const data = await axios.get(
//         `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
//       );
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   }
// };
