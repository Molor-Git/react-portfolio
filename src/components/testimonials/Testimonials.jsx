import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Fintechtocat.png";
import AVTR2 from "../../assets/ninja.png";
import AVTR3 from "../../assets/filmtocat.png";
import AVTR4 from "../../assets/skatetocat.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import "swiper/css/navigation";
import 'swiper/css/pagination';
// import "swiper/css/scrollbar";

const data = [
	{
		avatar: AVTR1,
		name: "FintechToCat",
		review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo amet ducimus labore, recusandae beatae reprehenderit voluptatibus facere alias cumque! Provident fugiat necessitatibus corporis a fugit consequuntur impedit eum non laudantium!'
	},
	{
		avatar: AVTR2,
		name: "Ninja",
		review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo amet ducimus labore, recusandae beatae reprehenderit voluptatibus facere alias cumque! Provident fugiat necessitatibus corporis a fugit consequuntur impedit eum non laudantium!'
	},
	{
		avatar: AVTR3,
		name: "FilmToCat",
		review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo amet ducimus labore, recusandae beatae reprehenderit voluptatibus facere alias cumque! Provident fugiat necessitatibus corporis a fugit consequuntur impedit eum non laudantium!'
	},
	{
		avatar: AVTR4,
		name: "SkateToCat",
		review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo amet ducimus labore, recusandae beatae reprehenderit voluptatibus facere alias cumque! Provident fugiat necessitatibus corporis a fugit consequuntur impedit eum non laudantium!'
	},
	
];

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[ Pagination ]}
				spaceBetween={40}
				slidesPerView={1}
				// navigation
				pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
				>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="Avatar One" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
