import { ButtonCta } from "./button-cta";
import Image from "next/image";

export function GuaranteeSection() {
	return (
		<section id="guarantee-section" className="py-16">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[300px] md:h-[300px] lg:h-[400px]">
                        <Image
                            src="/guarantee.webp?height=600&width=400"
                            alt="Streaming devices mockup"
                            className="object-contain w-full h-full"
                            height={400}
                            width={200}
                        />
                    </div>
					<div className="text-white space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold leading-tight">
							<span className="text-red-600">
								Experimente sem riscos por 7 dias
							</span>{" "}
							e só então decida se quer continuar
						</h2>

						<p className="text-lg">
							Sem letras miúdas no contrato: você pode experimentar a CineFlick
							e todos os conteúdos dela{" "}
							<span className="font-bold">durante 7 dias</span>.
						</p>

						<p className="text-lg">
							Se dentro desse período você decidir não continuar com a{" "}
							<span className="font-bold">CineFlick</span>, por qualquer motivo
							que seja, é só entrar em contato e nós devolveremos todo o seu
							dinheiro – sem fazer nenhuma pergunta.
						</p>

						<p className="text-xl font-bold">
							A partir de agora, você não tem nada a perder.
						</p>

						<div className="pt-4">
                            <ButtonCta href="#precos" showBadge={false} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
