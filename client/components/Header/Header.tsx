"use client";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import { login, register } from "@/utils/Icons";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/globalContext";
import SearchIcon from "@/public/Icons/SearchIcon";

function Header() {
  const { user } = useUserContext();
  const { openModalForSnippet, openProfileModal, openModalForSearch } =
    useGlobalContext();

  const photo = user?.photo;
  const router = useRouter();

  return (
    <div className="fixed z-20 top-0 w-full px-8 flex items-center justify-between bg-1 border-b-[2px] border-rgba-2 h-[8vh]">
      <Link href="/" className="flex items-center gap-0.5">
        <Image
          src="/thecodedealer--logo-white.png"
          alt="logo"
          width={50}
          height={50}
          className="ml-[1px] object-contain rounded-3xl shadow-sm"
        />
        <h1 className="pl-3 flex items-center font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7263F3] to-[#6BBE92] tracking-wide drop-shadow-sm">
          Snipster
        </h1>

      </Link>

      <div className="lg:flex hidden">
        <SearchInput />
      </div>

      {!user._id ? (
  <div className="flex items-center gap-4">
    {/* Login Button */}
    <button
      className="relative h-[47px] px-4 flex items-center justify-center gap-3 rounded-xl 
                 bg-gradient-to-r from-[#3A3B3C] to-[#4A4B4C] text-white font-semibold 
                 hover:from-[#4A4B4C] hover:to-[#5A5B5C] transition-all duration-300 ease-in-out shadow-md"
      onClick={() => router.push("/login")}
    >
      <span className="text-lg text-[#6BBE92]">{login}</span>
      <span className="tracking-wide">Login</span>
    </button>

    {/* Register Button */}
    <button
      className="relative h-[47px] px-4 flex items-center justify-center gap-3 rounded-xl 
                 bg-gradient-to-r from-[#7263F3] to-[#6BBE92] text-white font-bold 
                 hover:from-[#6BBE92] hover:to-[#7263F3] transition-all duration-300 ease-in-out shadow-md"
      onClick={() => router.push("/register")}
    >
      <span className="text-lg">{register}</span>
      <span className="tracking-wide">Register</span>
    </button>
  </div>
)  : (
        <div className="flex items-center gap-2">
          <button
            className="mr-4 h-[42px] px-4 flex items-center justify-center text-black bg-white rounded-lg font-semibold hover:bg-white/80 transition duration-200 ease-in-out"
            onClick={openModalForSnippet}
          >
            Create Snippet
          </button>

          <button
            onClick={openModalForSearch}
            className="w-[42px] h-[42px] flex items-center justify-center bg-rgba-3 rounded-lg lg:hidden"
          >
            <SearchIcon stroke="rgba(249,249,249,0.6)" />
          </button>

          <button
            onClick={openProfileModal}
            className="w-[43px] h-[42px] flex items-center justify-center bg-rgba-3 rounded-lg"
          >
            <Image
              src={photo || "/image--user.png"}
              alt="profile"
              width={35}
              height={35}
              className="rounded-lg"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
