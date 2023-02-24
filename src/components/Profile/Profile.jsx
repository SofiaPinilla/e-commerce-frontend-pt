import { Spin } from "antd";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  if(!user){
    return <Spin></Spin>
  }
  return (
    <div>
      Profile
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
