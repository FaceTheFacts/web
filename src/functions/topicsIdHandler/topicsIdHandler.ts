export const topicsIdHandler = (topic: string): number|Array<number> => {
  switch(topic){
    case 'Digitale Agenda':
      return 39
    case 'Arbeit und Soziales':
      return 14
    case 'Bau und Wohnen':
      return 18
    case 'Bildung und Forschung':
      return 3
    case 'Europäische Union':
      return 4
    case 'Ernährung und Landwirtschaft':
      return 5
    case 'Gesundheit':
      return 28
    case 'Inneres':
      return 23
    case 'Kultur und Medien':
      return 7
    case 'Menschenrechte':
      return 25
    case 'Recht und Verbraucherschutz':
      return 44
    case 'Tourismus':
      return 47
    case 	'Umwelt':
      return 29
    case 'Infrastruktur':
      return 40
    case 'Wirtschaft und Energie':
      return 20
    case 	'Entwicklung':
      return 17
    case 'Auswärtiges':
      return 21
    case 'Finanzen':
      return 41
    case 'Haushalt':
      return 42
    case 'Familie':
      return 34
    case 'Sport':
      return 46
    case 'Verteidigung':
      return 13
    case 'Parlamentsangelegenheiten':
      return 30
    case 'Nachrichtendienste':
      return [4197, 4083]
    default:
      return 0 
  }
}
