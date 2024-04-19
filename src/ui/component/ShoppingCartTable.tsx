import ShoppingCartTableRow from './ShoppingCartTableRow';
export default function ShoppingCartTable(){
    return (
        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature(Min/Max)</th>
                <th>Humidity(%)</th>
                <th>Weather</th>
            </tr>
            </thead>
            <tbody className="table">
            {
                <ShoppingCartTableRow />
            }
            </tbody>
        </table>
    )
}