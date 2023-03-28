import Link from 'next/link';
import React from 'react';

const TheHeader = () => {
  return (
    <header
      className="ml-auto mr-auto border-solid border-b-2 border-b-white p-10"
      style={{ maxWidth: '1150px' }}
    >
      <div className="flex items-center justify-between">
        <Link href={'/'} className="text-white font-poppins font-bold text-3xl">
          Nike-air.io
        </Link>
        <Link
          href={'/'}
          className="text-base text-white text-center font-poppins font-bold p-4 border-solid border-2 min-w-[200px]   border-[#8257E5] rounded-md"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
};

export default TheHeader;
