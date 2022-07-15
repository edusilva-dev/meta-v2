import { FC } from 'react'
import './styles.scss'

import claudioPath from 'src/assets/static/claudio.png'
import DesktopTexts from './components/desktop-texts/DesktopTexts'
import MobileTexts from './components/mobile-texts/MobileTexts'

interface IOurStoryProps {
  isMobile: boolean
}

const OurStory: FC<IOurStoryProps> = ({ isMobile }) => {
  return (
    <div className="our_story">
      <div className="our_story__image_container">
        <img src={claudioPath} alt="Imagem do crachá de apoio Meta Segurança" />
        {!isMobile && (
          <>
            <span className="our_story__name">Claudio Jutaí</span>
            <span className="our_story__label">CEO</span>
          </>
        )}
      </div>

      {!isMobile ? <DesktopTexts /> : <MobileTexts />}
    </div>
  )
}

export default OurStory
