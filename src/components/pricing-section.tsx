import { PricingCard } from "./pricing-card";

const plans = [
	{
		name: "MENSAL",
		originalPrice: "R$ 49,90",
		price: "R$ 34,00",
		discount: "32%",
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
		href: "https://pay.kirvano.com/fd5370cc-b5cd-4c95-9ac6-6e1bccfafb5b?aff=4329d5ae-c221-405a-ba7c-d5e4bd8ca443",
	},
	{
		name: "TRIMESTRAL",
		originalPrice: "R$ 88,00",
		price: "R$ 59,90",
		discount: "32%",
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
		href: "https://pay.kirvano.com/e0dd0498-3c81-4249-b14e-f3eee05927e7?aff=4329d5ae-c221-405a-ba7c-d5e4bd8ca443",
	},
	{
		name: "ANUAL",
		originalPrice: "R$ 300,00",
		price: "R$ 187,90",
		discount: "37%",
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
		href: "https://pay.kirvano.com/8161e619-071a-4d9f-a073-5d86e2664cbe?aff=4329d5ae-c221-405a-ba7c-d5e4bd8ca443",
	},
];

export function PricingSection() {
	return (
		<section
			className="py-16 bg-gradient-to-b from-[#120303] to-black"
			id="precos"
		>
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
                            href={plan.href}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
