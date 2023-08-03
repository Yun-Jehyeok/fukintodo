import Link from "next/link";

export default function Gnb() {
  const gnbItems = [
    {
      main: {
        title: "Dashboard",
        ico: "",
      },
      sub: [
        {
          title: "eCommerce",
          link: "/ecommerce",
        },
        {
          title: "Analytics",
          link: "/analytics",
        },
        {
          title: "Marketing",
          link: "/marketing",
        },
      ],
    },
  ];
  return (
    <div className="w-[17.5rem] bg-gnb min-h-screen py-10 px-[1.5625rem] text-white">
      {/* Logo */}
      <div className="w-full flex justify-center">
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>
      </div>

      <div className="text-bodydark2 text-sm mt-[2.6875rem]">Menu</div>
    </div>
  );
}
