import QuantityButton from "./QuantityButton.tsx";

export default function WeatherTableRow (){

    return (
        <tr>

            <td>
                <img src={`https://fujifilm-x.com/wp-content/uploads/2020/01/x-t200_thum.jpg`}/>
            </td>
            <td style={{verticalAlign: "middle"}}>「N」が象徴する知性</td>
            <td style={{verticalAlign: "middle"}}> 1</td>
            <td style={{verticalAlign: "middle"}}> 280000</td>
            <td style={{verticalAlign: "middle"}}> <QuantityButton/> </td>
            <td style={{verticalAlign: "middle"}}> 280000</td>

        </tr>

    )
}