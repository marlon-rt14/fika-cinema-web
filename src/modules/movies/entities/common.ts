import { ICast } from "../../cast/entities";
import { IGenre } from "../../genres/entities";

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  rate: number;
  genres: IGenre[];
  cast: ICast[];
}
