export const coaches = {
  sarah: {
    path: '/coachs/sarah', courses: ['commerciale'] as const,
    name: 'Sarah', role: 'Danse commerciale', heading: 'Énergie, douceur et passion du partage',
    image: '/medias/coachs/sarah-danse-commerciale.jpeg', width: 1284, height: 1258,
    paragraphs: [
      "Solaire et pétillante, Sarah transmet sa passion pour la danse commerciale avec douceur, bienveillance et pédagogie.",
      "Elle accompagne chaque élève à son rythme, dans une ambiance chaleureuse, pour prendre confiance en soi et s’exprimer librement à travers la danse.",
      "Avec Sarah, chaque cours est un moment de partage, de plaisir et de bonne humeur.",
    ],
  },
  sophie: {
    path: '/coachs/sophie', courses: ['cerceau', 'pole', 'kids'] as const,
    name: 'Sophie', role: 'Danses aériennes', heading: 'Bienveillance et pédagogie',
    image: '/medias/coachs/sophie-danses-aeriennes.jpeg', width: 1284, height: 1262,
    paragraphs: [
      "Sophie vous accompagne dans la découverte du cerceau aérien et de la pole dance initiation, avec une approche douce, progressive et adaptée.",
      "Son objectif ? Vous permettre de prendre confiance en vous, de découvrir vos capacités et de vous épanouir à travers le mouvement.",
      "Elle encadre également les cours de cerceau aérien pour enfants, en privilégiant le jeu, la découverte et le développement de la confiance en soi.",
      "Avec Sophie, l’essentiel n’est pas la performance, mais le plaisir d’apprendre et de progresser.",
    ],
  },
};
