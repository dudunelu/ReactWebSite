import React from 'react'
import CardItem from './CardItem'
import  './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check This out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-3.jpg"
                        text="TEST random words go here hjvhjvhjvjhhjvvmb byrdyd uitdtdf"
                        label="Something"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-9.jpg"
                        text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        label="Something"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="TEST random words go here hjvhjvhjvjhhjvvmb byrdyd uitdtdf"
                        label="Something"
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpg"
                        text="TEST random words go here hjvhjvhjvjhhjvvmb byrdyd uitdtdf"
                        label="Something"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-5.jpg"
                        text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        label="Something"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="TEST random words go here hjvhjvhjvjhhjvvmb byrdyd uitdtdf"
                        label="Something"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
