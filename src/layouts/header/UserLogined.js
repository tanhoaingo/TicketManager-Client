import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useClickOutSide from "../../hooks/useClickOutSide";
import { userSelector } from "../../redux/authSelector";
import UserOptionModal from "./UserOptionModal";
const avatar = require("../../asset/img/avatar.jpg");
/**
 * @author
 * @function UserLogin
 **/

export const UserLogin = (props) => {
  const { show, setShow, nodeRef } = useClickOutSide(".modal");
  const [coords, setCoords] = useState({});

  const handleOpenModal = () => {
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(true);
  };

  const { user } = useSelector(userSelector);

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-10 list-none">
        <a href="#" className="text-blue-600 font-bold">
          Home
        </a>
        <a href="#">News</a>
        <a href="#">Company</a>
        <a href="#">New Routes</a>
      </div>
      <div className="logined-bar">
        <div className="notify p-1 text-primary bg-gray-200 rounded-full w-[35px] h-[35px] flex items-center justify-center">
          <i class="fas fa-bell"></i>
        </div>

        {/* <div className="setting">
          <i class="fas fa-cog"></i>
        </div> */}

        <div className="profile" ref={nodeRef} onClick={handleOpenModal}>
          <div className="profile__avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="profile__name">
            <span className="font-bold">
              Hi,{" "}
              {!user.user
                ? user?._user.firstName + " " + user?._user.lastName
                : user.user.firstName + user.user.lastName}
            </span>
          </div>
          <div className="profile__btn-down relative">
            <i class="fas fa-chevron-down"></i>
          </div>
          {show && <UserOptionModal coords={coords} />}
        </div>
      </div>
    </div>
  );
};
