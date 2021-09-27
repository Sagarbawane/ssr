import Home from "./components/Home";
import Post from "./components/Post";

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },

  {
    ...Post,
    path: '/:label',
    exact: true,
  }
]




