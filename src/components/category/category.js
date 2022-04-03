import {AiFillShopping} from 'react-icons/ai'
import {IoMdBed} from 'react-icons/io'
import {BiRestaurant} from 'react-icons/bi'
import {BsMusicNoteBeamed} from 'react-icons/bs'
const Category = () => {
  return (
    <div>
      <ul className='types'>
          <div className='item'>

          
        <li >
             <AiFillShopping/> Shpos
        </li>
        <li >
            <IoMdBed/> Home Stay
        </li>
        <li >
            <BiRestaurant/> Restaurent
        </li>
        <li>
           <BsMusicNoteBeamed/> Music
        </li>
        </div>
      </ul>
    </div>
  );
};

export default Category;
