import { BASE_URL, PASSWORD, USERNAME, USER_LOGIN_RESOURCE, USER_RESOURCE } from "../config";

export async function createUser(){
    const body = {
    username:USERNAME,
    password:PASSWORD
    }
    console.log(body)
    const resp = await fetch(BASE_URL + USER_RESOURCE,{
        method:'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    })
    console.log(JSON.stringify(await resp.json()))
    if(resp.status != 201){
        throw Error("User not created")
    }
}
export async function deleteUser(token:string){
    const resp = await fetch(BASE_URL + USER_RESOURCE,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(resp.status != 200){
        throw Error("User not deleted")
    }
}
export async function login(){
    const resp = await fetch(BASE_URL + USER_LOGIN_RESOURCE,{
        method:'POST',
        body: JSON.stringify({
            username:USERNAME,
            password:PASSWORD
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(resp.status != 200){
        console.log(JSON.stringify(await resp.json()))
        throw Error("Login failed")
    }
    return (await resp.json()).token
}