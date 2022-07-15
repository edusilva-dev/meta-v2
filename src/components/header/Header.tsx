import { FC, useState } from 'react'
import './styles.scss'

import { ReactComponent as HamburguerSVG } from 'src/assets/icons/hamburguer.svg'

import { IWindowWidth } from 'src/interfaces/genericWindowWidth'

import { isMobile } from 'src/utils/isMobile'

const Header: FC<IWindowWidth> = ({ windowWidth }) => {
  const [isMenuOpenned, setIsMenuOpenned] = useState<boolean>(false)

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__logo">
          <a href="#home" className="header__title">
            Meta Segurança
          </a>
        </h1>

        {!isMobile(windowWidth) ? (
          <nav className="header__menu menu">
            <ul className="menu__container">
              <li className="menu__item">
                <a href="#sobre" className="menu__link">
                  Sobre
                </a>
              </li>
              <li className="menu__item">
                <a href="#servicos" className="menu__link">
                  Serviços
                </a>
              </li>
              <li className="menu__item">
                <a href="#eventos" className="menu__link">
                  Eventos
                </a>
              </li>
              <li className="menu__item">
                <a href="#contato" className="menu__link">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <HamburguerSVG onClick={() => setIsMenuOpenned(!isMenuOpenned)} />
            {isMenuOpenned && (
              <nav className="header__mobile_menu mobile_menu">
                <ul className="mobile_menu__container">
                  <li
                    className="mobile_menu__item"
                    onClick={() => setIsMenuOpenned(!isMenuOpenned)}
                  >
                    <a href="#sobre" className="mobile_menu__link">
                      Sobre
                    </a>
                  </li>
                  <li
                    className="mobile_menu__item"
                    onClick={() => setIsMenuOpenned(!isMenuOpenned)}
                  >
                    <a href="#servicos" className="mobile_menu__link">
                      Serviços
                    </a>
                  </li>
                  <li
                    className="mobile_menu__item"
                    onClick={() => setIsMenuOpenned(!isMenuOpenned)}
                  >
                    <a href="#eventos" className="mobile_menu__link">
                      Eventos
                    </a>
                  </li>
                  <li
                    className="mobile_menu__item"
                    onClick={() => setIsMenuOpenned(!isMenuOpenned)}
                  >
                    <a href="#contato" className="mobile_menu__link">
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  )
}

export default Header
