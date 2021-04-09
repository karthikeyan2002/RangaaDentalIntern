import React from 'react';
import "./Table.css";
import Header from "./Header";
import {getPatients} from "./utils/index";

function Table() {
    return (
        <div className="Dashboard">
                <Header />
                <table>
                    <tr style={{backgroundColor:'black',color:'white'}}>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Complaint</th>
                        <th>Add</th>
                                            
                    </tr>
                    <tr>
                        <td>Tarun kishore</td>
                        <td>123456789</td>
                        <td>19</td>
                        <td>tarun1000@gmail.com</td>
                        <td>complaint----</td>
                        <td>edit</td>

                    </tr>
                    <tr>
                        <td>Avinash</td>
                        <td>987654321</td>
                        <td>20</td>
                        <td>avinashr@gmail.com</td>
                        <td>complaint----</td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                        <td>18</td>
                        <td>bkarthi1000@gmail.com</td>
                        <td>complaint----</td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                        <td>18</td>
                        <td>bkarthi1000@gmail.com</td>
                        <td>complaint </td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                        <td>18</td>
                        <td>bkarthi1000@gmail.com</td>
                        <td>asfasfasf</td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                        <td>18</td>
                        <td>bkarthi1000@gmail.com</td>
                        <td>asfasfasf</td>
                        <td>edit</td>
                    </tr>
                    <tr>
                        <td>Karthikeyan</td>
                        <td>9080585673</td>
                        <td>18</td>
                        <td>bkarthi1000@gmail.com</td>
                        <td>asfasfasf</td>
                        <td>edit</td>
                    </tr>
                                       
                </table>
        </div>
    )
}

export default Table
