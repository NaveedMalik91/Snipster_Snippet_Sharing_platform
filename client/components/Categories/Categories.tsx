"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useUserContext } from "@/context/userContext";
import { usePathname } from "next/navigation";
import { useSnippetContext } from "@/context/snippetsContext";
import { ITag } from "@/types/types";

function Categories() {
  const {
    tags,
    getPublicSnippets,
    getUserSnippets,
    getLikedSnippets,
    getPopularSnippets,
  } = useSnippetContext();
  const userId = useUserContext().user?._id;
  const [activeTag, setActiveTag] = useState("All");
  const [activeTagId, setActiveTagId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      if (activeTagId) {
        switch (pathname) {
          case "/":
            await getPublicSnippets("", activeTagId);
            break;
          case "/snippets":
            await getUserSnippets(activeTagId);
            break;
          case "/favourites":
            await getLikedSnippets(activeTagId);
            break;
          case "/popular":
            await getPopularSnippets(activeTagId);
            break;
          default:
            break;
        }
      } else {
        await getPublicSnippets();
        await getPopularSnippets();
        if (userId) {
          await getUserSnippets();
          await getLikedSnippets();
        }
      }
    };
    fetchData();
  }, [pathname, userId, activeTagId]);

  return (
    <div className="fixed left-[4.2rem] right-0 top-[4.2rem] z-10 bg-3 border-b-2 border-rgba-2">
      {/* Keep it just below navbar */}
      <div className="px-[1rem] py-2">
        <Carousel className="w-full relative">
          <CarouselContent className="flex gap-3">
            {/* “All” Category */}
            <CarouselItem
              className={`flex items-center justify-center px-6 py-0.5 rounded-full cursor-pointer border border-rgba-1 select-none text-center
                ${
                  activeTag === "All"
                    ? "text-white bg-[#7263F3]"
                    : "bg-[#3A3B3C] text-white hover:text-gray-800 hover:bg-white transition-all duration-300 ease-in-out"
                }`}
              onClick={() => {
                setActiveTag("All");
                setActiveTagId(null);
                getPublicSnippets();
              }}
            >
              All
            </CarouselItem>

            {/* Dynamic Tags */}
            {tags.map((tag: ITag) => (
              <CarouselItem
                key={tag._id}
                className={`flex items-center justify-center px-4 py-0.5 text-sm rounded-full cursor-pointer border border-rgba-1 select-none text-center
                ${
                  activeTag === tag.name
                    ? "text-white bg-[#7263F3]"
                    : "bg-[#3A3B3C] text-white hover:text-gray-800 hover:bg-white transition-all duration-300 ease-in-out"
                }`}
                onClick={() => {
                  setActiveTag(tag.name);
                  setActiveTagId(tag._id);
                }}
              >
                {tag.name.toUpperCase()}
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Properly aligned arrows */}
          <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 bg-[#3A3B3C] text-white hover:bg-[#7263F3]" />
          <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 bg-[#3A3B3C] text-white hover:bg-[#7263F3]" />
        </Carousel>
      </div>
    </div>
  );
}

export default Categories;
