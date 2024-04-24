import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const AllFood = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ReadData();
    }, []);


    const ReadData = async () => {
        const res = await axios.get('/api/Read');
        setData(res.data.row);
    };

     const deleteItem = async (id) => {
        await axios.get(`/api/Delete/${id}`);
        await ReadData();
    };




    return (
        <>
            <div className="container m-5 pt-2">
                <h2 className="fs-2 mt-4">All Food List</h2>
                <div className="row">
                     {data.map((item, i) => (
                    <div className="col-md-3 p-3" key={i}>
                        <div className="card">
                            <div className="position-relative">
                                <img
                                    src={item.food_image}
                                    className="card-img-top"
                                    alt="Food Image"
                                />
                                <span className="badge badge-pill badge-primary position-absolute price-badge "
                                      style={{ top: '10px', right: '10px', padding:'8px 14px' }}>BDT:{item.price}</span> {/* Assuming your API response has a 'price' field */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.food_name}</h5> {/* Assuming your API response has a 'title' field */}
                                {/* You can add more fields here as needed */}
                                <div className='d-flex mt-3 '>
                      <Link className="btn btn-warning" to={`/updateiteam/${item['_id']}`}>Edit</Link>
                                    <button onClick={() => deleteItem(item['_id'])}
                                            className='btn btn-danger btn-sm ms-3'>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </>
    );
};

export default AllFood;
