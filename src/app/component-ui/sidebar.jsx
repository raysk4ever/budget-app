"use client";
import Image from "next/image";
import "../../styles/common.css";
import Home from "../../home.svg";
import { GoHome } from "react-icons/go";
import { BsPiggyBank } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const sideItems = [
    { name: "Home", Icon: GoHome, route: "/home" },
    { name: "Payments", Icon: BsPiggyBank, route: "/payment" },
    { name: "Budgets", Icon: MdPayment, route: "/budget" },
    { name: "Setting", Icon: IoSettingsOutline, route: "/setting" },
  ];

  const path = usePathname();
  console.log("path", path);

  return (
    <div className="sidebar-container">
      <aside className="sidebar-item-wrapper">
        {sideItems.map(({ Icon, name, route = "/" }, i) => (
          <Link
            href={route}
            className={`sidebar-item ${path === route ? "active" : ""}`}
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
