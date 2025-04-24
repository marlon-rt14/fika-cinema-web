import { Navigate, Route, Routes, ErrorBoundary } from "@/core";
import { NotFoundPage } from "@/modules/shared/pages";
import { Cast, Genres, Movies } from "../modules/admin/pages";
import { AdminLayout, ErrorFallbackRouter } from "@components";

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
