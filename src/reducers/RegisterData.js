const initialState = {
  UserName: "",
  email: "",
  password: "",
};
const RegisterFormData = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_DATA":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

export default RegisterFormData;
