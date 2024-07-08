"use client";
import { GoHome } from "react-icons/go";
import { BsPiggyBank } from "react-icons/bs";
import { MdOutlineCategory, MdPayment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

import "../../styles/common.css";

const Sidebar = () => {
  const sideItems = [
    { name: "Home", Icon: GoHome, route: "/" },
    { name: "Payments", Icon: BsPiggyBank, route: "/payment" },
    { name: "Categories", Icon: MdOutlineCategory, route: "/categories" },
    { name: "Budgets", Icon: MdPayment, route: "/budget" },
    { name: "Setting", Icon: IoSettingsOutline, route: "/setting" },
  ];

  const path = usePathname();

  return (
    <div className="sidebar-container">
      <aside className="sidebar-item-wrapper">
        {sideItems.map(({ Icon, name, route = "/" }, i) => (
          <Link
            href={`${route}`}
            className={`sidebar-item ${
              route === "/"
                ? route === path
                  ? "active"
                  : ""
                : path.includes(route)
                ? "active"
                : ""
            }`}
            key={i}
          >
            <Icon size={28} />
            <li>{name}</li>
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
