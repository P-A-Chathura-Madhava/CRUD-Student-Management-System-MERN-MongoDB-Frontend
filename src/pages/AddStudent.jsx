import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/reducers/studentSlice";

const AddStudent = () => {

    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent({id, name, address, contact}))
    }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: 001"
            onChange={(e)=>setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: Kasun"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: Bandaragama"
            onChange={(e)=>setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: 077-1234546"
            onChange={(e)=>setContact(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
