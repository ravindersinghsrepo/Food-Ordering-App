import ItemList from "./ItemList"

export default function RestaurantCategory({data ,setShowIndex , showItem}){

    function handleClick(){
        setShowIndex()
    }
    return(
        <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span className='text-2xl'>{!showItem?'+':'-'}</span>
        </div>

        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
    )
}