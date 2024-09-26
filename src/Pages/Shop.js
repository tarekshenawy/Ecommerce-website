import React from 'react'
import Title from "../Components/Title/Title";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Collections from "../Components/Collections/Collections";
import Newletters from '../Components/Newletters/Newletters';
import Home from "../Components/Home/Home"
export default function Shop() {
  return (
    <div>
          <Home/>
      <Title title="Popular in Women"/>
      <Popular/>
      <Offers/>
      <Title title="New Collections"/>
      <Collections/>
      <Newletters/>
    </div>
  )
}
