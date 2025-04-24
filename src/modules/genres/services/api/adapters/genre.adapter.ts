import { Genre, GenreResponse } from "@/modules/shared/interfaces";

export const toGenreModel = (genre: GenreResponse): Genre => genre;

export const toGenresModel = (genres: GenreResponse[]): Genre[] => genres.map(toGenreModel);
