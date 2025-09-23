import { Provider } from "react-redux";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
