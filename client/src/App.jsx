import "./App.css";
import ContextProvider from "./components/ContextApp";

// import * as Utils from "./utils/index";
import Sidebar from "./components/Sidebar/Sidebar";
import AppBody from "./components/AppBody/AppBody";

export default function App() {
  return (
    <ContextProvider>
      <div className="container">
        <Sidebar />
        <AppBody />
      </div>
    </ContextProvider>
  );
}
