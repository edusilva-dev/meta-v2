import { FC } from 'react'
import './styles.scss'

import badgePath from 'src/assets/static/cracha.png'
import { ReactComponent as LogoSVG } from 'src/assets/static/logo-transparency.svg'

interface IWhoWeAreProps {
  isMobile: boolean
}

const WhoWeAre: FC<IWhoWeAreProps> = ({ isMobile }) => {
  return (
    <div className="who_we_are">
      <div className="who_we_are__wrapper">
        <div className="who_we_are__texts">
          <h2 className="who_we_are__title">Quem somos?</h2>

          <p className="who_we_are__paragraph">
            Nós somos a meta segurança, uma empresa especializada em portaria, limpeza e segurança.
            Atuamos em diversos setores, desde residencial ao comercial.
          </p>

          <p className="who_we_are__paragraph">
            Nossa equipe é formada por profissionais experientes e capacitados para atuar no ramo.
            Estamos atuando desde 2019, em Porto Alegre e região, garantindo o melhor serviço e
            segurança do mercado, pois o nosso objetivo, é a qualidade.
          </p>
        </div>

        {!isMobile ? (
          <div className="who_we_are__image_container">
            <img src={badgePath} alt="Imagem do crachá de apoio Meta Segurança" />
          </div>
        ) : (
          <div className="who_we_are__logo_container">
            <LogoSVG className="who_we_are__image" />
          </div>
        )}
      </div>
    </div>
  )
}

export default WhoWeAre
