"use client"

import exp from "constants"
import styled from "styled-components"


export const App = styled('div')`
 display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: 
    'A B'
    'A C';
  
    gap: 32px;
  
    place-content: center;
    height: 100vh;
`

export const Player1 = styled('div')`
    grid-area: A;
    padding: 50px 38px;

    .wrapper {
    width: 190px;
  }

  img {
    width: 190px;
    height: 190px;
    object-fit: cover;
  
    border-radius: 6px;
  }

  .info {
    margin-top: 28px;
  }
`

export const Player2 = styled('div')`
    grid-area: B;
    height: fit-content;
`

export const Player3 = styled('div')`
  grid-area: C;
`
