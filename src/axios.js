import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// 06bdc8fdcf78811486ade3b86c1f6886
