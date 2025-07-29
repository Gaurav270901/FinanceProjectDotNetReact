import React, { type SyntheticEvent } from 'react'
import { Card } from '../Card/Card'
import type { CompanySearch } from '../../company';
import { v4 as uuidv4 } from "uuid";


interface Props {
  searchResult : CompanySearch[],
  onPortfolioCreate: (e: SyntheticEvent) => void;
}
const CardList = ({searchResult,onPortfolioCreate}: Props) => {
  return (<div>
    {searchResult.length > 0 ? (
      searchResult.map((company, index) => (
        <Card
           id={company.symbol}
            key={uuidv4()}
            searchResult={company}
            onPortfolioCreate={onPortfolioCreate}
        />
      )) ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
  </div>
   
  ) 
}

export default CardList