import AppContainer from "./app/AppContainer";
import TopBar from "./components/ui/TopBar";
import HangerBar from "./components/ui/HangerBar";
import "./App.css";
import generalStore from "./store/generalStore";
import FilterUIContainer from "./app/dash-board/filter-component/FilterUIContainer";

const App = () => {
  const { showFilterUI } = generalStore();

  return (
    <div className="flex w-full  min-h-screen gap-0 ">
      <HangerBar />
      <TopBar />
      <AppContainer />

      {showFilterUI && <FilterUIContainer />}
    </div>
  );
};

export default App;
