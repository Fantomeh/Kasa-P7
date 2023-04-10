// src/router.js
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Accommodation } from "./pages/Accommodation";
import NotFound from "./pages/NotFound";

// Créez un routeur avec les routes définies pour votre application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "/logement/:id",
    element: <Accommodation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
