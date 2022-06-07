import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
  baseURL: `${env.API_URL}`,
});

export const imgURL = `${env.IMG_URL}`;
export const apiKey = `${env.API_KEY_V3}`;


// pegar os filmes mais populares no momento
export async function getPopularMovies() {

  return api.get(`/discover/movie?sort_by=popularity.desc&api_key=${env.API_KEY_V3}&language=pt-BR`);
}


// pesquisar por filmes
export async function searchMovies(query) {

  return api.get(`/search/movie?api_key=${env.API_KEY_V3}&language=pt-BR&query=${query}&include_adult=false`);
}


// pegar os filmes recentes
export async function getRecentMovies() {

  const currentDate = new Date().toISOString().split('T')[0];

  return api.get(`/discover/movie?primary_release_date.lte=${currentDate}&sort_by=release_date&api_key=${env.API_KEY_V3}&language=pt-BR`);
}

