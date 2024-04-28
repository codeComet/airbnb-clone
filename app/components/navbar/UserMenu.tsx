"use client";

import React, {useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure
} from "@nextui-org/react";
import AuthModal from "../modal/AuthModal";



const UserMenu = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [modalType, setModalType] = useState('');

   const handleButtonClick = (type: string) => {
     setModalType(type);
     onOpen();
   };
  
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block border-[1px] text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          List your property
        </div>
        <Dropdown>
          <DropdownTrigger>
            <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
              <AiOutlineMenu />
              <div className="hidden md:block">
                <Avatar />
              </div>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" className="flex flex-col">
            <DropdownItem key="login" onClick={() => handleButtonClick('login')}>
              Login
            </DropdownItem>
            <DropdownItem key="signup" onClick={() => handleButtonClick('signup')}>Signup</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} modalType={modalType} />
    </div>
  );
};

export default UserMenu;
