import { CharacterStat, SheetStat, CharacterSkillGroup } from '../types'

export const statsList: SheetStat[] = [{
  key: CharacterStat.Physical,
  name: 'Physique',
}, {
  key: CharacterStat.Agility,
  name: 'Agilité',
}, {
  key: CharacterStat.Hability,
  name: 'Habilité',
}, {
  key: CharacterStat.Acuity,
  name: 'Acuité',
}, {
  key: CharacterStat.Charisma,
  name: 'Charisme',
}, {
  key: CharacterStat.Empathy,
  name: 'Empathie',
}, {
  key: CharacterStat.Intelligence,
  name: 'Intelligence',
}, {
  key: CharacterStat.Willpower,
  name: 'Volonté',
}]

export const skillGroups: CharacterSkillGroup[] = [{
  key: 'ACRO',
  name: 'Acrobaties',
  primaryStat: CharacterStat.Agility,
  secondaryStat: CharacterStat.Acuity,
  skills: []
}, {
  key: 'CRAFT',
  name: 'Artisanat',
  primaryStat: CharacterStat.Hability,
  secondaryStat: null,
  skills: []
}, {
  key: 'Arts',
  name: 'Artisanat',
  primaryStat: null,
  secondaryStat: CharacterStat.Empathy,
  skills: []
}]
