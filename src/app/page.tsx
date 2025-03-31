"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ButtonCta } from "@/components/button-cta";
import { motion } from "framer-motion";

export default function LandingPage() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoEnded, setVideoEnded] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (videoEnded) {
			router.push("/inicio");
		}
	}, [videoEnded, router]);

	const handleVideoEnd = () => {
		setVideoEnded(true);
	};

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			const timeRemaining =
				videoRef.current.duration - videoRef.current.currentTime;

			if (timeRemaining <= 10 && !showButton) {
				setShowButton(true);
			}
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100 },
		},
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-black to-[#120303] flex flex-col items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 overflow-hidden">
					{[...Array(20)].map((_, i) => (
						<div
							key={`bubble-${i + 1}`}
							className="absolute rounded-full bg-red-600/20"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								width: `${Math.random() * 10 + 2}px`,
								height: `${Math.random() * 10 + 2}px`,
								opacity: Math.random() * 0.5 + 0.1,
								animation: `float ${Math.random() * 10 + 10}s linear infinite`,
								animationDelay: `${Math.random() * 5}s`,
							}}
						/>
					))}
				</div>

				<div className="absolute inset-0 opacity-20">
					<video
						autoPlay
						muted
						loop
						className="w-full h-full object-cover"
						src="/placeholder.mp4"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
				</div>
			</div>

			<motion.div
				className="z-10 text-center px-4 max-w-5xl w-full"
				variants={containerVariants}
				initial="hidden"
				animate={isLoaded ? "visible" : "hidden"}
			>
				<motion.div className="mb-8 relative" variants={itemVariants}>
					<Image
						src="/logo.png?width=300&height=100"
						alt="CinneFlix Logo"
						width={200}
						height={100}
						className="mx-auto relative z-10"
					/>
				</motion.div>

				<motion.h1
					className="text-red-600 text-3xl md:text-5xl font-bold mb-6 tracking-tight relative inline-block"
					variants={itemVariants}
				>
					APLICATIVO PARA FILMES
					<span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800 transform origin-left" />
				</motion.h1>

				<motion.div
					className="flex items-center justify-center gap-3 mb-12"
					variants={itemVariants}
				>
					<h2 className="text-white text-2xl md:text-4xl font-medium">
						Liberado com sucesso
					</h2>
					<div className="bg-gradient-to-br from-red-500 to-red-700 rounded-full p-1.5 shadow-lg shadow-red-600/30">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-white"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<title>Checkmark</title>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</motion.div>

				<motion.div
					className="relative w-full max-w-4xl mx-auto mb-12"
					variants={itemVariants}
				>
					<div className="relative rounded-lg overflow-hidden shadow-2xl border border-red-800/50">
						{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
						<video
							ref={videoRef}
							controls
							autoPlay
							className="w-full aspect-video bg-black"
							onEnded={handleVideoEnd}
							onTimeUpdate={handleTimeUpdate}
							src="/introduction.mp4"
						/>
					</div>
				</motion.div>

				<div className="pb-20 pt-6">
					<ButtonCta href="/inicio" />
				</div>
			</motion.div>

			<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-0" />
		</div>
	);
}
