import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  editStudent,
  getStudentById,
  selectAllStudents,
} from "../store/reducers/studentSlice";

const EditStudent = () => {

  const {id} = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const studentData = useSelector(selectAllStudents)
  const student = studentData.data;
  
  useEffect(()=>{
    dispatch(getStudentById(id));
  },[id])
  
  // console.log(student);
  // console.log(student.name);
  // console.log(student.address);
  // console.log(student.contact);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  // console.log(name);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editStudent({id, name, address, contact}))
  }







  // const dispatch = useDispatch();
  // const studentData = useSelector(selectAllStudents);
  // const student = studentData.data;
  
  // useEffect(()=>{
  //   dispatch(getStudentById(id));
  // }, [])
  
  // console.log(student.id);


  //   const [name, setName] = useState();
  //   const [address, setAddress] = useState();
  //   const [contact, setContact] = useState();


  //   const handleSubmit = (e) => {
  //       e.preventDefault();
  //   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Kasun"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: Bandaragama"
            onChange={(e)=>setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
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

export default EditStudent;
