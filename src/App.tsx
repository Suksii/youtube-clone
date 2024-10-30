import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto, 1fr] flex-grow overflow-auto">
        <div>Sidebar</div>
        <div className="overflow-hidden px-6 py-4">
          <div className="sticky top-0 z-20">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
