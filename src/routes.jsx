import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
  },
  {
    path: "*",
    element: <p>hello</p>,
  },
 
]);

export default router;
