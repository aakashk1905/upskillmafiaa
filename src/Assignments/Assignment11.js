import React, { useState, useEffect } from 'react';
import './GoogleFormSubmissions.css';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Assignment11 = () => {
    const [submissions, setSubmissions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);
    const { num } = useParams();
    const urls = {
        '1':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '2':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '3':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '4':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '5':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '6':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '7':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '8':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '9':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '10':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '11':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
        // '12':'https://script.googleusercontent.com/macros/echo?user_content_key=t8Ug3rexDVzblz5NCtmt575TU0gN4O9T8AjgFg2GjMVs_maL_3OvUysomPGpotRFPSUvADSiJf0N83HJNq10QUWEFXE3TEdBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNgprYaaMtMIi-YKm5hNXXDXEk-qy3kj5w3KArsVE0lwb3TJv-qwRC-V-vO1eZJzsGZw_rUiQq3HqhR3d6AvPkzmOp0huZJIVNz9Jw9Md8uu&lib=M8MKFf5y8i0hIVO5acNbzxMOOrhTu63Ts',
    }

    useEffect(() => {
        const url = urls[num];
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                responseData.data.shift();
                setSubmissions(responseData.data);

                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });

    }, [num]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = submissions.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if( !urls.hasOwnProperty(num))return <span style={{color:'white',fontSize:'40px',display:'flex',justifyContent:'center',marginTop:'45vh'}}> Something Went Wrong .... 404</span>;

    if(isLoading)return <span style={{color:'white',fontSize:'40px',display:'flex',justifyContent:'center',marginTop:'45vh'}}> Loading....</span>;


    return (
        <>
            <Helmet>
                <title>Assignment 1 Submissions</title>
            </Helmet>

            <div className='ass-cont'>
                {!verified ? (
                    <div className='email-cont'>
                <span>Click "I agree" if you have submitted your assignment.</span>
                <span className='secondLine'>( It is Recommended to see Submissions if and only if you have submitted your solution, seeing solution before making the submission will not teach you anything.. )</span>
                    <button onClick={()=>setVerified(true)}>I Agree</button>
                </div>
                ) : (
                    <>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Assignment File Link</th>
                                    <th scope="col">Assignment Doc Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="5">Loading Submissions...</td>
                                    </tr>
                                ) : (
                                    currentItems.map((submission, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{submission['name']}</td>
                                            <td>{submission['email']}</td>
                                            {submission.assignmentfile === '' ? (
                                                <td></td>
                                            ) : (
                                                <td><a href={submission.assignmentfile}>View Files...</a></td>
                                            )}
                                            {submission.doclink === '' ? (
                                                <td></td>
                                            ) : (
                                                <td><a href={submission['doclink']}>View Doc...</a></td>
                                            )}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {submissions.length > itemsPerPage && (
                                <ul className="pagination">
                                    {Array.from({ length: Math.ceil(submissions.length / itemsPerPage) }).map((_, index) => (
                                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Assignment11;
