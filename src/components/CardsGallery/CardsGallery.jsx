import './CardsGallery.css'
import '../cards/Card'
import Card from '../cards/Card';

const CardsGallery = () => {
    return (
    <section className="cards-container">
        <Card titulo= 'hola'/>
        <Card titulo= 'los simpsons'/>
        <Card titulo= 'chau'/>
    </section>
    )
}

export default CardsGallery;