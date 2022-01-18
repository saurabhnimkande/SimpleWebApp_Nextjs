import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="red">
      <Link href="/">
        <span className="links">Homepage</span>
      </Link>
      <Link href="/about">
        <span className="links">About us</span>
      </Link>
      <Link href="/contact">
        <span className="links">Contact us</span>
      </Link>
      <Link href="/users">
        <span className="links">Users</span>
      </Link>
    </div>
  );
};
