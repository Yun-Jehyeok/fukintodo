"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface GnbItemIFC {
  main: { title: string; ico: string };
  sub: {
    title: string;
    link: string;
  }[];
}

export default function GnbItem(item: GnbItemIFC) {
  const pathname = usePathname();
  const isSelected = item.sub.filter((v) => v.link === pathname).length > 0;

  const [isOpen, setIsOpen] = useState<Boolean>(item.sub.filter((v) => v.link === pathname).length > 0);

  return (
    <div className="w-full">
      <div
        className={`w-full h-10 items-center flex justify-between cursor-pointer ${isSelected ? "bg-graydark" : ""} hover:bg-graydark duration-300 ease-in-out rounded-sm px-[0.9375rem]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2.5">
          <div className={`w-[1.125rem] h-[1.125rem] bg-center bg-no-repeat bg-cover ${item.main.ico}`}></div>
          <div>{item.main.title}</div>
        </div>

        <div className={`w-5 h-5 bg-barr bg-center bg-no-repeat ${isOpen ? "-rotate-180" : ""} duration-300 rotate`}></div>
      </div>
      {item.sub.length ? (
        <div className={`w-full flex flex-col gap-2.5 my-[0.9375rem] pl-[1.875rem] ${isOpen ? "" : "hidden"} duration-300 ease-in-out`}>
          {item.sub.map((v) => (
            <Link href={v.link} key={v.title} className={`${pathname === v.link ? "text-white" : "text-bodydark2"} hover:text-white px-[0.9375rem] cursor-pointer duration-300 ease-in-out`}>
              {v.title}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
