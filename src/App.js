import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./Routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
