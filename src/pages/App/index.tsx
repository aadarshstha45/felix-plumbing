import Loader from "@plumbing/utils/Loader";
import { ReactNode, Suspense } from "react";
import { Navigate, Route, RouteObject, Routes } from "react-router-dom";
import { appRoutes } from "./appRoutes";

// Define the shape of your route objects for better type safety
type AppRoute = RouteObject & {
  path?: string;
  accessor?: string[];
  element: ReactNode;
  index?: boolean;
  children?: AppRoute[];
};

const renderRoutes = (
  children: AppRoute[] | undefined,
  role: string | null
): ReactNode => {
  return children
    ?.filter((childRoute) => {
      // Include routes if they have no accessor or if the role is included in the accessor
      return (
        !childRoute.accessor || (role && childRoute.accessor.includes(role))
      );
    })
    .map((childRoute, childIndex) => {
      // Check if the route is an index route
      if (childRoute.index) {
        return <Route key={childIndex} index element={childRoute.element} />;
      } else {
        return (
          <Route
            key={childIndex}
            path={childRoute.path}
            element={childRoute.element}
          >
            {/* Recursively render child routes if they exist */}
            {childRoute.children && renderRoutes(childRoute.children, role)}
          </Route>
        );
      }
    });
};

const App = () => {
  function MissingRoute() {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* {isAuthenticated ? (
          <> */}
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children, null)}
          </Route>
        ))}
        {/* </>
        ) : (
          <Route element={<Outlet />}>
            <Route
              path={NAVIGATION_ROUTES.LOGIN}
              element={NAVIGATION_PAGES.LOGIN}
            />
            <Route path="*" element={<MissingRoute />} />
          </Route>
        )} */}
        <Route path="*" element={<MissingRoute />} />
      </Routes>
    </Suspense>
  );
};

export default App;
