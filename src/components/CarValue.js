import { useSelector } from "react-redux"

function CarValue(){

    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

        return filteredCars.reduce((acc, car) => acc + car.cost, 0)

/*         let cost = 0
        for(let car of filteredCars){
            cost += car.cost
        }
        return cost */ /* ONE POSSIBLE WAY TO DO IT */
    })

    return(
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarValue