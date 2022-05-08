import react from "react";
import PostBlock from "./PostBlock";
import UserTrain from "./UserTrain";
import { Provider } from "react-redux";
import store from "./store/store";

const Dashboard = () => {
  return (
    <Provider store={store}>
      <div>
        <UserTrain />
        <PostBlock />
      </div>
    </Provider>
  );
};

export default Dashboard;
