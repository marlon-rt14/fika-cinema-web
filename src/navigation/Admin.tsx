import { Navigate, Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { AdminLayout } from "../components/layouts";
import { Cast, Genres, Movies } from "../modules/admin/pages";
import { NotFoundPage } from "../modules/public";
import { ErrorFallbackRouter } from "../components/Partials";

export const Admin = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackRouter} resetKeys={[location.pathname]}>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Navigate to="/admin/movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/genres" element={<Genres />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
};
