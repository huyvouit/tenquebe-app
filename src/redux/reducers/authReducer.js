import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const me = createAsyncThunk('auth/principal', async thunkAPI => {
  try {
    const {success, data} = {success: true, data: {}};
    if (success) {
      return data;
    } else {
      return undefined;
    }
  } catch (err) {
    return undefined;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    principal: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
    clearPrincipal: state => {
      state.principal = undefined;
    },
  },
  extraReducers: {
    [me.fulfilled.type]: (state, action) => {
      state.principal = action.payload;
    },
  },
});

export const {setPrincipal, clearPrincipal} = authSlice.actions;

export default authSlice.reducer;
