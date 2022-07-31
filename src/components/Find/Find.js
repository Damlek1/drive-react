import React from 'react'
import styles from './Find.module.css'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import Audi from '../../images/Audi.avif'
import BMW from '../../images/BMW.avif'
import Cheverolet from '../../images/Cheverolet.avif'
import Mercedes from '../../images/Benz.avif'
import Nissan from '../../images/Nissan.avif'
import Toyota from '../../images/Toyota.avif'
import Jeep from '../../images/Jeep.avif'
import Ford from '../../images/Ford.avif'
import Tesla from '../../images/Tesla.avif'
import Porshe from '../../images/Porshe.avif'




const Find = () => {

  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find your drive</h1>
            <div className={styles.text_bg}>
                <p>
                    <span>Explore the world's largest car sharing marketplace</span>
                </p>
            </div>
        </div>
        <div className={styles.slider_container}>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        Pagination ={{ clickable: true }}
        navigation
        autoplay={true}
        breakpoints={{
        340: {
            width: 200,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
          // when window width is >= 1040px
          1040: {
            width: 1040,
            slidesPerView: 5,
          },
      }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

            <SwiperSlide>
            <Card
              image={Audi}
              make='Audi'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={BMW}
              make='BMW'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Cheverolet}
              make='Cheverolet'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Mercedes}
              make='Mercedes-Benz'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Nissan}
              make='Nissan'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Toyota}
              make='Toyota'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Jeep}
              make='Jeep'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Ford}
              make='Ford'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Tesla}
              make='Tesla'
            />
          </SwiperSlide>
            <SwiperSlide>
            <Card
              image={Porshe}
              make='Porshe'
            />
          </SwiperSlide>
    </Swiper>
        </div>
    </div>
  )
}

export default Find