import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getStudents, selectAllStudents } from "../store/reducers/studentSlice";
import { Link } from "react-router-dom";

const AllStudents = () => {
  
  const studentSelector = useSelector(selectAllStudents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents());
  }, []);

  console.log(studentSelector.data);
  const students = studentSelector.data;

  // delete a student
  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  }

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student, index)=>{
              return(          
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.contact}</td>
                <td>
                  <Link type="button" className="btn btn-warning" to={`/updateStudent/${student._id}`}>Edit</Link>&nbsp;
                  <button type="button" className="btn btn-danger" onClick={()=> handleDelete(student._id)}>Delete</button>
                </td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
