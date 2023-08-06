'use client';

import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/states/userStates';

export default function Header() {
  const [user, setUser] = useRecoilState(userState);
  const [isLogin, setIsLogin] = useState(user.token !== '');

  useEffect(() => {
    setIsLogin(user.token !== '');
  }, [user]);

  const handleLogout = () => {
    setUser({
      id: '',
      name: '',
      email: '',
      token: '',
    });
  };

  return (
    <div className="w-full flex items-center pl-[2.1875rem] pr-[1.875rem] h-20 bg-white justify-between">
      <div className="flex gap-5">
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.16675 3.33341C5.94509 3.33341 3.33341 5.94509 3.33341 9.16675C3.33341 12.3884 5.94509 15.0001 9.16675 15.0001C12.3884 15.0001 15.0001 12.3884 15.0001 9.16675C15.0001 5.94509 12.3884 3.33341 9.16675 3.33341ZM1.66675 9.16675C1.66675 5.02461 5.02461 1.66675 9.16675 1.66675C13.3089 1.66675 16.6667 5.02461 16.6667 9.16675C16.6667 13.3089 13.3089 16.6667 9.16675 16.6667C5.02461 16.6667 1.66675 13.3089 1.66675 9.16675Z"
              fill="#637381"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2858 13.2858C13.6113 12.9604 14.1389 12.9604 14.4643 13.2858L18.0893 16.9108C18.4148 17.2363 18.4148 17.7639 18.0893 18.0893C17.7639 18.4148 17.2363 18.4148 16.9108 18.0893L13.2858 14.4643C12.9604 14.1389 12.9604 13.6113 13.2858 13.2858Z"
              fill="#637381"
            />
          </svg>
        </div>
        <input
          className="focus focus:border-none focus:outline-none"
          type="text"
          placeholder="Type to search.."
        />
      </div>
      <div className="flex items-center">
        <DarkModeSwitcher />
        <div className="mr-[0.9375rem] w-[2.125rem] h-[2.125rem] rounded-full bg-[#EFF4FB] bg-center bg-no-repeat bg-alarm cursor-pointer"></div>
        <div
          className={`${
            isLogin ? 'mr-9' : 'mr-[0.9375rem]'
          } w-[2.125rem] h-[2.125rem] rounded-full bg-[#EFF4FB] bg-center bg-no-repeat bg-chat cursor-pointer`}
        ></div>
        {isLogin ? (
          <div className="flex items-center">
            <div className="mr-[15px]">
              <div className=" text-sm text-[#212B36]">{user.name}</div>
              <div className="text-xs text-[#637381]">Frontend</div>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleLogout}
            >
              <div className="mr-2.5 w-[46px] h-[46px] rounded-full bg-white border border-stroke border-solid"></div>
              <div className="w-5 h-5 bg-barrDark bg-center bg-no-repeat"></div>
            </div>
          </div>
        ) : (
          <Link href="/signin">
            <div className="w-[2.125rem] h-[2.125rem] rounded-full bg-[#EFF4FB] bg-center bg-no-repeat bg-login cursor-pointer"></div>
          </Link>
        )}
      </div>
    </div>
  );
}
