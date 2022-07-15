import { FC } from 'react'
import './styles.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import slide1Path from 'src/assets/static/slide1.jpg'
import slide2Path from 'src/assets/static/slide2.jpg'
import slide3Path from 'src/assets/static/slide3.jpg'

const Carousel: FC = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination, Navigation]}
      className="swiper"
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src={slide1Path} alt="Slide 1 do evento" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slide2Path} alt="Slide 2 do evento" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slide3Path} alt="Slide 3 do evento" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
