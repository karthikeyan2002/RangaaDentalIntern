import React from 'react';
import "./Table.css";

function Table() {
    return (
        <div>

                <Table>
                    <tr style={{backgroundcolor:"#000",color:"#fff"}}>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                    <tr style={{backgroundcolor:"#eeeeee",color:"#000"}} >
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                    </tr>
                    <tr style={{backgroundcolor:"#ffffff",color:"#000"}}>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                    </tr>
                    <tr>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                    </tr>
                </Table>

        </div>
    )
}

export default Table
