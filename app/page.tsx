import Image from "next/image";
import HeroImage from "../assets/traveller.png";
import PostCard from "../assets/postcard.png";
import TouristImage from "../assets/tourist.jpeg";
export default function Home() {
	return (
		<main className="container max-w-screen-2xl w-screen flex bg-slate-100 flex-col min-h-screen justify-between md:items-start p-0">
			<div
				className="w-[95vw] flex mt-11 items-center md:justify-between mx-auto flex-col md:flex-row md:mt-[100px]"
				id="herosection"
			>
				<div className="md:max-w-[45%] md:min-h-[300px] flex items-start justify-center flex-col max-w-screen-md">
					<h1 className="font-nunito-xl max-w-[100%]">Verma Travels</h1>
					<h3 className="font-nunito-md max-w-[100%]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam
						sint incidunt optio dicta minima iusto placeat! Accusantium tempore
						porro, facere consectetur error dolorem veniam magnam similique
						deleniti fugit hic?
					</h3>
					<button className="font-nunito-md shadow-lg bg-sky-500 hover:bg-sky-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0">
						Explore Destinations
					</button>
				</div>
				<div className="md:max-w-[50%]  h-[400px] md:w-[50%] flex items-center justify-center">
					<Image
						src={HeroImage}
						alt="Hero Image"
						loading="lazy"
						className="object-cover"
						priority={false}
					></Image>
				</div>
			</div>
			<div
				id="whatwedo"
				className="w-[95vw] flex mt-11 items-center md:justify-between mx-auto flex-col-reverse md:flex-row md:mt-[100px]"
			>
				<div className="md:max-w-[50%] h-[400px] md:w-[50%] flex items-center justify-center">
					<Image
						src={PostCard}
						alt="Sub Hero Image"
						loading="lazy"
						className="object-cover h-[100%]"
					></Image>
				</div>
				<div className="md:max-w-[45%] md:min-h-[300px] flex items-start justify-center flex-col max-w-screen-md">
					<h1 className="font-nunito-xl max-w-[100%]">What we do?</h1>
					<h3 className="font-nunito-md max-w-[100%]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam
						sint incidunt optio dicta minima iusto placeat! Accusantium tempore
						porro, facere consectetur error dolorem veniam magnam similique
						deleniti fugit hic?
					</h3>
					<button className="font-nunito-md shadow-lg bg-sky-500 hover:bg-sky-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0">
						Contact Us
					</button>
				</div>
			</div>
			<div
				id="explore"
				className="flex mt-[100px] items-center justify-center flex-col md:w-[100vw] w-screen p-2 md:p-8"
			>
				<h1 className="font-nunito-xl text-center">Explore our trips</h1>
				<div className="flex flex-wrap justify-evenly w-[100%] flex-col md:flex-row">
					<div className="relative isolate flex flex-col justify-end overflow-hidden aspect-square  rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 md:w-[45%] cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
						<Image
							src={TouristImage}
							alt="University of Southern California"
							className="absolute inset-0 h-full w-full object-cover"
						></Image>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
						<h3 className="z-10 mt-3 text-3xl font-bold text-white">
							Himachal Pradesh
						</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Sub text
						</div>
					</div>
					<div className="relative isolate flex flex-col justify-end overflow-hidden aspect-square  rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 md:w-[45%] cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
						<Image
							src={TouristImage}
							alt="University of Southern California"
							className="absolute inset-0 h-full w-full object-cover"
						></Image>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
						<h3 className="z-10 mt-3 text-3xl font-bold text-white">
							Himachal Pradesh
						</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Sub text
						</div>
					</div>
					<div className="relative isolate flex flex-col justify-end overflow-hidden aspect-square  rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 md:w-[45%] cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
						<Image
							src={TouristImage}
							alt="University of Southern California"
							className="absolute inset-0 h-full w-full object-cover"
						></Image>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
						<h3 className="z-10 mt-3 text-3xl font-bold text-white">
							Himachal Pradesh
						</h3>
						<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							Sub text
						</div>
					</div>
				</div>
			</div>
			<div
				id="exploreDestination"
				className="flex mt-[20px] md:mt-[100px] items-center justify-center flex-col md:w-[100vw] w-screen p-2 md:p-8 mb-[20px]"
			>
				<h1 className="font-nunito-xl max-w-[100%] text-center">
					Discover North India with Verma Travels
				</h1>
				<button className="font-nunito-md shadow-lg bg-sky-500 hover:bg-sky-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0">
					Plan your trip now
				</button>
			</div>
			<div className="flex mt-[20px] md:mt-[40px] mb-[20px] items-center w-screen justify-evenly flex-nowrap flex-col md:flex-row gap-2">
				<div className="w-screen md:w-[30%] md:m-0 mt-[10px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
					<div className="px-4 py-6">
						<h2 className="text-2xl font-bold text-gray-800 text-center">
							Basic
						</h2>
						<p className="text-gray-600 text-center mt-2">
							Perfect for individuals
						</p>
						<div className="mt-6">
							<p className="text-5xl text-center font-semibold">$9</p>
							<p className="text-gray-600 text-center">per month</p>
						</div>
					</div>
					<div className="px-4 py-4 bg-gray-100">
						<ul className="text-sm text-gray-600">
							<li className="flex items-center">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								Unlimited Access
							</li>
							<li className="flex items-center mt-3">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								24/7 Support
							</li>
							<li className="flex items-center mt-3">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								Monthly Updates
							</li>
						</ul>
						<button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
							Plan
						</button>
					</div>
				</div>
				<div className="w-screen md:w-[30%] md:m-0 mt-[10px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
					<div className="px-4 py-6">
						<h2 className="text-2xl font-bold text-gray-800 text-center">
							Basic
						</h2>
						<p className="text-gray-600 text-center mt-2">
							Perfect for individuals
						</p>
						<div className="mt-6">
							<p className="text-5xl text-center font-semibold">$9</p>
							<p className="text-gray-600 text-center">per month</p>
						</div>
					</div>
					<div className="px-4 py-4 bg-gray-100">
						<ul className="text-sm text-gray-600">
							<li className="flex items-center">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								Unlimited Access
							</li>
							<li className="flex items-center mt-3">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								24/7 Support
							</li>
							<li className="flex items-center mt-3">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								Monthly Updates
							</li>
						</ul>
						<button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
							Plan
						</button>
					</div>
				</div>
				<div className="w-screen md:w-[30%] md:m-0 mt-[10px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
					<div className="px-4 py-6">
						<h2 className="text-2xl font-bold text-gray-800 text-center">
							Basic
						</h2>
						<p className="text-gray-600 text-center mt-2">
							Perfect for individuals
						</p>
						<div className="mt-6">
							<p className="text-5xl text-center font-semibold">$9</p>
							<p className="text-gray-600 text-center">per month</p>
						</div>
					</div>
					<div className="px-4 py-4 bg-gray-100">
						<ul className="text-sm text-gray-600">
							<li className="flex items-center">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								Unlimited Access
							</li>
							<li className="flex items-center mt-3">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								24/7 Support
							</li>
							<li className="flex items-center mt-3">
								<svg
									className="w-4 h-4 mr-2 fill-current text-green-500"
									viewBox="0 0 20 20"
								>
									<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
								</svg>
								Monthly Updates
							</li>
						</ul>
						<button className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
							Plan
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
