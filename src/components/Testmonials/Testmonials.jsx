import React from 'react';
import './Testmonials.css';
import AVT1 from '../../assets/me.jpg'; // Replace with the actual avatar image URL
import AVT2 from '../../assets/me.jpg'; // Replace with the actual avatar image URL
import AVT3 from '../../assets/me.jpg'; // Replace with the actual avatar image URL
import AVT4 from '../../assets/me.jpg'; 


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVT1, // Use the imported image variable
    name: "Tina Snow",
    review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
  },
  {
    avatar: AVT2, // Use the imported image variable
    name: "John Doe",
    review: "Another review goes here...",
  },
  {
    avatar: AVT3, // Use the imported image variable
    name: "Jane Smith",
    review: "Yet another review...",
  },
  {
    avatar: AVT4, // Use the imported image variable
    name: "Tom Johnson",
    review: "And another review...",
  },
];




const Testmonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'>

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}  />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}
                </small>
              </SwiperSlide>
            )
          })
        }
        <section id='testimonials'>
      <h5>Swipe -> </h5>
      </section>
      </Swiper>
    </section>
  )
}

export default Testmonials