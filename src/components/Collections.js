import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'
import MainContext from '../MainContext';
import Brand from './Brand';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import { GrLinkPrevious } from 'react-icons/gr';

export default function Collections() {
    const {slugs} =useParams();
    const navigate=useNavigate();
    const { setSelectedBrands,selectedBrands,brands} = useContext(MainContext);


    const clearSelectedBrands=()=>{
        setSelectedBrands([]);
        navigate("/")
    }

    useEffect(()=>{
        setSelectedBrands(slugs.split(','))
    },[])
  return (
    <main className='content'>
        <header className='header'>
            <Link to={"/"} onClick={clearSelectedBrands}>
                <a  className='back-btn'>
                <GrLinkPrevious/>
                    All Brands
                </a>
            </Link>
            {selectedBrands.length !==0 && <Download/>}
        </header>
        <section className='brands'>
            {selectedBrands.map((slug)=>{
                let brand= brands.find(brand=> brand.slug===slug)
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
