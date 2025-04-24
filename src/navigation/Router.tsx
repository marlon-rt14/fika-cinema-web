import { Navigate, Route, Routes, ErrorBoundary } from "@core/imports";
import { MovieLayout, ErrorFallbackRouter } from "@components";
import { NotFoundPage } from "@/modules/shared/pages";
import { Movies } from "@movies/pages";
import { Admin } from "@navigation";

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
