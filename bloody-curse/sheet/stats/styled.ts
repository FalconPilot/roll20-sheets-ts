import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'

interface WithAmountProps {
  amount: number
}

const widthFromAmount = ({ amount }: WithAmountProps): string => `${100 / amount}%`

export const statBubbleStyles: SerializedStyles = css`
  width: 40px;
  height: 40px;
  padding: 0;
  padding-left: 9px;
  font-family: 'Contrail One';
  font-size: 18px;
  border-radius: 50%;
`

export const StatTable = styled.table`
  width: 100%;
`

export const statBlockStyles = (props: WithAmountProps): SerializedStyles => css`
  width: ${widthFromAmount(props)};
  padding: 5px;
  text-align: center;
`

export const StatHeading = styled.th<WithAmountProps>`
  ${statBlockStyles}
`

export const StatColumn = styled.td<WithAmountProps>`
  ${statBlockStyles}
`
