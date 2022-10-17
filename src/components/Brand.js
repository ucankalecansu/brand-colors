import React, { useContext } from 'react'
import { getContrastYIO } from '../Helpers';
import MainContext from '../MainContext';
import ClipboardButton from "react-clipboard.js"

export default function Brand({ brand }) {
    const { setSelectedBrands, selectedBrands ,setCopied} = useContext(MainContext);
    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }
    const setColor=(color)=>{
        setCopied(color)
    }
    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? "selected" : ""}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className='brand-colors'>
                {brand.colors.map((color) => {
                    return (
                        <>
                            <ClipboardButton onSuccess={()=> setColor(color)} data-clipboard-text={color} component={"span"} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIO(color)}` }}>
                                    {color}
                            </ClipboardButton>
                        </>

                    )
                })}
            </div>
        </div>
    )
}
