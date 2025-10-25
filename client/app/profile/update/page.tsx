"use client";

import { useUserContext } from "@/context/userContext";
import { envelope, github, linkedin } from "@/utils/Icons";
import Image from "next/image";
import React from "react";

function Page() {
  const { user, updateUser, changePassword, userState, handlerUserInput } =
    useUserContext();

  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handlePasswordChange = (e: any) => {
    if (e.target.name === "oldPassword") {
      setOldPassword(e.target.value);
    } else {
      setNewPassword(e.target.value);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-start pt-16 pb-10 bg-[#0f1115]">
      <form
        className="u-shadow-2 px-8 py-10 bg-1 rounded-2xl max-w-[900px] w-full mx-4 border border-rgba-2"
        onSubmit={(e) => {
          e.preventDefault();
          updateUser(e, userState);
        }}
      >
        {/* Profile Image (static) */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <label className="text-gray-200 text-lg">Profile Picture</label>
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-rgba-2">
            <Image
              src={user?.photo || "/image--user.png"}
              alt="profile picture"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          </div>
        </div>


        {/* Social Links */}
        <div className="flex flex-col gap-6">
          <label className="text-gray-300 text-lg font-medium">
            Social Links
          </label>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
            {/* Github */}
            <div className="relative">
              <span className="absolute top-[50%] left-[1rem] -translate-y-1/2 text-gray-300 text-2xl">
                {github}
              </span>
              <input
                id="github"
                name="github"
                type="text"
                defaultValue={user?.github}
                onChange={(e) => handlerUserInput("github")(e)}
                placeholder="Github"
                className="w-full py-[.8rem] pl-[3.2rem] pr-[1rem] bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
              />
            </div>

            {/* Linkedin */}
            <div className="relative">
              <span className="absolute top-[50%] left-[1rem] -translate-y-1/2 text-gray-300 text-2xl">
                {linkedin}
              </span>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                defaultValue={user?.linkedin}
                onChange={(e) => handlerUserInput("linkedin")(e)}
                placeholder="LinkedIn"
                className="w-full py-[.8rem] pl-[3.2rem] pr-[1rem] bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
              />
            </div>

            {/* Public Email */}
            <div className="relative">
              <span className="absolute top-[50%] left-[1rem] -translate-y-1/2 text-gray-300 text-2xl">
                {envelope}
              </span>
              <input
                id="publicEmail"
                name="publicEmail"
                type="email"
                defaultValue={user?.publicEmail}
                onChange={(e) => handlerUserInput("publicEmail")(e)}
                placeholder="Public Email"
                className="w-full py-[.8rem] pl-[3.2rem] pr-[1rem] bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
              />
            </div>
          </div>
        </div>

        {/* Name and Email */}
        <div className="w-full mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userState.name || ""}
              onChange={(e) => handlerUserInput("name")(e)}
              className="w-full py-[.8rem] pl-4 pr-1 bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-300">
              Private Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email}
              className="w-full py-[.8rem] pl-4 pr-1 bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 flex flex-col gap-2">
          <label htmlFor="bio" className="text-gray-300">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            defaultValue={user?.bio}
            onChange={(e) => handlerUserInput("bio")(e)}
            className="w-full py-4 pl-4 pr-1 bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97] resize-none"
          />
        </div>

        {/* Password Section */}
        <div className="w-full mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="oldPassword" className="text-gray-300">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={handlePasswordChange}
              name="oldPassword"
              className="w-full py-[.8rem] pl-4 pr-1 bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="newPassword" className="text-gray-300">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              name="newPassword"
              className="w-full py-[.8rem] pl-4 pr-1 bg-transparent border-2 border-rgba-2 rounded-md text-gray-200 outline-none focus:border-[#6fcf97]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-end flex-wrap">
          <button
            type="button"
            onClick={() => changePassword(oldPassword, newPassword)}
            className="py-3 px-8 bg-red-500 text-white font-medium rounded-md hover:bg-red-500/70 transition-all duration-300"
          >
            Update Password
          </button>
          <button
            type="submit"
            className="py-3 px-8 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-500/70 transition-all duration-300"
          >
            Update Profile
          </button>
        </div>
      </form>
    </main>
  );
}

export default Page;
