import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../pages/Admin/Admin";
import ConsumerPage from "../pages/Consumer/Consumer";

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/consumer",
    element: <ConsumerPage />,
  },
]);
