import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <p>Not Found 😓</p>,
  },
  {
    path: "/videos",
    element: <div>Videos</div>,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
