import { UserCard } from "@/components/atoms/UserCard";
import { Container } from "@/components/shared/container";
import { randomNumber } from "@/lib/utils";
import testimonialsData from "@/public/data/testimonials.json";
import { IoStar } from "react-icons/io5";

type Props = {};

export const Testimonials = (props: Props) => {
	const pickedTestimonial =
		testimonialsData[randomNumber(0, testimonialsData.length - 1)];

	return (
		<section className="bg-[#FFEEEE] py-[50px]">
			<Container>
				<h2 className="text-center text-[32px] font-[700] leading-[38px] lg:text-[48px] lg:leading-[58px]">
					Customer Testimonials
				</h2>
				<div className="mx-auto mt-[24px] flex max-w-screen-md flex-col text-center lg:mt-[50px]">
					<div className="flex items-center justify-center gap-[4px]">
						{Array(pickedTestimonial.rating)
							.fill(0)
							.map((_, index) => (
								<IoStar size={20} />
							))}
					</div>
					<p className="mt-[24px] text-center text-[24px] font-[700] leading-[34px] lg:mt-[32px]">
						{pickedTestimonial.comment}
					</p>
					<UserCard
						avatar={pickedTestimonial.avatar}
						name={pickedTestimonial.name}
						position={pickedTestimonial.position}
						className="mx-auto mt-[24px] lg:mt-[32px]"
					/>
				</div>
			</Container>
		</section>
	);
};
