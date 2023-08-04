import Link from "next/link";
import GnbItem from "./gnbItem";

export default function Gnb() {
  const gnbItems = [
    {
      main: { title: "Dashboard", ico: "bg-dashboard" },
      sub: [
        { title: "eCommerce", link: "/ecommerce" },
        { title: "Analytics", link: "/analytics" },
        { title: "Marketing", link: "/marketing" },
      ],
    },
    {
      main: { title: "Calendar", ico: "bg-calendar" },
      sub: [{ title: "Calendar", link: "/calendar" }],
    },
    {
      main: { title: "Profile", ico: "bg-profile" },
      sub: [
        { title: "eCommerce", link: "/ecommerce" },
        { title: "Analytics", link: "/analytics" },
        { title: "Marketing", link: "/marketing" },
      ],
    },
  ];

  return (
    <div className="w-[17.5rem] bg-gnb min-h-screen py-10 px-[1.5625rem] text-white">
      {/* Logo */}
      <div className="w-full flex justify-center">
        <Link href="/" className="text-2xl font-bold">
          FUKIN Todo
        </Link>
      </div>

      <div className="text-bodydark2 text-sm mt-[2.6875rem] mb-[0.9375rem] px-[0.9375rem]">Menu</div>
      <div className="flex flex-col gap-1.5">
        {gnbItems.map((v) => (
          <div key={v.main.title}>
            <GnbItem {...v} />
          </div>
        ))}
      </div>
    </div>
  );
}
