import { shops } from "../../assets/shops"

const Shops = () =>{
    return (
        <div className="shops-container">
            {
                shops.map((shope)=>{
                    const {id , img} = shope
                    return <div id= {id} >
                        <img src ={img} alt ="images" />
                    </div>
                })
            }
        </div>
    )
}
export default Shops