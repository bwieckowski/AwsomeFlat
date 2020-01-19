import React from "react";
import UserPanelControl from "./UserPanelControl";
import Navbar from "../modules/UserPanel/Navbar/Navbar";

const UserPanel: React.FC = () => {
    return<UserPanelControl>
        <Navbar />
    </UserPanelControl>
 };

 export default UserPanel;