import Appbar from "./components/baselayout/Appbar";
import Sidebar from "./components/baselayout/Sidebar";
import DashboardScreen from "./components/dashboard/DashboardScreen";

function App() {
  return (
    <div className="App w-full bg-[#212121] text-white">
      <div className="page-wrapper h-screen flex">
        <Sidebar />
        <div className="content-wrapper ml-[calc(20%+12px)] w-full">
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
