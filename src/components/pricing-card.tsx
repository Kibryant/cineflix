"use client";

import { useState } from "react";
import { Gift } from "lucide-react";

interface PricingCardProps {
	name: string;
	price: string;
	features: string[];
	originalPrice?: string;
	discount?: string;
	isHighlighted?: boolean;
	screens?: string;
	href: string;
}

export function PricingCard({
	name,
	price,
	features,
	originalPrice,
	discount,
	isHighlighted = false,
	href,
}: PricingCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`border border-red-600 rounded-lg overflow-hidden ${isHighlighted ? "bg-[#FFF1F1]" : "bg-[#120303]"}`}
		>
			<div className="p-4 text-center">
				<p
					className={`text-lg tracking-widest ${isHighlighted ? "text-black" : "text-white"}`}
				>
					P L A N O
				</p>
				<h3 className="text-red-600 text-4xl font-bold">{name}</h3>
			</div>

			<div className="p-6 space-y-3 border-t border-red-600">
				{features.map((feature, index) => (
					<div
						key={`${feature}-${index + 1}`}
						className="flex items-start gap-2"
					>
						<div className="min-w-5 h-5 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<title>Check icon</title>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<span
							className={`text-sm ${isHighlighted ? "text-black" : "text-white"}`}
						>
							{feature}
						</span>
					</div>
				))}
			</div>

			<div className="p-6 text-center">
				{discount && (
					<div className="mb-4">
						<div
							className={`inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg ${isHighlighted ? "bg-white border border-red-600" : "bg-white"}`}
						>
							<Gift className="h-5 w-5 text-red-600" />
							<span className="text-red-600 font-bold">
								{discount} DE DESCONTO
							</span>
						</div>
					</div>
				)}

				{originalPrice && (
					<div
						className={`text-sm mb-2 line-through ${isHighlighted ? "text-black" : "text-white"}`}
					>
						De {originalPrice} por apenas:
					</div>
				)}

				<div className="text-red-600 text-5xl font-bold mb-6">{price}</div>

				<a
					href={href}
					className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg transform transition-all duration-300 ease-out"
					style={{
						boxShadow: isHovered
							? "0 0 30px rgba(255, 0, 0, 0.6)"
							: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="relative flex items-center gap-2">
						<span
							className={`transition-all duration-300 ${isHovered ? "tracking-wider" : ""}`}
						>
							COMPRAR AGORA
						</span>
					</div>

					<div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
						<div
							className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[45deg] transform transition-all duration-700 ease-out opacity-30 ${isHovered ? "left-full" : "-left-full"}`}
						/>
					</div>
				</a>
			</div>
		</div>
	);
}
