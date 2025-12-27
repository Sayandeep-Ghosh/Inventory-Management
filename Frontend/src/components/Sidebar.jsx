import React from "react";
import { FaHome, FaShoppingCart, FaSignOutAlt, FaUsers, FaTable, FaBox, FaTruck, FaCog } from "react-icons/fa";
import { NavLink } from "react-router";

const Sidebar = () => {
    const menuItems = [
        { title: "Dashboard", path: "/admin-dashboard", icon: <FaHome />, isParent: true },
        { title: "Categories", path: "/admin-dashboard/categories", icon: <FaTable />, isParent: false },
        { title: "Products", path: "/admin-dashboard/products", icon: <FaBox />, isParent: false },
        { title: "Suppliers", path: "/admin-dashboard/suppliers", icon: <FaTruck />, isParent: false },
        { title: "Orders", path: "/admin-dashboard/orders", icon: <FaShoppingCart />, isParent: false },
        { title: "Users", path: "/admin-dashboard/users", icon: <FaUsers />, isParent: false },
        { title: "Profile", path: "/admin-dashboard/profile", icon: <FaCog />, isParent: false },
        { title: "Settings", path: "/admin-dashboard/settings", icon: <FaCog />, isParent: false },
        { title: "Logout", path: "/admin-dashboard/logout", icon: <FaSignOutAlt />, isParent: false },
    ];

    return (
        <div className="flex flex-col h-screen bg-black text-black w-16 md:w-64 bg-white border-r shadow-lg fixed">
            <div className="h-16 flex flex-items items-center justify-center">
                <span className="hidden md:block text-xl">Inventory Management</span>
            </div>
            <div>
                <ul className="space-y-2 p-2">
                    {menuItems.map((item) => (
                        <li key={item.title}>
                            <NavLink
                                end={item.isParent}
                                to={item.path} className={({ isActive }) => (isActive ? "bg-sky-500 text-white" : "") + " flex items-center p-2 rounded-md hover:bg-blue-300 w-full transition duration-200"}>
                                <span className="text-xl">{item.icon}</span>
                                <span className="ml-4 hidden md:block ml-2">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
