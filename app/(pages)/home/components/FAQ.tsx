import { Container } from "@/components/shared/container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import faqData from "@/public/data/faq.json";
import Link from "next/link";

type Props = {};

export const FAQ = (props: Props) => {
	return (
		<section className="py-[50px] lg:py-[100px]">
			<Container>
				<div className="mx-auto flex max-w-xs flex-col text-center lg:max-w-full">
					<p className="text-red/50 mb-[20px] hidden text-[18px] font-[600] leading-[24px] md:block">
						FAQ
					</p>
					<h2 className="text-[32px] font-[700] leading-[38px] lg:text-[24px] lg:leading-[32px]">
						Frequently Asked Question
					</h2>
					<p className="mt-[16px] text-grey-2 lg:mt-[30px] lg:text-[14px] lg:leading-[22px]">
						Did you find the question as you expected?
					</p>
				</div>
				<Accordion type="single" collapsible defaultValue="item-1">
					<div className="mt-[24px] grid grid-cols-1 gap-[20px] lg:mt-[53px] lg:grid-cols-2">
						{faqData
							.sort((a, b) => a.order - b.order)
							.map((item, index) => (
								<AccordionItem
									value={`item-${item.id + 1}`}
									key={index}
									className="rounded-[18px] border-[2px] px-[24px] py-[10px]"
								>
									<AccordionTrigger className="pr-6 text-start text-[20px] font-[700] leading-[26px] text-black-2 hover:no-underline focus:no-underline">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="text-[18px] font-[600] leading-[32px] text-grey-2">
										{item.answer}
										<br />
										<Link
											href="#"
											className="mt-[20px] inline-block text-[16px] font-[700] leading-[21px] text-primary"
										>
											Read more
										</Link>
									</AccordionContent>
								</AccordionItem>
							))}
					</div>
				</Accordion>

				<div className="mt-[24px] text-center md:mt-[36px] lg:mt-[50px]">
					<Button size="xl" className="w-full md:w-auto">
						Give a Quote
					</Button>
				</div>
			</Container>
		</section>
	);
};
