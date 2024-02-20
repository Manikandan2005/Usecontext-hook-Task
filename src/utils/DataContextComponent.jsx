import React, { useState } from 'react'
export const DataContext = React.createContext()

function DataContextComponent({children}) {
    let data = [
    {rating:"4.3",url:"https://rukminim2.flixcart.com/image/850/1000/kpodocw0/bucket/g/w/m/ctktc0021-kuber-industries-original-imag3v2yf2bd4nyt.jpeg?q=90&crop=false",description:"Bucket",price:"449.00"},
    {rating:"3.9",url:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D",description:"Sofa" ,price:"10999.00"},
    {rating:"4.7",url:"https://www.philips.co.in/c-dam/corporate/en_IN/news/bt-hero.download.jpg",description:"Trimmer",price:"799.00"},
    {rating:"4.6",url:"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw61458d43/images/Titan/Catalog/90188AP01_1.jpg?sw=800&sh=800",description:"Smart Watch",price:"2499"},
    {rating:"3.8",url:"https://rukminim2.flixcart.com/image/850/1000/kj61gnk0-0/headphone/i/h/t/p47-wireless-headphone-bluetooth-with-mic-fm-red-cos-theta-original-imafytfuzzy7xbab.jpeg?q=90&crop=false",description:"Headphone",price:"599"},
    {rating:"4.1",url:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAlFlIPS9GBV1m_oPlWmY-oNLfPevfJe2RNOgelwrjUR0n6j3XHHDL0BOVSMojNbqwPHLb1tvXDJob2Ibv0tGc6qwX5ruSKKugU20w4N4AhNcPmjSAj6k5bs8&usqp=CAE",description:"Puma shoe",price:"2999"},
    {rating:"4.8",url:"https://www.gizmochina.com/wp-content/uploads/2022/08/iPhone-14-Lineup-Feature-Teal.jpg",description:"iPhone 14",price:"69999"},
    {rating:"3.9",url:"https://rukminim2.flixcart.com/image/750/900/xif0q/cases-covers/x/p/h/-original-imagtksy47uyfubg.jpeg?q=20&crop=false",description:"Backcase",price:"149"}
  ]

  let [cartvalue,setCartValue] = useState(0);
  let [prodCount,setProdCount] = useState([0]);
  

  return (
    <DataContext.Provider value={{data,cartvalue,setCartValue,prodCount,setProdCount}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContextComponent