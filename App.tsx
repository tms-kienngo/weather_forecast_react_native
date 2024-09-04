import { Provider } from "react-redux";
import store from "./src/store";
import HomeScreen from "./src/screens/home/HomeScreen";
import AppNavigation from "./src/navigation/Navigation";



export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
