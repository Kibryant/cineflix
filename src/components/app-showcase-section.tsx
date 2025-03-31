"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react";

export function AppShowcaseSection() {
	const [isVisible, setIsVisible] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const element = document.getElementById("app-showcase-section");
			if (element) {
				const position = element.getBoundingClientRect();
				if (position.top < window.innerHeight - 100) {
					setIsVisible(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check on initial load

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	const openFullscreen = () => {
		if (videoRef.current) {
			if (videoRef.current.requestFullscreen) {
				videoRef.current.requestFullscreen();
			}
		}
	};

	const features = [
		"Interface intuitiva e fácil de navegar",
		"Catálogo organizado por categorias",
		"Recomendações personalizadas",
		"Player de vídeo de alta performance",
		"Controles avançados de reprodução",
		"Perfis para diferentes membros da família",
	];

	return (
		<section
			id="app-showcase-section"
			className="py-20 bg-gradient-to-b from-black to-[#120303]"
		>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
						Como é o <span className="text-red-600">CineFlix</span> por dentro
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Assista ao vídeo abaixo para conhecer a interface e as
						funcionalidades que tornam a experiência de streaming mais agradável
						e eficiente.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 items-center">
					{/* Left side - Features list */}
					<motion.div
						className="md:col-span-1"
						initial={{ opacity: 0, x: -30 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="bg-gradient-to-br from-black to-red-900/10 p-6 rounded-xl border border-red-900/20">
							<h3 className="text-xl font-bold text-white mb-4 flex items-center">
								<span className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">
									<Play className="w-4 h-4 text-white" />
								</span>
								Destaques do App
							</h3>

							<ul className="space-y-3">
								{features.map((feature, index) => (
									<li
										key={`feature-${index + 1}`}
										className="flex items-start gap-2"
									>
										<div className="min-w-5 h-5 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-3 w-3 text-white"
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
										<span className="text-gray-300">{feature}</span>
									</li>
								))}
							</ul>

							<div className="mt-6 p-4 bg-black/50 rounded-lg border border-red-900/10">
								<p className="text-gray-400 text-sm italic">
									&quot;O CineFlix oferece uma experiência de usuário
									excepcional, com navegação fluida e acesso rápido a todo o
									conteúdo que você deseja assistir.&quot;
								</p>
								<div className="mt-2 flex items-center">
									<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
										A
									</div>
									<div className="ml-2">
										<div className="text-white text-sm font-medium">Ana C.</div>
										<div className="text-gray-500 text-xs">
											Usuária desde 2022
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right side - Video player */}
					<motion.div
						className="md:col-span-2 relative"
						initial={{ opacity: 0, y: 30 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
							{/* Actual video */}
							{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<video
								ref={videoRef}
								className="w-full aspect-video bg-black"
								poster="/showcase.mp4?height=500&width=800&text=App_Demo"
								onPlay={() => setIsPlaying(true)}
								onPause={() => setIsPlaying(false)}
								onClick={togglePlay}
							>
								<source src="/showcase.mp4" type="video/mp4" />
								Seu navegador não suporta vídeos HTML5.
							</video>

							{/* Custom video controls */}
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center gap-3">
								<button
									type="button"
									onClick={togglePlay}
									className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors"
								>
									{isPlaying ? (
										<Pause className="w-5 h-5 text-white" />
									) : (
										<Play className="w-5 h-5 text-white" />
									)}
								</button>

								<div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
									<div className="h-full bg-red-600 w-[30%]" />
								</div>

								<button
									type="button"
									onClick={toggleMute}
									className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors"
								>
									{isMuted ? (
										<VolumeX className="w-4 h-4 text-white" />
									) : (
										<Volume2 className="w-4 h-4 text-white" />
									)}
								</button>

								<button
									type="button"
									onClick={openFullscreen}
									className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors"
								>
									<Maximize className="w-4 h-4 text-white" />
								</button>
							</div>
						</div>

						<div className="mt-4 text-center">
							<p className="text-gray-400 text-sm">
								Clique no vídeo para reproduzir/pausar ou use os controles
								abaixo do player.
							</p>
						</div>
					</motion.div>
				</div>

				{/* App features */}
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					{[
						{
							number: "01",
							title: "Navegação",
							description: "Interface intuitiva e responsiva",
						},
						{
							number: "02",
							title: "Conteúdo",
							description: "Organizado e fácil de encontrar",
						},
						{
							number: "03",
							title: "Reprodução",
							description: "Streaming de alta qualidade",
						},
						{
							number: "04",
							title: "Personalização",
							description: "Adaptado às suas preferências",
						},
					].map((feature, index) => (
						<div
							key={`feature-${index + 1}`}
							className="bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-red-900/30 transition-all duration-300"
						>
							<div className="text-2xl font-bold text-red-600 mb-2">
								{feature.number}
							</div>
							<h3 className="text-lg font-bold text-white mb-1">
								{feature.title}
							</h3>
							<p className="text-sm text-gray-400">{feature.description}</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
