

export const ADD_ACCOUNT='ADD_ACCOUNT';
export const addAccount = (code, descr) => {
  return {
    type: ADD_ACCOUNT,
    descr: descr,
    code: code
  }
};

export const SELECT_ACCOUNT='SELECT_ACCOUNT';
export const selectAccount = code => {
  return {
    type: SELECT_ACCOUNT,
    code
  }
}