"use client";

import { useState } from "react";
import Link from "next/link";

interface ButtonCtaProps {
	href: string;
	showBadge?: boolean;
}

export function ButtonCta({ href, showBadge = true }: ButtonCtaProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="relative group">
			<Link
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
						ADQUIRA O SEU AGORA
					</span>
				</div>

				<div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
					<div
						className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[45deg] transform transition-all duration-700 ease-out opacity-30 ${isHovered ? "left-full" : "-left-full"}`}
					/>
				</div>
			</Link>

			{showBadge && (
				<div
					className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-lg whitespace-nowrap transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
				>
					Oferta por tempo limitado!
				</div>
			)}
		</div>
	);
}
