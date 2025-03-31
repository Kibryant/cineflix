import Image from "next/image";
import { PricingSection } from "@/components/pricing-section";
import { ButtonCta } from "@/components/button-cta";
import { GuaranteeSection } from "@/components/guarantee-section";
import { ThumbnailsSection } from "@/components/thumbnails-section";
import { WhyCineflixSection } from "@/components/why-cineflix-section";
import { AppShowcaseSection } from "@/components/app-showcase-section";

export default function Inicio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="bg-red-600 py-3 text-center text-white font-medium">
				Compra aprovada na mesma hora para pagamentos por PIX ou CARTÃO.
			</div>

			<main className="py-12">
				<section className="container mx-auto px-4 py-16">
					<div className="flex flex-col md:flex-row items-center justify-between mb-16">
						<div className="flex items-center gap-4 mb-8 md:mb-0">
							<div className="relative w-16 h-16 md:w-20 md:h-20">
								<Image
									src="/logo.png?height=80&width=80"
									alt="Cineflix Logo"
									width={80}
									height={80}
									className="object-contain"
								/>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold tracking-wider">
								CINEFLIX
							</h1>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8 items-center mb-24">
						<div className="space-y-6">
							<div>
								<h2 className="text-4xl md:text-5xl font-bold mb-2">
									CONTEÚDO ILIMITADO POR
								</h2>
								<div className="bg-white text-red-600 p-1 inline-block text-4xl md:text-5xl font-bold">
									UM VALOR QUE CABE NO SEU BOLSO!
								</div>
							</div>

							<p className="text-lg">
								Tenha acesso a mais de 2 mil canais, incluindo Netflix, Disney+,
								HBO Max e mais, por um preço acessível! Com a CineFlick, você
								economiza e assiste com qualidade, estabilidade e suporte
								dedicado.
							</p>

							<ButtonCta href="#precos" showBadge={false} />
						</div>

						<div className="relative">
							<div className="relative h-[400px]">
								<Image
									src="/mockup.webp?height=400&width=600"
									alt="Streaming devices mockup"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</section>

				<WhyCineflixSection />

				<ThumbnailsSection />

				<AppShowcaseSection />

				<PricingSection />

				<GuaranteeSection />
			</main>
		</div>
	);
}
