import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState: { sendMessageIsOpen: false, selectedMail: null, mailCount: 1 },

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    setMailCount: (state, action) => {
      state.mailCount = action.payload;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail, setMailCount } =
  mailSlice.actions;

export const selectOpenMail = (state) => {
  return state.mail.selectedMail;
};
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectMailCount = (state) => state.mail.mailCount;

export default mailSlice.reducer;
