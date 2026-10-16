import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
 import TerraceWaterproofing from '../pages/terraceWaterProofing'
import IndustrialWaterproofing from '../pages/IndustrialWaterProofing'
import EpoxyCoatingHero from '../pages/epoxyCoating/EpoxyCoatingHero'
import BathroomWaterproofingMethods from '../pages/BathroomWaterproofingMethods/BathroomWaterproofingMethods'
import BathroomRenovationSection from '../pages/BathroomWaterproofingMethods/BathroomRenovationSection'
import NewBathroomVIP from '../pages/BathroomWaterproofingMethods/NewBathroomVIP'
import InteriorWaterproofing from '../pages/interiorWaterProofing/InteriorWaterProofing'
import ExteriorWaterproofing from '../pages/interiorWaterProofing/ExteriorWaterProofing'
import RetainingWaterproofing from '../pages/interiorWaterProofing/RetainingWaterProofing'
import UndergroundTank from '../pages/undergroundTank/UnderGroundTank'
import OverheadWaterTank from '../pages/undergroundTank/OverheadWaterTank'
import SwimmingPoolWaterproofing from '../pages/undergroundTank/SwimmingWaterProofing'
import Tips from '../pages/Tips'
import DiyGuide from '../pages/DiyGuid'
import Products from '../pages/Products'
 
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App hi aapka layout ban gaya
    children: [
   {
      path: '/',
    element: <Home/>,
   },
   
   {
      path: '/terrce-waterproofing',
    element: <TerraceWaterproofing/>,
   },

   {
      path: '/Industrial-Waterproofing',
    element: <IndustrialWaterproofing/>,
   },
  
   
   {
      path: '/Epoxy-Coating',
    element: <EpoxyCoatingHero/>,
   },


   {
      path: '/Bathroom-Waterproofing-Methods',
    element: <BathroomWaterproofingMethods/>
   },


   {
      path: '/Bathroom-Renovation-Section',
    element: <BathroomRenovationSection/>
   },
   
   {
      path: '/New-Bathroom-VIP', 
    element: <NewBathroomVIP/>
   },
   

   {
      path: '/Interior-Waterproofing', 
    element: <InteriorWaterproofing/>
   },  

   {
      path: '/Exterior-Waterproofing', 
    element: <ExteriorWaterproofing/>
   },
   

    {
      path: '/Retaining-Waterproofing',  
    element: <RetainingWaterproofing/>
   },


    {
      path: '/Underground-Tank',   
    element: <UndergroundTank/>
   },


    {
      path: '/Overhead-WaterTank',    
    element: <OverheadWaterTank/>
   },


   {
      path: '/SwimmingPool-Waterproofing',    
    element: <SwimmingPoolWaterproofing/>
   },
   

   {
      path: '/tips',    
    element: <Tips/>
   },


    {
      path: '/guide',    
    element: <DiyGuide/>
   },


    {
      path: '/products',    
    element: <Products/>
   },

   

   

   
   
  
   

    ],
  },
])