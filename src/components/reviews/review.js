import avatar from '../../assets/avatar.jpg'
const Review = () =>{
    return (
    <div className="review-container">
       <div  className="card-container">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
       </div>
    )
}
const Card = () =>{
    return (
    
    <div className="card">
        
        <img className='avatarimg' src={avatar} alt ="image"/> <p> john doe  </p>
        
        <h4>  Great experience   </h4> 
        <p>  I really liked the place lost as it covered all the things i watched</p>
        <article> pushlised at {new Date().getDate()} march </article>
        <button className="btn"> read Review</button>

    </div>
 


    )
}
export default Review;