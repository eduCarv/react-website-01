import car from '../../images/car.svg';
import wallet from '../../images/wallet.svg';
import dataReport from '../../images/data-report.svg';


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true, 
  topLine: 'Banco Premium',
  headLine: 'Transações Ilimitadas com taxa 0',
  description: 'Tenha acesso ao nosso app exclusivo que permite você fazer transações ilimitadas sem taxa alguma.',
  buttonLabel: 'Iniciar',
  imgStart: false,
  img: car,
  alt: 'Car decorative',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false, 
  topLine: 'Benefícios Exclusivos',
  headLine: 'Poupe mais com benefícios exclusivos',
  description: 'Descontos em cinemas, restaurantes, shows, lojas aplicativos online e muito mais.',
  buttonLabel: 'Saber mais',
  imgStart: true,
  img: wallet,
  alt: 'Wallet decorative',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false, 
  topLine: 'Entre para o time',
  headLine: 'Criar uma conta é super fácil',
  description: 'Abra sua conta em apenas 10 minutos. Tudo que você precisa é informar os seus dados e prontinho, já está no time de descontos.',
  buttonLabel: 'Criar Já',
  imgStart: false,
  img: dataReport,
  alt: 'Reports',
  dark: false,
  primary: false,
  darkText: true
};