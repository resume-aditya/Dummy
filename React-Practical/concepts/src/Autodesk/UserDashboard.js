import React from "react";
import CommentList from "./CommentList";
import PostList from "./PostList";
import "./UserDashboard.css";
import UserList from "./UserList";
import { Provider } from "react-redux";
import store from "./store/store";

const DashContext = React.createContext();

function UserDashboard() {
  return (
    <div className="outerWrapper">
      <Provider store={store}>
        <UserList />
        <PostList />
        <CommentList />
      </Provider>
    </div>
  );
}

export default UserDashboard;
