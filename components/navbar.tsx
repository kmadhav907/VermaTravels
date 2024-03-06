import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImgage from "../assets/flight.png";

const Navbar = () => {
	return (
		<nav className="w-screen z-20 flex justify-between items-center px-1 py-2 h-[64px] sticky top-0 bg-orange-100 shadow-lg md:px-2 md:py-4">
			<Link
				href="/"
				className="font-nunito-lg font-black px-2 md:px-5 flex items-center gap-2"
			>
				<Image
					src={LogoImgage}
					className="w-[48px]"
					loading="lazy"
					alt="verma-travels-icon"
				></Image>
				Verma Travels
			</Link>
			<div className="flex gap-4 px-4">
				<Link
					href="#explore"
					className="font-nunito-md"
				>
					Explore
				</Link>
				<Link
					href="#contact"
					className="font-nunito-md"
				>
					Contact us
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
