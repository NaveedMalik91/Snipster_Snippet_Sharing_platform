
"use client";
import { useUserContext } from "@/context/userContext";
import {
  bookmarkIcon,
  box,
  fire,
  gear,
  help,
  home,
  users,
} from "@/utils/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useRouter } from "nextjs-toploader/app";

function Sidebar() {
  const { user } = useUserContext();
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { id: 1, name: "Home", url: "/", icon: home },
    { id: 2, name: "Popular", url: "/popular", icon: fire },
    { id: 3, name: "Top Creators", url: `${user ? "/leaderboard" : "/login"}`, icon: users },
    { id: 4, name: "Favourites", url: `${user ? "/favourites" : "/login"}`, icon: bookmarkIcon },
    { id: 5, name: "My Snippets", url: `${user ? "/snippets" : "/login"}`, icon: box },
    { id: 6, name: "Settings", url: `${user?._id ? "/profile/update" : "/login"}`, icon: gear },
    { id: 7, name: "Help", url: "/help", icon: help },
  ];

  const getIconColor = (url: string) => (pathname === url ? "#aaa" : "#71717a");

  return (
    <div className="fixed top-[3.5rem] z-20 bg-2 h-[calc(100%-4rem)] border-r-[2px] border-rgba-3 w-[4rem] flex flex-col justify-between">
      <nav className="flex flex-col justify-between h-full w-full">
        <ul className="mt-4 flex flex-col items-center gap-4">
          {menu.map((item) => (
            <li
              key={item.id}
              title={item.name}
              className={`w-full flex items-center justify-center py-3 cursor-pointer ${
                pathname === item.url ? "bg-[#2d2d2d]" : ""
              }`}
              onClick={() => router.push(item.url)}
            >
              <Link href={item.url}>
                <span
                  className="text-xl"
                  style={{ color: getIconColor(item.url) }}
                >
                  {item.icon}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mb-4 text-[12px] text-gray-400 text-center w-full border-t-[1px] border-rgba-3 pt-2">
          &copy; {new Date().getFullYear()} Snipster
        </footer>
      </nav>
    </div>
  );
}

export default Sidebar;
