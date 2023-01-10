import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

//Import images
import WorkImg from '../../../../assets/img/portfolio/1.jpg';

//
import { project } from '../../../../config';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

//Component
import WorkCard from '../../../ui/work-card';
export default function Work() {
	
	return (
		<section id="portfolio">
			<div className="container">
				<div className="roww">
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">Portfolio</h3>
						<h3 className="title">Featured Projects</h3>
					</div>
				</div>
			</div>

			<div className="container noright">
				<div className="roww">
					<div className='wrapper'>	
						<Swiper
							slidesPerView={3}
							spaceBetween={30}
							modules={[Navigation, Autoplay]}
							className="mySwiper"
							navigation={true}
						>
						{project.map(project => (
							<SwiperSlide>
								<WorkCard project={project}/>
							</SwiperSlide>
						))}
						</Swiper>
					</div>
				</div>
			</div>

		</section>
	)
}
