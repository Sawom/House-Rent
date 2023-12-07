import React from "react";
import DashNavbar from "../../Navbar/DashNav/DashNavbar";
import PropertyTable from "../../PropertyTable/PropertyTable";
import ProfileDetails from "../ProfileDetails/ProfileDetails";

const Profile = () => {
  return (
    <div className="container h-100">
      <DashNavbar />
      <ProfileDetails />
      <PropertyTable />
    </div>
  );
};

export default Profile;
