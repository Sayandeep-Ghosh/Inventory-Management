import React from "react";
import { FaHome, FaShoppingCart, FaSignOutAlt, FaUsers, FaTable, FaBox, FaTruck, FaCog } from "react-icons/fa";

const Sidebar = () => {
    const menuItems = [
        { title: "Dashboard", path: "/admin-dashboard", icon: <FaHome /> },
        { title: "Categories", path: "/admin-dashboard/categories", icon: <FaTable /> },
        { title: "Products", path: "/admin-dashboard/products", icon: <FaBox /> },
        { title: "Suppliers", path: "/admin-dashboard/suppliers", icon: <FaTruck /> },
        { title: "Orders", path: "/admin-dashboard/orders", icon: <FaShoppingCart /> },
        { title: "Users", path: "/admin-dashboard/users", icon: <FaUsers /> },
        { title: "Profile", path: "/admin-dashboard/profile", icon: <FaCog /> },
        { title: "Settings", path: "/admin-dashboard/settings", icon: <FaCog /> },
        { title: "Logout", path: "/admin-dashboard/logout", icon: <FaSignOutAlt /> },
    ];

    return (
        <div className="sidebar">
            {menuItems.map((item, index) => (
                <a key={index} href={item.path} className="menu-item">
                    {item.icon}
                    <span>{item.title}</span>
                </a>
            ))}
        </div>
    );
};

export default Sidebar;
