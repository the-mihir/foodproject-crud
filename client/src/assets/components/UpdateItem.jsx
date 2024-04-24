import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [existingItem, setExistingItem] = useState(null);

    const fetchExistingInfo = async () => {
        try {
            const response = await axios.get(`/api/UpdateById/${id}`);
            setExistingItem(response.data['row'][0]);
        } catch (error) {
            console.error('Error fetching item data:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchExistingInfo();
        };
        fetchData();
    }, [id]);

    const updateData = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const foodName = formData.get('FoodName');
            const foodCode = formData.get('FoodCode');
            const imageUrl = formData.get('ImageUrl');
            const foodCategory = formData.get('FoodCategory');
            const qty = formData.get('qty');
            const price = formData.get('price');

            if (!foodName || !foodCode || !imageUrl || !foodCategory || !qty || !price) {
                console.error('All fields are required');
                return;
            }

            await axios.post(`/api/Update/${id}`, {
                food_name: foodName,
                food_code: foodCode,
                food_image: imageUrl,
                food_category: foodCategory,
                quantity: qty,
                price: parseFloat(price)
            });

            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            // Optionally, provide user feedback about the error
        }
    };

    return (
        <div className="container m-5 pt-2">
            <h2 className="fs-2 mt-4">Update Food Item</h2>
            <form onSubmit={updateData}>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <label>Food Name</label>
                        <input
                            defaultValue={existingItem?.food_name || ''}
                            className="form-control form-control-lg mt-2 rounded-0"
                            name="FoodName"
                            type="text"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Food Code</label>
                        <input
                            defaultValue={existingItem?.food_code || ''}
                            className="form-control form-control-lg mt-2 rounded-0"
                            name="FoodCode"
                            type="text"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Image URL</label>
                        <input
                            defaultValue={existingItem?.food_image || ''}
                            className="form-control form-control-lg mt-2 rounded-0"
                            name="ImageUrl"
                            type="text"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Food Category</label>
                        <input
                            defaultValue={existingItem?.food_category || ''}
                            className="form-control form-control-lg mt-2 rounded-0"
                            name="FoodCategory"
                            type="text"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Quantity</label>
                        <input
                            defaultValue={existingItem?.quantity || ''}
                            className="form-control form-control-lg mt-2 rounded-0"
                            name="qty"
                            type="text"
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Price</label>
                        <input
                            defaultValue={existingItem?.price || ''}
                            className="form-control form-control-lg mt-2 rounded-0"
                            name="price"
                            type="text"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-lg mt-3 btn-success mt-4">Update</button>
            </form>
        </div>
    );
};

export default UpdateItem;
