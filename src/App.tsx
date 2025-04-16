import CountBtn from "@/components/count-btn";
import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/solvex",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
