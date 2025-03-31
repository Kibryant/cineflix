import { PricingCard } from "./pricing-card";

const plans = [
	{
		name: "MENSAL",
		price: "R$ 19,90",
		features: [
			"Use 3 telas simultaneamente",
			"Mais de 60.000 conteúdos",
			"Qualidade SD/HD/FHD/4k",
			"Guia de Programação [EPG]",
			"Assista no Smartphone/Tablet",
			"Assista no TV Box/Chromecast",
			"Assista na Smart TV",
			"Assista no Computador",
			"Programação Adultos [Opcional]",
			"Pacote Filmes e Série",
		],
        discount: "33%",
        originalPrice: "R$ 29,90",
	},
	{
		name: "TRIMESTRAL",
		price: "R$ 39,90",
		features: [
			"Use 3 telas simultaneamente",
			"Mais de 60.000 conteúdos",
			"Qualidade SD/HD/FHD/4k",
			"Guia de Programação [EPG]",
			"Assista no Smartphone/Tablet",
			"Assista no TV Box/Chromecast",
			"Assista na Smart TV",
			"Assista no Computador",
			"Programação Adultos [Opcional]",
			"Pacote Filmes e Série",
		],
        discount: "33%",
        originalPrice: "R$ 59,70",
	},
	{
		name: "ANUAL",
		price: "R$ 99,90",
		features: [
			"Use 4 telas simultaneamente",
			"Mais de 60.000 conteúdos",
			"Qualidade SD/HD/FHD/4k",
			"Guia de Programação [EPG]",
			"Assista no Smartphone/Tablet",
			"Assista no TV Box/Chromecast",
			"Assista na Smart TV",
			"Assista no Computador",
			"Programação Adultos [Opcional]",
			"Pacote Filmes e Série",
		],
        originalPrice: "R$ 185,70",
        discount: "46%",
	},
];

export function PricingSection() {
	return (
		<section className="py-16 bg-[#1e0000]" id="precos">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
					Aproveite essa oportunidade e assine já!
				</h2>

				<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
					{plans.map((plan, index) => (
						<PricingCard
							key={`${plan.name}-${index + 1}`}
							name={plan.name}
							price={plan.price}
							features={plan.features}
                            originalPrice={plan.originalPrice}
                            discount={plan.discount}
                            isHighlighted={plan.name === "ANUAL"}                            
						/>
					))}
				</div>
			</div>
		</section>
	);
}
