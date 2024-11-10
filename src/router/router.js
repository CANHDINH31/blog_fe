// routes.js
import ArticleDetailPage from "../pages/articleDetail/ArticleDetailPage";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage";
import AdminLayout from "../pages/admin/AdminLayout";
import Admin from "../pages/admin/screens/Admin";
import Comments from "../pages/admin/screens/comments/Comments";
import ManagePosts from "../pages/admin/screens/posts/ManagePosts";
import EditPost from "../pages/admin/screens/posts/EditPost";
import Categories from "../pages/admin/screens/categories/Categories";
import EditCategories from "../pages/admin/screens/categories/EditCategories";
import Users from "../pages/admin/screens/users/Users";
import BlogPage from "../pages/blog/BlogPage";
import ManageDocs from "../pages/admin/screens/docs/ManageDocs";

const routes = [
  { path: "/", element: <HomePage />, index: true },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <ArticleDetailPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profile", element: <ProfilePage /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Admin /> },
      { path: "comments", element: <Comments /> },
      { path: "posts/manage", element: <ManagePosts /> },
      { path: "posts/manage/edit/:slug", element: <EditPost /> },
      { path: "docs/manage", element: <ManageDocs /> },
      { path: "docs/manage/edit/:slug", element: <EditPost /> },
      { path: "categories/manage", element: <Categories /> },
      { path: "categories/manage/edit/:slug", element: <EditCategories /> },
      { path: "users/manage", element: <Users /> },
    ],
  },
];

export default routes;
