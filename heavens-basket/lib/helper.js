// const BASE_URL = 'http://localhost:3000'
export const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"
export const getProducts = async() =>{
    const respone =await fetch(`${NEXT_URL}/api/products`)
    const json = await respone.json()
    return json
}

// import {NEXT_URL} from "file location"