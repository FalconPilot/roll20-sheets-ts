import * as React from 'react'
import { RepeatingField, TextInput, Roll20DefaultFields } from '@falconpilot/roll20-ts-builder'

import { RepeatingFields } from '../../types/fields'

import { SheetWrapper } from './styled'
import { Character } from '../character'
import { Header } from '../header'
import { inputStyles } from '../styles/inputs'

export const App: React.FunctionComponent = () => (
  <SheetWrapper>
    <h2>
      Lignée : <TextInput name={Roll20DefaultFields.Name} styles={inputStyles} />
    </h2>
    <RepeatingField name={RepeatingFields.Characters}>
      <Header />
      <Character />
    </RepeatingField>
  </SheetWrapper>
)
