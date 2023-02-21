import React from "react";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { BloodyAban } from "./components/bloody-aban/bloody-aban";
import { PS752Flight } from "./components/ps752-flight/ps752-flight";
import { Revolution1401 } from "./components/revolution-1401/revolution-1401";
import { About } from "./components/about/about";

const ApplicationComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    key="homepage"
                    path="/"
                    element={<Navigate to={"/bloody-aban"} />}
                />
                <Route
                    key="bloody-aban"
                    path="/bloody-aban"
                    element={<BloodyAban />}
                />
                <Route
                    key="ps752-flight"
                    path="/ps752-flight"
                    element={<PS752Flight />}
                />
                <Route
                    key="revolution-1401"
                    path="/revolution-1401"
                    element={<Revolution1401 />}
                />
                <Route key="about" path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};
function App() {
    return (
        <Provider store={store}>
            <ApplicationComponent />
        </Provider>
    );
}

export default App;
