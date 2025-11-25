
// CENTRAL EXIT LINK MANAGEMENT
export const EXIT_LINKS: Record<string, string> = {
  'stake-it': 'https://www.stake.it/?c=NEWBONUS', 
  'bet365-it': 'https://www.bet365.it',
  'betway-it': 'https://betway.it',
  'snai-it': 'https://www.snai.it',
  'eurobet-it': 'https://www.eurobet.it',
  'goldbet-it': 'https://www.goldbet.it',
  '888-it': 'https://www.888.it',
  'admiral-it': 'https://www.admiralbet.it',
  'starcasino-it': 'https://www.starcasino.it',
  'betfair-it': 'https://www.betfair.it',
  'planetwin365-it': 'https://www.planetwin365.it',
  'sisal-it': 'https://www.sisal.it',
  'leovegas-it': 'https://www.leovegas.it',
  'betflag-it': 'https://www.betflag.it',
  'williamhill-it': 'https://www.williamhill.it',
  'netbet-it': 'https://www.netbet.it',
  'lottomatica-it': 'https://www.lottomatica.it',
  'bwin-it': 'https://www.bwin.it',
  'betclic-it': 'https://www.betclic.it',
};

export const getExitLink = (operatorId: string): string => {
  return EXIT_LINKS[operatorId] || '#';
};
