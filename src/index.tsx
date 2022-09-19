import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";
import ThemeProvider from "./App/providers/ui/ThemeProvider";

import "App/styles/index.scss";

const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
