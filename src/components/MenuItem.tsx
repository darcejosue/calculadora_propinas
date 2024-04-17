import type {TMenuItem} from '../types';

type MenuItem ={
    item: TMenuItem,
    addItem: (item:TMenuItem) =>  void,
}


export const MenuItem = ({item, addItem} : MenuItem) => {
    const {  name, price } = item;
  return (
    <button className='border-2 border-teal-400 rounded-lg hover:bg-teal-200 w-full p-3 flex justify-between '
    onClick={()=> addItem(item)}>
        <p>{name}</p>
        <p className='font-black'>${price}</p>
    </button >
  )
}
