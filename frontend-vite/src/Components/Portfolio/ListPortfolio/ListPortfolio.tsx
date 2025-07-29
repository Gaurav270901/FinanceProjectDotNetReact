import React, {type SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete : (e : SyntheticEvent) => void ;
}

const ListPortfolio = ({portfolioValues , onPortfolioDelete}: Props) => {
  return (
    <>
        <h3> 
            My portfolio list
        </h3>
        <ul>
        { portfolioValues &&
            portfolioValues.map((portfolio, index) => (
              <CardPortfolio portfolioValue={portfolio} onPortfolioDelete={onPortfolioDelete}/>
            ))
        }
        </ul>
    </>
  )
}

export default ListPortfolio