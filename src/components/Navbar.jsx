import {useState} from "react";
import Ikimage from "./Image.jsx";
import {Link} from "react-router";
import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO START */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Ikimage
                src="https://ik.imagekit.io/a4sr5knjy/logo.png"
                w="32"
                h="32"
                alt="Logo"
              />
                <span>zenlog</span>
            </Link>
            {/* LOGO END */}

            {/* MOBILE MENU START */}
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() =>setOpen((prev) => !prev) }>
                    {open ? "X" : "Ξ"}
                </div>
                {/* MOBILE MENU LIST START */}
                <div className={`w-full h-screen flex flex-col justify-center items-center gap-8 font-medium text-lg absolute top-16 bg-main transition-all ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                </div>
                {/* MOBILE MENU LIST START */}
            </div>
            {/* MOBILE MENU END */}

            {/* DESKTOP MENU START */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            {/* DESKTOP MENU END */}

        </div>
    )
}
export default Navbar
