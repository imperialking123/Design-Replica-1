import DashBoardContainer from "./dash-board/DashBoardContainer";

const AppContainer = () => {
  return (
    <div className="w-[98%] overflow-hidden max-h-screen flex items-end z-20">
      <DashBoardContainer />
    </div>
  );
};

export default AppContainer;
