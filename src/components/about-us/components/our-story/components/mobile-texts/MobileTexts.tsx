import { FC } from 'react'
import './styles.scss'

const MobileTexts: FC = () => {
  return (
    <>
      <div className="mobile_texts">
        <h2 className="mobile_texts__title">Nossa história</h2>

        <p className="mobile_texts__paragraph">
          Segurança, fiscal, líder de equipe, chefe de segurança, e hoje <mark>CEO</mark>.
        </p>
      </div>

      <div className="mobile_section">
        <p className="mobile_section__paragraph">
          De modo resumido, essa é a trajetória de 20 anos do nosso fundador,&nbsp;
          <mark>Claudio Jutai</mark>. Devido sua ampla experiência na área, ele visualizou uma ótima
          oportunidade de desenvolver o seu própio negócio.
        </p>

        <p className="mobile_section__paragraph">
          Após a criação de sua empresa, encontrou um sócio que o ajudou a ampliar sua área de
          atuação. Hoje a Meta Segurança atua em ramos como <mark>portaria</mark>,&nbsp;
          <mark>limpeza</mark>, <mark>festas</mark> e <mark>eventos</mark> na cidade de Porto Alegre
          e região.
        </p>
      </div>
    </>
  )
}

export default MobileTexts
