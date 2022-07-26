import React from "react";

export default function ListingForm({onFormSubmit}) {

    return (
        <div>
            <form onSubmit={onFormSubmit} >
                <input type='text' placeholder="Description" name='description' onChange={e=>e.target.value} />
                <input type='text' placeholder='Image Source' name='image' onChange={e=>e.target.value}/>
                <input type='text' placeholder='Location' name='location' onChange={e=>e.target.value}/>
                <button type="submit">Post New Listing</button>
            </form>
        </div>
    )
}