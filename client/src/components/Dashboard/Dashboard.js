import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/SideBar/SideBar";
import Profile from "../../components/Profile/Profile";
import AddUser from "../../components/AddUser/AddUser";
import UserList from "../../components/ListUsers/ListUsers";
import SearchCity from "../../components/SearchCity/SearchCity";
import SearchLanguage from "../../components/SearchLanguage/SearchLanguage";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import Manage_profile from "../../components/manage-profile/Manage_profile";
import Logout from "../../components/Logout/Logout";
// import Massages from "../../components/massages/Massage";

const { Content } = Layout;

function Head({ setAuth }) {
	const [selectedMenu, setSelectedMenu] = useState("");

	const handleMenuClick = (key) => {
		setSelectedMenu(key);
	};

	const renderContent = () => {
		switch (selectedMenu) {
			case "profile":
				return <Profile setAuth={setAuth} />;
			case "manageProfile":
				return <Manage_profile />;
			case "add-users":
				return <AddUser />;
			case "user-list":
				return <UserList />;
			case "search-city":
				return <SearchCity />;
			case "search-language":
				return <SearchLanguage />;
			case "search-country":
				return <SearchCountry />;
			case "logout":
				return <Logout setAuth={setAuth} />;
			// case "massages":
			// 	return <Massages />;
			default:
				return <Manage_profile />;
		}
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar onMenuClick={handleMenuClick} />
			<Layout className="site-layout">
				<Content style={{ margin: "0 16px" }}>{renderContent()}</Content>
			</Layout>
		</Layout>
	);
}

export default Head;
