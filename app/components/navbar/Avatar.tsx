'use client';

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
          src="/images/user.png"
          alt="avatar"
      className="md:block cursor-pointer rounded-full"
      width="30"
      height="30"
    />
  );
}

export default Avatar