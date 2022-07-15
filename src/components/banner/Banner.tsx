import { FC } from 'react'
import './styles.scss'

import bannerPath from 'src/assets/static/banner-min.png'
import { ReactComponent as IconTransparency } from 'src/assets/static/logo-transparency.svg'

const Banner: FC = () => {
  return (
    <div className="banner">
      <img src={bannerPath} alt="Festival musical" className="banner__image" />

      <div className="banner__infos">
        <h2 className="banner__slogan">
          A NOSSA META
          <br /> É A SUA SEGURANÇA
        </h2>

        <IconTransparency className="banner__icon" />
      </div>
    </div>
  )
}

export default Banner
