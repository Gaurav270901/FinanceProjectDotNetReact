import React, { ChangeEvent, FormEvent, JSX, SyntheticEvent } from 'react'

interface Props {
  onSubmitSearch: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSubmitSearch,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
   <>
    <form onSubmit ={onSubmitSearch}>
        <input value = {search} onChange = {handleSearchChange} type="text" placeholder="Search for a company..." />
    </form>
   </>
  )
}

export default Search