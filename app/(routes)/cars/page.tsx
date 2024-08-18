import CarListPagination from "./_components/car-list-pagination"


const CarsPage = () => {
  return (
    <div className='w-full flex flex-col items-center py-14 gap-14'>
        <h1 className='text-5xl font-bold'>Find your wanted cars</h1>
        <CarListPagination />
    </div>
  )
}

export default CarsPage