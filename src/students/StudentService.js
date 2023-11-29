import axios from "axios";

const addStudent = async (student) => {
  console.log(student.id, student.name, student.address, student.contact);
  const response = await axios
    .post("http://localhost:3001/createStudent", {
      id: student.id,
      name: student.name,
      address: student.address,
      contact: student.contact,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const editStudent = async (student) => {
  const response = await axios.put(
    `http://localhost:3001/updateStudent/${student.id}`,
    {
      name: student.name,
      address: student.address,
      contact: student.contact
    }
  )
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>console.log(err));
}

const deleteStudent = async (id) => {
  const response = await axios.delete(
    `http://localhost:3001/deleteStudent/${id}`
  )
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

const getAllStudents = async () => {
  const response = await axios.get("http://localhost:3001/");
  return response.data;
};

const getStudentById = async (id) => {
  const response = await axios.get(
    `http://localhost:3001/getStudent/${id}`
  );
  return response.data;
}

const studentService = { getAllStudents, getStudentById, addStudent, editStudent, deleteStudent };

export default studentService;
