import React from 'react'
import Search from './Search'
import Brand from './Brand';
import { useContext } from 'react';
import MainContext from '../MainContext';
import LazyLoad from 'react-lazyload';
import Download from './Download';

export default function Content() {

    const {brands,selectedBrands}= useContext(MainContext)

  return (
    <main className='content'>
        <header className='header'>
            <Search/>
            {selectedBrands.length !==0 && <Download/>}
        </header>
        <section className='brands'>
            {brands.map((brand)=>{
                return(
                   <LazyLoad key={brand.slug} once={true} overflow={true} placeholder="Yükleniyor">
                     <Brand brand={brand}/>
                   </LazyLoad>
                )
            })}

        </section>
    </main>
  )
}
