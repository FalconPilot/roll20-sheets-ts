import * as React from 'react'
import { SelectableList, OptionProps } from '@falconpilot/roll20-ts-builder'

import { CharacterStats } from '../../types/fields'
import { StatTable, StatColumn, StatHeading, statBubbleStyles } from './styled'

const statOptions: OptionProps[] = [2, 4, 6].map(n => ({
  value: n,
  name: `${n}`
}))

interface StatBubbleProps {
  name: string
}

const StatBubble: React.FunctionComponent<StatBubbleProps> = ({ name }) => (
  <SelectableList
    styles={statBubbleStyles}
    name={name}
    options={statOptions}
    defaultValue='2'
  />
)

const stats: { name: string, displayName: string }[] = [{
  name: CharacterStats.PhysicalDice,
  displayName: 'Physique'
}, {
  name: CharacterStats.FinesseDice,
  displayName: 'Finesse'
}, {
  name: CharacterStats.SpiritDice,
  displayName: 'Esprit'
}, {
  name: CharacterStats.SocialDice,
  displayName: 'Sociabilité'
}]

export const Stats = () => (
  <StatTable>
    <thead>
      <tr>
        {stats.map(stat => (
          <StatHeading key={`statheader-${stat.name}`} amount={stats.length}>
            {stat.displayName}
          </StatHeading>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {stats.map(stat => (
          <StatColumn amount={stats.length} key={`statbubble-${stat.name}`}>
            <StatBubble name={stat.name} />
          </StatColumn>
        ))}
      </tr>
    </tbody>
  </StatTable>
)
