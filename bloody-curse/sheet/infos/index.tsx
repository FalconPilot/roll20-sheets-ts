import * as React from 'react'
import { TextInput } from '@falconpilot/roll20-ts-builder'
import { NumberInput } from '@falconpilot/roll20-ts-builder'

import { inputStyles } from '../styles/inputs'
import { CharacterInfos } from '../../types/fields'

interface InfoLineProps {
  label: string
}

const InfoLine: React.FunctionComponent<InfoLineProps> = ({ children, label }) => (
  <tr>
    <td>{label}</td>
    <td>{children}</td>
  </tr>
)

export const Infos: React.FunctionComponent = () => (
  <>
    <hr />
    <table>
      <tbody>
        <InfoLine label='Genre'>
          <TextInput name={CharacterInfos.Gender} styles={inputStyles} />
        </InfoLine>
        <InfoLine label='Taille'>
          <NumberInput name={CharacterInfos.Meters} styles={inputStyles} />
          m
          <NumberInput name={CharacterInfos.Centimeters} styles={inputStyles} />
        </InfoLine>
        <InfoLine label='Prénom'>
          <TextInput name={CharacterInfos.Name} styles={inputStyles} />
        </InfoLine>
        <InfoLine label='Ère'>
          <TextInput name={CharacterInfos.Era} styles={inputStyles} />
        </InfoLine>
        <InfoLine label='Race'>
          <TextInput name={CharacterInfos.Race} styles={inputStyles} />
        </InfoLine>
        <InfoLine label='Historique'>
          <TextInput name={CharacterInfos.History} styles={inputStyles} />
        </InfoLine>
      </tbody>
    </table>
  </>
)
