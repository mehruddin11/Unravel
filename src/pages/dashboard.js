import {NavBar} from '../components'
import { Category } from '../components';
import {Business} from '../components'
import { Shops } from '../components';
import { Review } from '../components';
import { Categories } from '../components';
import { Fotter } from '../components';
const DashBoard = () =>{
    return (
        <div>
            <NavBar/>
            <Category/>
            <Business/>
            <Shops/>
            <Review/>
            <Categories/>
            <Fotter/>

        </div>
    )
}
export default DashBoard;