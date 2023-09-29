import './Card.css'

const Card =(props) =>{
  const { titulo, imagen } = props;

  return (
    //jsx
    <article className='card'>
      <div className='card-header'>
        <img src={imagen} alt={`imagen de ${titulo}`} />
      </div>
    
      <div className='card-body'>
        <h2>{titulo}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quo delectus enim tenetur a!</p>
      </div>
    </article>
  )
};

export default Card;