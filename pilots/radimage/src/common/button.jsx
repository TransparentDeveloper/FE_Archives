import styled from 'styled-components'
import { COLORS } from '../consts/design-token'

const Button = ({ children, ...rest }) => {
  return <S.ButtonBase {...rest}>{children}</S.ButtonBase>
}

export default Button

const ButtonBase = styled.button`
  width: fit-content;
  height: fit-content;
  min-width: 5rem;
  min-height: 3rem;
  padding: 0.5rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  white-space: nowrap;

  border: 0.2rem solid ${COLORS.GSCALE[0]};
  background-color: transparent;
  color: ${COLORS.GSCALE[0]};

  box-shadow: 0.1rem 0.1rem 0.2rem ${COLORS.GSCALE[600]};
  text-shadow: 0.1rem 0.1rem 0.2rem ${COLORS.GSCALE[600]};

  &:hover {
    background-color: ${COLORS.GSCALE[0]};
    color: ${COLORS.GSCALE[600]};
  }
`
const S = {
  ButtonBase,
}
