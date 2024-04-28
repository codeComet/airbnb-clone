import Container from "@/app/components/Container";
import Link from "next/link";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full shadow-sm z-10 bg-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <div className="text-2xl font-bold text-rose-500">
              <Link href="/">StayHub</Link>
            </div>
            <Search />
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
