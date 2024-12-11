import "./App.css";
import Header from "./components/Header";
import VideoPage from "./pages/VideoPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch/:id" element={<VideoPage />} />
          <Route path="/results" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
