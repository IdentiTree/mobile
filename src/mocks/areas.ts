import { ME } from './me'

export const PATH = [
  [123848182, 912939199],
  [123848182, 912939199],
  [123848182, 912939199],
]

export const TREES = ['Wonderful tree', 'Friendly tree', 'The tree my friend']

// See https://www.yourarticlelibrary.com/environment/forest/forest-types-top-6-types-of-forest-with-diagram/74562
export const AREA_TYPES = [
  {
    name: 'Evergreen Forest',
    carbonMultiplier: 2,
  },
  {
    name: 'Rainforest',
    carbonMultiplier: 3,
  },
  {
    name: 'Tropical Forest',
    carbonMultiplier: 4,
  },
  {
    name: 'Mediterranean Forest',
    carbonMultiplier: 1.5,
  },
  {
    name: 'Mixed Forest',
    carbonMultiplier: 1,
  },
]

export const AREAS = [
  {
    did: 'AWDPADKLAWDPLAD9AP',
    name: 'Mystic Woods',
    description:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    type: AREA_TYPES[0],
    size: 12420,
    carbon: 451020,
    image:
      'https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    owner: ME,
    trees: TREES,
  },
  {
    did: 'ZAAHAAWBWAHAWVGDGABA',
    name: 'Magical Fireflies',
    description:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    type: AREA_TYPES[1],
    size: 144420,
    carbon: 13020,
    image:
      'https://images.pexels.com/photos/132428/pexels-photo-132428.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    owner: ME,
    trees: TREES,
  },
  {
    did: 'AWDPADKLAWDAWDPLAD9A65P',
    name: 'Beauty of Nature',
    description:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    type: AREA_TYPES[3],
    size: 4420,
    carbon: 2020,
    image:
      'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    owner: ME,
    trees: TREES,
  },
  {
    did: 'AWDPADKLAWAGJAADPLAD9AP',
    name: 'Wood Paths',
    description:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.',
    type: AREA_TYPES[2],
    size: 13420,
    carbon: 14020,
    image:
      'https://images.pexels.com/photos/7125641/pexels-photo-7125641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    owner: ME,
    trees: TREES,
  },
]
