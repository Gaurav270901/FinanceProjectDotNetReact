import React, { type SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete : (e : SyntheticEvent) =>void;
    portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete , portfolioValue}: Props) => {
  return (
    <>
    <form onSubmit={onPortfolioDelete}>
        <input value={portfolioValue} hidden={true} readOnly={true} />
        <button>X</button>
    </form>
    </>  
)
}

export default DeletePortfolio