import { useCallback, useEffect } from "@core/imports";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputForm, ListBoxForm, Button } from "@components";
import { schemaCreateMovie, TFormValues } from "@movies/schemas";
import { useGenres } from "@genres/hooks";
import { useGlobalCreateMovie, ValueType } from "@contexts/modals/CreateMovie";
import { useMovies } from "@movies/hooks";
import { useCasts } from "@cast/hooks";

interface Props {
  children?: React.ReactNode;
  movie?: ValueType;
}

export const CustomForm = ({ children, movie }: Props) => {
  const { castsQuery, castSelected } = useCasts();
  const { movieMutations } = useMovies();
  const { genres, genreSelected } = useGenres();
  const { onClose } = useGlobalCreateMovie();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TFormValues>({
    resolver: zodResolver(schemaCreateMovie),
    mode: "onBlur",
  });

  const { casts } = castsQuery;
  const { selectedGenres, handleChangeMultiple } = genreSelected;
  const { selectedCasts, handleChangeMultiple: handleChangeMultipleCast } = castSelected;
  const { createMovie, updateMovie } = movieMutations;

  const onChangeGenres = useCallback(
    (items: { id: number; name: string }[]) => {
      handleChangeMultiple(items);
      setValue(
        "genres",
        items.map((item) => item.id),
        { shouldValidate: true }
      );
    },
    [setValue, handleChangeMultiple]
  );

  const onChangeCasts = useCallback(
    (items: { id: number; name: string }[]) => {
      handleChangeMultipleCast(items);
      setValue(
        "cast",
        items.map((item) => item.id),
        { shouldValidate: true }
      );
    },
    [setValue, handleChangeMultipleCast]
  );

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    if (movie?.id) {
      updateMovie.mutate({ payload: data, id: movie.id! });
    } else {
      createMovie.mutate(data);
    }
    onClose();
  };

  useEffect(() => {
    if (movie) {
      setValue("title", movie.title);
      setValue("overview", movie.overview);
      setValue("poster_path", movie.poster_path);
      setValue("release_date", movie.release_date);
      setValue("rate", movie.rate);
      setValue(
        "genres",
        movie.genres.map((genre) => genre.id)
      );
      setValue(
        "cast",
        movie.cast.map((cast) => cast.id)
      );
      handleChangeMultiple(movie.genres);
      handleChangeMultipleCast(movie.cast);
    }
  }, [movie, handleChangeMultiple, handleChangeMultipleCast, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" id="form-create-movie">
      <InputForm name="title" control={control} label="Title" type="text" error={errors.title} />
      <InputForm name="overview" control={control} label="Overview" type="text" error={errors.overview} />
      <InputForm name="poster_path" control={control} label="Poster Path" type="text" error={errors.poster_path} />
      <InputForm name="release_date" control={control} label="Release Date" type="date" error={errors.release_date} />
      <InputForm name="rate" control={control} label="Rate" type="text" error={errors.rate} inputProps={{ disabled: true }} />
      <ListBoxForm name="genres" control={control} label="Genres" error={errors.genres} data={genres} selectedItems={selectedGenres} onChange={onChangeGenres} />
      <ListBoxForm name="cast" control={control} label="Cast & Crew" error={errors.cast} data={casts} selectedItems={selectedCasts} onChange={onChangeCasts} />
      <div className="mt-4 flex gap-5 justify-end">
        <Button className="bg-comp-red" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-semantic-success" type="submit">
          Save
        </Button>
      </div>
      {children}
    </form>
  );
};
