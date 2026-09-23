export const projects = [
  {
    slug: 'build-a-theme-park', title: 'Build a Theme Park', category: 'Games', type: 'Roblox experience',
    summary: 'Bouw en beheer je eigen pretpark in een Roblox game die meer dan 900.000 keer is bezocht.',
    description: 'Een toegankelijke bouwervaring waarin spelers hun eigen themapark vormgeven en uitbreiden. Het project combineert creatieve vrijheid met interfaces en systemen die de gameplay ondersteunen.',
    featured: true, cover: 'theme-park', result: '900k+', resultLabel: 'bezoeken', stack: ['Luau', 'Roblox Studio'],
    githubUrl: null, liveUrl: null, status: 'Gepubliceerd',
    highlights: ['Bouwen en beheren van een eigen themapark', 'Custom interfaces en gameplay-systemen', 'Meer dan 900.000 bezoeken'],
    sections: [{ title: 'Een wereld om zelf vorm te geven', body: 'Build a Theme Park draait om spelers de ruimte geven om iets eigens te maken. De bouw- en beheersystemen verbinden creatieve keuzes met een duidelijke spelvoortgang.' }, { title: 'Systemen achter de ervaring', body: 'De game combineert gameplay-logica met op maat gemaakte UI-systemen, gebouwd met Luau en Roblox Studio.' }],
  },
  {
    slug: 'mantelzicht', title: 'MantelZicht', category: 'Web', type: 'Webapplicatie',
    summary: 'Een financieel overzicht dat mantelzorgers helpt grip te houden op hun administratie.',
    description: 'Een PHP-webapplicatie voor het beheren van financiën, met een interface die informatie en dagelijkse taken overzichtelijk bij elkaar brengt.',
    featured: true, cover: 'mantelzicht', stack: ['PHP', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Karsten0701/MantelZicht', liveUrl: null, status: 'Project',
    highlights: ['Financieel overzicht voor mantelzorgers', 'PHP-applicatie met database-integratie', 'Gericht op een heldere, bruikbare interface'],
    sections: [{ title: 'Overzicht dat rust geeft', body: 'MantelZicht brengt financiële informatie voor mantelzorgers samen op één plek. De interface is opgezet om veelgebruikte informatie snel vindbaar te maken.' }, { title: 'Van interface tot backend', body: 'De applicatie is gebouwd met PHP, HTML en CSS, met database-integratie voor het beheren van financiële gegevens.' }],
  },
  {
    slug: 'project-rotschield', title: 'Project Rotschield', category: 'AI / Experiments', type: 'AI-experiment',
    summary: 'Een Python-project om AI-concepten te verkennen en in werkende code te vertalen.',
    description: 'Een experiment rond artificial intelligence en machine learning. De nadruk ligt op onderzoek, prototyping en het leren door ideeën daadwerkelijk te implementeren.',
    featured: true, cover: 'rotschield', stack: ['Python'],
    githubUrl: 'https://github.com/Karsten0701/Project-Rotschield', liveUrl: null, status: 'Experiment',
    highlights: ['AI- en machine-learningconcepten verkennen', 'Prototypes bouwen met Python', 'Technisch onderzoek omzetten in code'],
    sections: [{ title: 'Leren door te bouwen', body: 'Project Rotschield onderzoekt hoe AI-concepten zich gedragen wanneer je ze toepast in een echt prototype. Python maakt het mogelijk ideeën snel uit te proberen en bij te stellen.' }],
  },
  {
    slug: 'horror-game', title: 'Horror Game', category: 'Games', type: 'Roblox game',
    summary: 'Een horrorervaring in ontwikkeling, opgebouwd rond sfeer, omgevingen en onverwachte momenten.',
    description: 'Een lopend Roblox-project waarin omgevingsontwerp en Luau-systemen samen een spannende spelervaring vormen.',
    featured: true, cover: 'horror', stack: ['Luau', 'Roblox Studio'],
    githubUrl: 'https://github.com/Karsten0701/Horror', liveUrl: null, status: 'In ontwikkeling',
    highlights: ['Sfeervolle Roblox-omgevingen', 'Gameplay-systemen in Luau', 'Ervaring ontworpen rond spanning en verrassing'],
    sections: [{ title: 'Spanning door interactie', body: 'De ervaring gebruikt omgevingen en gameplay-momenten om de speler alert te houden. Het project is in ontwikkeling.' }],
  },
  {
    slug: 'clash-of-vikings', title: 'Clash Of Vikings', category: 'Games', type: 'Roblox game',
    summary: 'Een multiplayergame met Vikingthema, combat-systemen en competitieve gameplay.',
    description: 'Een Roblox-gameconcept waarin multiplayergevechten en thematische spelwerelden samenkomen.',
    featured: false, cover: 'vikings', stack: ['Luau', 'Roblox Studio'],
    githubUrl: null, liveUrl: null, status: 'In ontwikkeling',
    highlights: ['Multiplayer gameplay', 'Combat-systemen', 'Vikingthema'],
    sections: [{ title: 'Multiplayer als kern', body: 'Clash Of Vikings richt zich op multiplayer combat en de systemen die gevechten leesbaar en leuk maken.' }],
  },
  {
    slug: 'portfolio', title: 'Portfolio', category: 'Web', type: 'Persoonlijke website',
    summary: 'Een plek voor projecten, experimenten en het werk dat ik maak.',
    description: 'De portfolio is gebouwd met Vue 3 en Vite. De herontworpen versie brengt projecten en GitHub-activiteit samen in een toegankelijke, meertalige projectpresentatie.',
    featured: false, cover: 'portfolio', stack: ['Vue 3', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Karsten0701/Portfolio', liveUrl: 'https://karsten0701.github.io/Portfolio/', status: 'Live',
    highlights: ['Vue 3 met Vue Router', 'Responsive vormgeving en themawissel', 'GitHub Pages-deployment'],
    sections: [{ title: 'Een groeiend overzicht', body: 'De website is bedoeld om echt werk en de keuzes erachter te laten zien, met projectpagina’s en actuele openbare GitHub-activiteit.' }],
  },
]

export const schoolProjects = [
  { slug: 'beroepsproduct-2', title: 'Beroepsproduct 2', category: 'School', type: 'Webapplicatie', summary: 'Een PHP-webapplicatie met database-integratie, gemaakt als beroepsproduct.', description: 'Een schoolproject met server-side development en database-integratie.', cover: 'school-web', stack: ['PHP', 'HTML', 'CSS'], githubUrl: 'https://github.com/Karsten07011/Beroeps2_2' },
  { slug: 'beroepsproduct-4', title: 'Beroepsproduct 4', category: 'School', type: 'Frontend', summary: 'Een frontendproject met aandacht voor CSS en responsive design.', description: 'Een schoolproject waarin responsive vormgeving en moderne CSS centraal staan.', cover: 'school-layout', stack: ['CSS', 'HTML'], githubUrl: 'https://github.com/Karsten07011/Beroeps4' },
  { slug: 'javascript-bootcamp', title: 'JavaScript Bootcamp', category: 'School', type: 'Oefeningen', summary: 'Interactieve oefeningen en programmeeruitdagingen met JavaScript.', description: 'Praktische programmeeruitdagingen gemaakt tijdens een JavaScript bootcamp.', cover: 'school-code', stack: ['JavaScript', 'HTML'], githubUrl: 'https://github.com/Karsten07011/BOOTCAMP' },
  { slug: 'counterpounter', title: 'CounterPounter', category: 'School', type: 'Webapplicatie', summary: 'Een kleine interactieve teller, gebouwd met HTML en JavaScript.', description: 'Een counter-applicatie met custom styling en interactieve bediening.', cover: 'school-counter', stack: ['HTML', 'CSS', 'JavaScript'], githubUrl: 'https://github.com/Karsten07011/CounterPounter' },
  { slug: 'pixel-art-editor', title: 'Pixel Art Editor', category: 'School', type: 'Creatieve tool', summary: 'Een editor waarmee je pixel art in de browser kunt maken.', description: 'Een browsergebaseerde tekeneditor met kleurenpalet en pixelraster.', cover: 'school-pixel', stack: ['HTML', 'CSS', 'JavaScript'], githubUrl: 'https://github.com/Karsten07011/BEROEPS-ART-DE-PIXELS' },
]

export const allProjects = [...projects, ...schoolProjects]
