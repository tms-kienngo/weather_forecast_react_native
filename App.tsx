import { Provider } from "react-redux";
import store from "./src/store";
import AppNavigation from "./src/navigation/AppNavigation";
import ThemeProvider from "./src/screens/theme/ThemeProvider";



export default function App() {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
}
