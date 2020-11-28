import axios from "axios";

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;

//https://api.themoviedb.org/3/discover/tv?api_key=6a7488641bbe2ddced8c119c6cc2d10d&with_networks=213
