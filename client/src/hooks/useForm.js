// write your custom hook here to control your checkout form

import {useState} from 'react'

const useForm = (key, initalValue) =>{
    const [values, SetValues] = useState(key, initalValue)
}

export default useForm