import { Provider } from "react-redux";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {path:"/",element:<MainContainer/>},
      {path:"/watch",element:<WatchPage/>}
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
