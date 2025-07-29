
import React, { type ChangeEvent, type SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import type { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
   const [search , setSearch] = React.useState<string>('');
   const [searchResults, setSearchResults] = React.useState<CompanySearch[]>([]);
   const [serverError, setServerError] = React.useState<string | null>(null);
   const [portfolioValues,setPortfolioValues] = useState<string[]>([]);
  
      const handleSearchChange =(e : ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
          setSearch(e.target.value);
      }

      const onPortfolioCreate = (e: any) => {
        const newValue = e.target[0].value;
        if(!newValue) {
          console.error("No symbol provided for portfolio creation.");
          return;
        }
        const updatedSet = new Set(portfolioValues);
        updatedSet.add(newValue);
        setPortfolioValues(Array.from(updatedSet));
        console.log("Portfolio created for symbol: ", newValue);
      }

      const onPortfolioDelete = (e : any)=>{
        e.preventDefault();
        const removed = portfolioValues.filter((value) => value !== e.target[0].value);
        console.log(removed);
        setPortfolioValues(removed);
      }
  
      const onSearchSubmit =async (e : SyntheticEvent) => {
        e.preventDefault();
          console.log("Searching for: ", e);
          const result = await searchCompanies(search);
          if(typeof result === 'string') {
              console.error("Error searching companies: ", result);
              setServerError(result);
          }else if (Array.isArray(result)) {
            setSearchResults(result);
        }
        console.log("Search results: ", result);
      };
  return (
    <>
      <Navbar/>
      <Hero/>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <Search onSubmitSearch = {onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
     <CardList searchResult = {searchResults} onPortfolioCreate={onPortfolioCreate}/>
    </>
  );
}

export default App;
