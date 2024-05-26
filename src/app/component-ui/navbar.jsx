import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Image src="/Logo.svg" width={150} height={50} />
    </div>
  );
};

export default Navbar;
