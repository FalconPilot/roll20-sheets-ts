export enum CharacterStat {
  Acuity = 'ACU',
  Agility = 'AGI',
  Charisma = 'CHA',
  Empathy = 'EMP',
  Hability = 'HAB',
  Intelligence = 'INT',
  Physical = 'PHY',
  Willpower = 'WIL',
}

export interface SheetStat {
  key: CharacterStat
  name: string
}

export interface CharacterSkill {
  key: string
  name: string
  primaryStat?: CharacterStat
  secondaryStat?: CharacterStat
}

export interface CharacterSkillGroup {
  key: string
  name: string
  unrollable: boolean
  primaryStat: CharacterStat | null
  secondaryStat: CharacterStat | null
  skills: CharacterSkill[]
}
