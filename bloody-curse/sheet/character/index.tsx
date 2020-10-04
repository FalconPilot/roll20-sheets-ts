import * as React from 'react'
import { TogglableSection } from '@falconpilot/roll20-ts-builder'

import { CharacterWrapper } from './styled'
import { CharacterFields } from '../../types/fields'
import { Infos } from '../infos'
import { Stats } from '../stats'

const CharacterSection = TogglableSection(CharacterWrapper)

export const Character: React.FunctionComponent = () => (
  <CharacterSection togglableProperty={CharacterFields.IsDisplayed} defaultDisplayed>
    <Infos />
    <Stats />
  </CharacterSection>
)
