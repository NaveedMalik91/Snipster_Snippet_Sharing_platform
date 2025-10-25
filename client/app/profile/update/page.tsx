// "use client";
// import { useUserContext } from "@/context/userContext";
// import { envelope, github, linkedin } from "@/utils/Icons";
// import Image from "next/image";
// import React from "react";

// function page() {
//   const { user, updateUser, changePassword, userState, handlerUserInput } =
//     useUserContext();

//   const [oldPassword, setOldPassword] = React.useState("");
//   const [newPassword, setNewPassword] = React.useState("");

//   const handlePasswordChange = async (e: any) => {
//     if (e.target.name === "oldPassword") {
//       setOldPassword(e.target.value);
//     } else {
//       setNewPassword(e.target.value);
//     }
//   };

//   return (
//     <main className="h-[90vh] relative flex justify-center items-center">
//       <form
//         action=""
//         className="u-shadow-2 px-8 mx-8 my-8 py-6 bg-1 rounded-lg max-w-[1200px] w-full"
//         onSubmit={(e) => {
//           e.preventDefault();
//           updateUser(e, userState);
//         }}
//       >
//         <div className="flex flex-col gap-1">
//           <label htmlFor="file-upload" className="text-gray-200">
//             Add Profile Picture
//           </label>
//           <div>
//             <label
//               htmlFor="file-upload"
//               className="py-4 flex items-center justify-center border-2 border-dashed border-rgba-2 rounded-lg cursor-pointer"
//             >
//               <Image
//                 width={100}
//                 height={100}
//                 src={user?.photo || "/image--user.png"}
//                 alt="profile picture"
//                 className="rounded-lg"
//               />
//             </label>
//             <input id="file-upload" type="file" className="hidden" />
//           </div>

//           <label htmlFor="github" className="mt-4 text-gray-300">
//             Add Social Links
//           </label>

//           <div className="flex-1 grid gap-4 grid-cols-[repeat(auto-fill,minmax(290px,1fr))]">
//             <div className="relative w-full">
//               <label
//                 htmlFor="github"
//                 className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-gray-200 text-2xl"
//               >
//                 {github}
//               </label>

//               <input
//                 id="github"
//                 name="github"
//                 type="text"
//                 defaultValue={user?.github}
//                 onChange={(e) => handlerUserInput("github")(e)}
//                 placeholder="Github"
//                 className="w-full py-[.8rem] pl-[3.2rem] pr-[1rem] text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none"
//               />
//             </div>

//             <div className="relative w-full">
//               <label
//                 htmlFor="linkedin"
//                 className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-gray-200 text-2xl"
//               >
//                 {linkedin}
//               </label>

//               <input
//                 id="linkedin"
//                 name="linkedin"
//                 type="text"
//                 defaultValue={user?.linkedin}
//                 onChange={(e) => handlerUserInput("linkedin")(e)}
//                 placeholder="Linkedin"
//                 className="w-full py-[.8rem] pl-[3.2rem] pr-[1rem] text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none"
//               />
//             </div>
//             <div className="relative w-full">
//               <label
//                 htmlFor="publicEmail"
//                 className="absolute top-[50%] left-[1rem] translate-y-[-50%] text-gray-200 text-2xl"
//               >
//                 {envelope}
//               </label>

//               <input
//                 id="publicEmail"
//                 name="publicEmail"
//                 type="email"
//                 defaultValue={user?.publicEmail}
//                 onChange={(e) => handlerUserInput("publicEmail")(e)}
//                 placeholder="Public Email"
//                 className="w-full py-[.8rem] pl-[3.2rem] pr-[1rem] text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none"
//               />
//             </div>
//           </div>

//           <div className="w-full mt-4 flex gap-4">
//             <div className="flex-1 flex flex-col gap-1">
//               <label htmlFor="name" className="text-gray-300">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 defaultValue={user?.name}
//                 className="w-full py-[.8rem] pl-4 pr-1 text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none focus:border-[#6fcf97]"
//               />
//             </div>
//             <div className="flex-1 flex flex-col gap-1">
//               <label htmlFor="name" className="text-gray-300">
//                 Private Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 defaultValue={user?.email}
//                 className="w-full py-[.8rem] pl-4 pr-1 text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none focus:border-[#6fcf97]"
//               />
//             </div>
//           </div>

//           <div className="mt-4 flex flex-col gap-1">
//             <div className="flex-1 flex flex-col gap-1">
//               <label htmlFor="bio" className="text-gray-300">
//                 Add Bio
//               </label>
//               <textarea
//                 id="bio"
//                 name="bio"
//                 rows={4}
//                 defaultValue={user?.bio}
//                 onChange={(e) => handlerUserInput("bio")(e)}
//                 className="w-full py-4 pl-4 pr-1 text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none focus:border-[#6fcf97] resize-none"
//               />
//             </div>

//             <div className="w-full mt-4 flex gap-4">
//               <div className="flex-1 flex flex-col gap-1">
//                 <label htmlFor="oldPassword" className="text-gray-300">
//                   Old Password
//                 </label>
//                 <input
//                   type="password"
//                   id="oldPassword"
//                   value={oldPassword}
//                   onChange={handlePasswordChange}
//                   name="oldPassword"
//                   className="w-full py-[.8rem] pl-4 pr-1 text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none focus:border-[#6fcf97]"
//                 />
//               </div>
//               <div className="flex-1 flex flex-col gap-1">
//                 <label htmlFor="newPassword" className="text-gray-300">
//                   New Password
//                 </label>
//                 <input
//                   type="password"
//                   id="newPassword"
//                   value={newPassword}
//                   onChange={handlePasswordChange}
//                   name="newPassword"
//                   className="w-full py-[.8rem] pl-4 pr-1 text-gray-200 bg-transparent border-[2px] border-rgba-2 rounded-md outline-none focus:border-[#6fcf97]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 flex gap-4 justify-end">
//           <button
//             type="button"
//             className="py-4 px-8 mt-4 h-[50px] flex justify-center items-center font-medium bg-red-500 text-white rounded-md hover:bg-red-500/50
//             transition-all duration-300 ease-in-out"
//             onClick={() => changePassword(oldPassword, newPassword)}
//           >
//             Update Password
//           </button>
//           <button
//             type="submit"
//             className="py-4 px-8 mt-4 h-[50px] flex justify-center items-center font-medium bg-blue-500 text-white rounded-md
//             hover:bg-blue-500/70 transition-all duration-300 ease-in-out"
//           >
//             Update Profile
//           </button>
//         </div>
//       </form>
//     </main>
//   );
// }

// export default page;
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
        {/* Profile Image Upload */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <label htmlFor="file-upload" className="text-gray-200 text-lg">
            Profile Picture
          </label>

          <label
            htmlFor="file-upload"
            className="relative w-[120px] h-[120px] border-2 border-dashed border-rgba-2 rounded-full flex items-center justify-center cursor-pointer hover:border-[#6fcf97] transition-all duration-300"
          >
            <Image
              src={user?.photo || "/image--user.png"}
              alt="profile picture"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <span className="absolute bottom-1 right-1 bg-[#6fcf97] text-xs text-black px-2 py-1 rounded-md">
              Edit
            </span>
          </label>
          <input id="file-upload" type="file" className="hidden" />
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
              defaultValue={user?.name}
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
