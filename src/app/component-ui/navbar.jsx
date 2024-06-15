import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Image alt="app-logo" src="/Logo.svg" width={150} height={50} />
      <section>
        <RxAvatar size={30} />
      </section>
    </div>
  );
};

export default Navbar;
