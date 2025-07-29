import React from 'react'
import type { SyntheticEvent } from 'react'
import "./Card.css"
import type { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props{
    id : string;
    searchResult : CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

export const Card = ({id , searchResult,onPortfolioCreate}: Props) => {
  return (
    <div className = "card">
      <h1 className="title">{searchResult.name}</h1>
      <h2 className="ticker">{searchResult.symbol}</h2>
      <p className="price">currency: ${searchResult.currency}</p>
      <p className="info"> shortname : ${searchResult.exchangeShortName}</p>

      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
    
 
  )
}