// export interface Movie{
//   imdbID: string;
//   Title: string;
//   Year: number;
//   Poster: string;

//   Released: string;
//   Runtime: string;
//   Genre: string;
//   Director: string;
//   Actors: String;
//   Plot: string;
//   Language: string;
//   Awards: string;
//   Type: string;
//   BoxOffice: string;
//   imdbRating: string;


//   watched: string;
//   rating: number;
//   comment: string;
// }

export interface Movie {
  page: number;
  results?: (ResultsEntity)[] | null;
  total_pages: number;
  total_results: number;
}
export interface ResultsEntity {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres?: (GenresEntity)[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: (ProductionCompaniesEntity)[] | null;
  production_countries?: (ProductionCountriesEntity)[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: (SpokenLanguagesEntity)[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  rating: number;
  comment: string;
  watched: boolean;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
export interface GenresEntity {
  id: number;
  name: string;
}
export interface ProductionCompaniesEntity {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}
export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
