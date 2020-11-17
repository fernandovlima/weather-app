import React from 'react'

const SearchInput: React.FC = () => {
  return (
    <>
      <input id="cidade" type="text" placeholder="digite a cidade ..." />
      <label htmlFor="cidade">Cidade</label>
    </>
  )
}

export default SearchInput
