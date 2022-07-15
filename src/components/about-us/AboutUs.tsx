import { FC } from 'react'
import './styles.scss'

import OurStory from './components/our-story/OurStory'
import WhoWeAre from './components/who-we-are/WhoWeAre'

import { IWindowWidth } from 'src/interfaces/genericWindowWidth'
import { isMobile } from 'src/utils/isMobile'

const AboutUs: FC<IWindowWidth> = ({ windowWidth }) => {
  return (
    <div className="about_us" id="sobre">
      <WhoWeAre isMobile={isMobile(windowWidth)} />
      <OurStory isMobile={isMobile(windowWidth)} />
    </div>
  )
}

export default AboutUs
