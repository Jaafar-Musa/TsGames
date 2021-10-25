import React from 'react'
import ImageCarousel from '../components/Display/ImageCarousel'
import Navbar from '../components/Navigation/Navbar'

const Landing = () => {
    return (
        <section className="Landing">
            <Navbar/>
            <ImageCarousel/>
        </section>
    )
}

export default Landing
