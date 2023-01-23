import styled, { css } from 'styled-components'

const Button = styled.a`
  background-color: var(--clr-primary-400);
  color: var(--clr-neutral-100);
  font-size: .9rem;
  font-family: var(--ff-button);
  font-weight: var(--fw-semibold);
  padding: .75rem 2rem;
  border-radius: 100vw;
  box-shadow: 0px 12px 13px -10px var(--clr-primary-400);
  transition: transform 100ms ease-in-out;

  &:hover {
    background-color: var(--clr-primary-200);
  }

  ${props => props.inverted && css`
    background-color: var(--clr-neutral-100);
    color: var(--clr-primary-400);

    &:hover {
      background-color: var(--clr-neutral-100);
      color: var(--clr-primary-200);
    }
  `}
`;

export default Button