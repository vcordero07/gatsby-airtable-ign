import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
const Footer = () => {
  return (
    <Wrapper>
      <p>
        copyright &copy; {new Date().getFullYear()}|{' '}
        <span>
          <Link to='/' className='footer-slug'>
            <span>CatDev</span>
          </Link>
        </span>{' '}
        | all rights reserved
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  padding: 1rem;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer
