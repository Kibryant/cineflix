"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	Zap,
	Shield,
	Tv,
	Smartphone,
	Globe,
	Clock,
	DollarSign,
	Server,
} from "lucide-react";

export function WhyCineflixSection() {
	const [activeTab, setActiveTab] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const element = document.getElementById("why-cineflix-section");
			if (element) {
				const position = element.getBoundingClientRect();
				if (position.top < window.innerHeight - 100) {
					setIsVisible(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTab((prev) => (prev + 1) % benefits.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const benefits = [
		{
			id: 1,
			title: "Tecnologia Avançada",
			description:
				"Utilizamos servidores de alta performance e tecnologia de streaming adaptativa que ajusta automaticamente a qualidade do vídeo com base na sua conexão, garantindo uma experiência sem interrupções.",
			icon: <Server className="w-10 h-10 text-red-600" />,
			stats: [
				{ value: "99.9%", label: "Uptime" },
				{ value: "0.5s", label: "Tempo de carregamento" },
			],
		},
		{
			id: 2,
			title: "Conteúdo Unificado",
			description:
				"Acesse o conteúdo de múltiplas plataformas em um único lugar, sem precisar alternar entre diferentes aplicativos ou pagar por várias assinaturas separadas.",
			icon: <Globe className="w-10 h-10 text-red-600" />,
			stats: [
				{ value: "+60.000", label: "Conteúdos" },
				{ value: "+2.000", label: "Canais" },
			],
		},
		{
			id: 3,
			title: "Compatibilidade Total",
			description:
				"Assista em qualquer dispositivo: Smart TVs, smartphones, tablets, computadores ou TV Box. Nossa plataforma é otimizada para funcionar perfeitamente em todos os aparelhos.",
			icon: <Tv className="w-10 h-10 text-red-600" />,
			stats: [
				{ value: "4K", label: "Qualidade máxima" },
				{ value: "4", label: "Telas simultâneas" },
			],
		},
		{
			id: 4,
			title: "Economia Real",
			description:
				"Por uma fração do custo de múltiplas assinaturas, você tem acesso a todo o conteúdo que deseja. Economize até 70% comparado à contratação individual de cada serviço.",
			icon: <DollarSign className="w-10 h-10 text-red-600" />,
			stats: [
				{ value: "70%", label: "Economia" },
				{ value: "R$34,00", label: "A partir de" },
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section
			id="why-cineflix-section"
			className="py-20 bg-gradient-to-b from-[#120303] to-black"
		>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
						Por que a <span className="text-red-600">CineFlix</span> é tão
						eficiente?
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Nossa plataforma foi desenvolvida com tecnologia de ponta para
						oferecer a melhor experiência de streaming possível, combinando
						qualidade, estabilidade e um vasto catálogo.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left side - Feature tabs */}
					<motion.div
						className="space-y-8"
						variants={containerVariants}
						initial="hidden"
						animate={isVisible ? "visible" : "hidden"}
					>
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.id}
								variants={itemVariants}
								className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${activeTab === index ? "bg-gradient-to-r from-red-900/30 to-black border-l-4 border-red-600 shadow-lg" : "hover:bg-black/30"}`}
								onClick={() => setActiveTab(index)}
							>
								<div className="flex items-start gap-4">
									<div
										className={`p-3 rounded-full ${activeTab === index ? "bg-red-900/30" : "bg-black/20"}`}
									>
										{benefit.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold text-white mb-2">
											{benefit.title}
										</h3>
										<p
											className={`text-sm transition-all duration-300 ${activeTab === index ? "text-gray-300 h-auto opacity-100" : "text-gray-500 h-0 opacity-0 overflow-hidden"}`}
										>
											{benefit.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Right side - Active feature details */}
					<motion.div
						className="bg-gradient-to-br from-black to-red-900/20 p-8 rounded-xl border border-red-900/30 shadow-xl"
						initial={{ opacity: 0, x: 50 }}
						animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<div className="flex justify-between items-start mb-6">
							<div>
								<h3 className="text-2xl font-bold text-white mb-2">
									{benefits[activeTab].title}
								</h3>
								<div className="h-1 w-20 bg-red-600 rounded-full" />
							</div>
							<div className="p-3 bg-red-900/30 rounded-full">
								{benefits[activeTab].icon}
							</div>
						</div>

						<p className="text-gray-300 mb-8">
							{benefits[activeTab].description}
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 gap-4">
							{benefits[activeTab].stats.map((stat, index) => (
								<div
									key={`stat-${index + 1}`}
									className="bg-black/50 p-4 rounded-lg border border-red-900/20"
								>
									<div className="text-3xl font-bold text-red-600">
										{stat.value}
									</div>
									<div className="text-sm text-gray-400">{stat.label}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Bottom features */}
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					{[
						{
							icon: <Zap className="w-6 h-6" />,
							title: "Rápido",
							description: "Carregamento instantâneo",
						},
						{
							icon: <Shield className="w-6 h-6" />,
							title: "Seguro",
							description: "Conexão protegida",
						},
						{
							icon: <Smartphone className="w-6 h-6" />,
							title: "Portátil",
							description: "Assista em qualquer lugar",
						},
						{
							icon: <Clock className="w-6 h-6" />,
							title: "Atualizado",
							description: "Conteúdo sempre recente",
						},
					].map((feature, index) => (
						<div
							key={`feature-${index + 1}`}
							className="bg-black/30 p-6 rounded-lg border border-gray-800 text-center hover:border-red-900/30 transition-all duration-300"
						>
							<div className="bg-gradient-to-br from-red-600 to-red-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
								{feature.icon}
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
