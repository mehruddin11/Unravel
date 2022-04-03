import Img from '../../assets/fotter.jpg'
const Fotter = () =>{
    return (
        <div >
         <img className='fotter-img' src = {Img} alt = "fotter" />
         
            <div className='line'>
                <hr></hr>
            </div>
         <div className='fotter-text'>
             <p> Unravel for Business </p> <p> terms and condtions | privacy | 2022|Unravel</p>
             </div>
        </div>
    )
}
export default Fotter;