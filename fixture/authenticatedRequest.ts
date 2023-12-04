import { APIRequestContext } from "@playwright/test";

export class AuthenticatedRequest{
    constructor(private request:APIRequestContext,private token:string){}
    async post<T>(url:string,body:T){
        return await this.request.post(url,{
            data:body,
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
    }
}