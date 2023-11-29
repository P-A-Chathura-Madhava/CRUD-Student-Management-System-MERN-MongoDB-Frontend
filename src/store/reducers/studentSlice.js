import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentService from "../../students/StudentService";

export const addStudent = createAsyncThunk(
  'addStudent',
  async (studentData, thunkAPI) => {
    try {
      return await studentService.addStudent(studentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const editStudent = createAsyncThunk(
  'editStudent',
  async (student, thunkAPI) => {
    try {
      return studentService.editStudent(student)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const deleteStudent = createAsyncThunk(
  'deleteAStudent',
  async (id, thunkAPI) => {
    try {
      return await studentService.deleteStudent(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getStudents = createAsyncThunk("getStudents", async (thunkAPI) => {
  try {
    return await studentService.getAllStudents();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getStudentById = createAsyncThunk('getStudentById', async (id, thunkAPI)=>{
  try {
    return await studentService.getStudentById(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const studentSlice = createSlice({
  name: "student-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = "completed";
        state.data = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = "Something went wrong";
      })
      .addCase(addStudent.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.loading = 'completed';
        state.createdStudent = action.payload;
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = 'Something went wrong';
      })
      .addCase(getStudentById.pending, (state, action)=>{
        state.loading = 'pending';
      })
      .addCase(getStudentById.fulfilled, (state, action)=>{
        state.loading = 'completed';
        state.data = action.payload;
      })
      .addCase(getStudentById.rejected, (state, action)=>{
        state.loading = 'rejected';
        state.error = 'Something went wrong';
      })
      .addCase(deleteStudent.pending, (state, action)=> {
        state.loading = 'pending';
      })
      .addCase(deleteStudent.fulfilled, (state, action)=>{
        state.loading = 'completed';
        state.deletedStudent = action.payload;
      })
      .addCase(deleteStudent.rejected, (state, action)=>{
        state.loading = 'rejected';
        state.error = 'Something went wrong';
      });
  },
});

export const selectAllStudents = (store) => store.get;
export default studentSlice.reducer;
