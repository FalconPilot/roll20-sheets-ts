import * as React from 'react'
import { NumberInput } from '@falconpilot/roll20-ts-builder'

import { statsList } from '../../constants'
import { baseStatKey } from '../../utils'

export const Stats: React.FunctionComponent = () => (
  <div>
    {statsList.map(stat => (
      <div key={stat.key}>
        {stat.name}
        <NumberInput name={baseStatKey(stat.key)} defaultValue={1} />
      </div>
    ))}
  </div>
)
