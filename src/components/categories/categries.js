import Img from '../../assets/avatar.jpg'
const Categories= () =>{
    return (
        <div className="categories">
           

            <Card /> 
            
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            
            <Card /> 
            <Card /> 
            <Card /> 
           
            
        </div>
    )
}
const Card = () =>{
    return (
        <div  className='categ-card' >
           

            <img className='img-cteg' src= {Img} alt ="products" />
            <div>

            <p className='text'> {'text'} </p>
            </div>
           
        </div>
    )
}
export default Categories;