import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import AppNavigation from "./src/navigation/appNavigation";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <AppNavigation />;

}
