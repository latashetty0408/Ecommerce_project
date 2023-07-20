export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}
export const RegisterData = (field, value) => {
    return {
        type: 'REGISTER_DATA',
        payload: { field, value },
    }
}