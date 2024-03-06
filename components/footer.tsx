"use client";
import React, { FormEvent } from "react";
const Footer = () => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	return (
		<>
			<main
				id="contact"
				className="container max-w-screen-2xl w-screen flex  flex-col justify-between items-center md:items-start
        bg-slate-100 pt-[10px] mb-[20px]"
			>
				<div className="w-[95vw] flex flex-col md:flex-row items-strech justify-between mx-auto">
					<form
						className="max-w-md bg-white p-6  rounded-lg shadow-md flex flex-col w-full mb-[20px] md:w-[45%]"
						onSubmit={handleSubmit}
					>
						<h1 className="text-2xl font-bold mb-4 text-black font-nunito-lg">
							Contact Us
						</h1>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-semibold text-gray-600"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								aria-required
								autoComplete="name"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
							></input>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-600"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								required
								aria-required
								autoComplete="email"
								name="email"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
							></input>
						</div>
						<div className="mb-4">
							<label
								htmlFor="phoneNumber"
								className="block text-sm font-semibold text-gray-600"
							>
								Whatsapp No.
							</label>
							<input
								type="text"
								id="phoneNumber"
								name="phoneNumber"
								autoComplete="tel"
								required
								aria-required
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
							></input>
						</div>
						<input
							type="submit"
							className="w-full px-4 py-2 mt-2 font-nunito-md text-white bg-sky-500 hover:bg-sky-600 rounded-md shadow-lg"
						/>
					</form>
					<div className="w-full md:w-[50%] rounded flex items-center justify-center bg-white shadow-lg p-2">
						<iframe
							height="400"
							frameBorder="0"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.310540782229!2d-122.41941588474369!3d37.774929079753954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085805c8021dd67%3A0x7a9b5ceee65d8091!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1645953462566!5m2!1sen!2sus"
							allowFullScreen
							loading="lazy"
							className="w-full"
						></iframe>
					</div>
				</div>
			</main>
			<footer className="bg-gray-800 text-white p-4">
				<div className="max-w-xl mx-auto text-center">
					<p>&copy; 2024 Verma Travels. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
