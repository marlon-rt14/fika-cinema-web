import { Navigate, Route, Routes } from "react-router";
import { MovieLayout } from "../components/layouts/MovieLayout";
import { Movies } from "../modules/movies";
import { NotFoundPage } from "../modules/public";
import { Admin } from "./Admin";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackRouter } from "../components/Partials";

export const Router = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackRouter} resetKeys={[location.pathname]}>
      <Routes>
        <Route element={<MovieLayout />}>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
};
