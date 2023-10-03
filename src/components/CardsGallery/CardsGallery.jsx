import './CardsGallery.css'
import '../Card/Card'

import Card from '../Card/Card';

const info = [{
    id: 1,
    titulo: 'Harry potter',
    imagen: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.infobae.com%2Fnew-resizer%2FNH5MwulXZiII9HYLItmaO5dJ4XY%3D%2Farc-anglerfish-arc2-prod-infobae%2Fpublic%2F6KUHYVHJDRCLPHZLPK42EVD6HY.jpg&tbnid=jkGgdlCOXv0hRM&vet=12ahUKEwj5x5Cck9OBAxXJjJUCHYouCMsQMygGegQIARB8..i&imgrefurl=https%3A%2F%2Fwww.infobae.com%2Fleamos%2F2023%2F04%2F20%2Fharry-potter-esta-de-nuevo-entre-los-libros-mas-vendidos-cuatro-claves-de-un-exito-eterno%2F&docid=OeNxjcTNTYTAJM&w=1920&h=1080&q=harry%20potter&ved=2ahUKEwj5x5Cck9OBAxXJjJUCHYouCMsQMygGegQIARB8'
},
{
    id: 2,
    titulo: 'Los simpsons',
    imagen: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.infobae.com%2Fnew-resizer%2FNH5MwulXZiII9HYLItmaO5dJ4XY%3D%2Farc-anglerfish-arc2-prod-infobae%2Fpublic%2F6KUHYVHJDRCLPHZLPK42EVD6HY.jpg&tbnid=jkGgdlCOXv0hRM&vet=12ahUKEwj5x5Cck9OBAxXJjJUCHYouCMsQMygGegQIARB8..i&imgrefurl=https%3A%2F%2Fwww.infobae.com%2Fleamos%2F2023%2F04%2F20%2Fharry-potter-esta-de-nuevo-entre-los-libros-mas-vendidos-cuatro-claves-de-un-exito-eterno%2F&docid=OeNxjcTNTYTAJM&w=1920&h=1080&q=harry%20potter&ved=2ahUKEwj5x5Cck9OBAxXJjJUCHYouCMsQMygGegQIARB8'
},
{
    id: 3,
    titulo: 'Friends',
    imagen: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.infobae.com%2Fnew-resizer%2FNH5MwulXZiII9HYLItmaO5dJ4XY%3D%2Farc-anglerfish-arc2-prod-infobae%2Fpublic%2F6KUHYVHJDRCLPHZLPK42EVD6HY.jpg&tbnid=jkGgdlCOXv0hRM&vet=12ahUKEwj5x5Cck9OBAxXJjJUCHYouCMsQMygGegQIARB8..i&imgrefurl=https%3A%2F%2Fwww.infobae.com%2Fleamos%2F2023%2F04%2F20%2Fharry-potter-esta-de-nuevo-entre-los-libros-mas-vendidos-cuatro-claves-de-un-exito-eterno%2F&docid=OeNxjcTNTYTAJM&w=1920&h=1080&q=harry%20potter&ved=2ahUKEwj5x5Cck9OBAxXJjJUCHYouCMsQMygGegQIARB8'
}]


const CardsGallery = () => {
    return (
    <section className="cards-container">
        {
            info.map((item)=>{
                return <Card key={item.id} titulo = {item.titulo} imagen = {item.imagen}/>
            })
        }
    </section>
    )
}

export default CardsGallery;
