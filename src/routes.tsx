import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ErrorPage from "@/pages/Error";
import BlogPage from "@/pages/blogs/Blog";
import BlogDetailPage from "@/pages/blogs/BlogDetail";
import BlogRootLayout from "@/pages/blogs/BlogRootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        {index: true, element: <HomePage />},
        {path: 'about', element: <AboutPage />},
        {
          path: 'blogs',
          element: <BlogRootLayout />,
          children: [
            {index: true, element: <BlogPage />},
            {path: ':postId', element: <BlogDetailPage />}
          ],
        },
    ],
  },
]);
