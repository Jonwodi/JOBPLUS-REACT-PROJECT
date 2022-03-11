import React from 'react'
import Hero from '../components/Hero';
import Sector from '../components/Sector';

export default function Home(props) {
  return (
    <div>
      <Hero labelColor='secondary' />
      <Sector />
    </div>
  )
}
