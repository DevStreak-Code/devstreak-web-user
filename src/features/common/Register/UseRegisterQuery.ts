import { useMutation } from "@tanstack/react-query"
import type { RegisterFormData } from "./UseRegister"
import axios from "axios"


const endPoint = "https://devstreak-be.onrender.com/register"
const registerUser = async (formData: RegisterFormData) =>{
    const res = await axios.post(endPoint, formData)
    return res.data
}

export const useRegisterMutation = () => {
    return useMutation ({
        mutationFn: registerUser,   
    })
}