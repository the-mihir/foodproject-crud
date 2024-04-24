import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateItem = () => {
    let navigate = useNavigate();

    const createData = async (event) => {
        try {
            event.preventDefault();

            let formData = new FormData(event.target);
            let foodName = formData.get("FoodName");
            let foodCode = formData.get("FoodCode");
            let imageUrl = formData.get("ImageUrl");
            let foodCategory = formData.get("FoodCategory");
            let qty = formData.get("qty");
            let price = formData.get("price");

            // Basic form validation
            if (!foodName || !foodCode || !imageUrl || !foodCategory || !qty || !price) {
                // Handle validation errors
                console.error("All fields are required");
                return;
            }

            await axios.post("/api/Create", {
                food_name: foodName,
                food_code: foodCode,
                food_image: imageUrl,
                food_category: foodCategory,
                quantity: qty,
                price: parseFloat(price)
            });

            navigate('/');
        } catch (error) {
            // Handle error
            console.error("Error:", error);
        }
    };

    return (
        <div className="container m-5 pt-2">
            <h2 className="fs-2 mt-4">Create Food Item</h2>
            <form onSubmit={createData}>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <label>Food Name</label>
                        <input className="form-control form-control-lg mt-2 rounded-0" name="FoodName" type="text" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label>Food Code</label>
                        <input className="form-control form-control-lg mt-2 rounded-0" name="FoodCode" type="text" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Food Image Url</label>
                        <input className="form-control form-control-lg mt-2 rounded-0" name="ImageUrl" type="text" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Food Category</label>
                        <input className="form-control form-control-lg mt-2 rounded-0" name="FoodCategory" type="text" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label>Quantity</label>
                        <input className="form-control form-control-lg mt-2 rounded-0" name="qty" type="text" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label>Price</label>
                        <input className="form-control form-control-lg mt-2 rounded-0" name="price" type="text" />
                    </div>
                </div>
                <button type="submit" className="btn btn-lg mt-3 btn-success mt-4">Submit</button>
            </form>
        </div>
    );
};

export default CreateItem;
