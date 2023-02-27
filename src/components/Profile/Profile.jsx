import { Spin } from "antd";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <Spin></Spin>;
  }
  return (
    <div>
      Profile
      <p>{user.name}</p>
      <p>{user.email}</p>
      <h2>Orders</h2>
      {user.orderIds.map((order) => {
        return (
          <div>
            <p>Nºorder: {order._id}</p>
            <p>Delivery Date:{order.deliveryDate}</p>
            <p>Status:{order.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
