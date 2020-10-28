import React from 'react'
import Icon1 from '../../images/wallet.svg'
import Icon2 from '../../images/data-report.svg'
import Icon3 from '../../images/pay-online.svg'

import { ServicesContainer, ServicesH1, ServicesH2, ServicesCard, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Redução de Despesas</ServicesH2>
          <ServicesP>Nós ajudamos você a reduzir seus custos fazemos valer o seu dinheiro</ServicesP> 
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Relatórios Virtuais</ServicesH2>
          <ServicesP>Acesse nossa plataforma e tenha seus dados onde quiser 24/7</ServicesP> 
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Benefícios Exclusivos</ServicesH2>
          <ServicesP>Tenha um cartão com vários benefícios e ainda 5% de cash back.</ServicesP> 
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
