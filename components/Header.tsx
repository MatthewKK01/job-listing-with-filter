import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="-z-10">
      <picture className="bg-red-50">
        <source
          media="(min-width: 418px)"
          className="w-full "
          srcSet="/bg-header-desktop.svg"
        />
        <Image
          src="/bg-header-mobile.svg"
          className="w-full bg-[#5CA5A5]"
          width={375}
          height={156}
          alt="Background"
        />
      </picture>
    </header>
  );
}

export default Header;
