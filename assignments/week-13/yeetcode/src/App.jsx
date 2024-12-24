import { useContext } from "react";
import Layout from "./components/Layout";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import FavoriteCard from "./components/FavoriteCard";

function App() {
    return (
        <ThemeProvider >
            <Layout />
        </ThemeProvider>
    );
}

const ThemeToggleButton = () => {
    const toggleDarkTheme = useContext(ThemeContext);

    return (
        <button onClick={toggleDarkTheme}>
            Toggle Theme
        </button>
    );
};

export default App;