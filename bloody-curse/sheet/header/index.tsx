import * as React from 'react'
import { CheckboxInput, TextInput, TogglableSection } from '@falconpilot/roll20-ts-builder'

import { CharacterFields, CharacterInfos } from '../../types/fields'
import { CharacterTitle } from './styled'
import { inputStyles } from '../styles/inputs'

const TitleSection = TogglableSection(() => (
  <span>
    <span>Titre : </span>
    <TextInput
      styles={inputStyles}
      name={CharacterInfos.Title}
      placeholder='En fin de scénario uniquement'
    />
  </span>
))

const ResumeSection = TogglableSection(() => (
  <TextInput
    styles={inputStyles}
    name={CharacterFields.Resume}
    placeholder='Aucune information'
    readOnly
  />
))

export const Header: React.FunctionComponent = () => (
  <CharacterTitle>
    <CheckboxInput name={CharacterFields.IsDisplayed} defaultChecked />
    <TitleSection togglableProperty={CharacterFields.IsDisplayed} defaultDisplayed />
    <ResumeSection togglableProperty={CharacterFields.IsDisplayed} />
  </CharacterTitle>
)
