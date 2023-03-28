import User from "./models/users";
import { Op } from 'sequelize';
 

//script for creating admin authomatically id admin is not your database
export async function createAdminUser(){
    const username :string = "admin"
    const primaryProfile: number = 1
    const password :string = "admin@123"
    const status : number = 1
    const email :string = "kenna@example.com"
    const phone:number = 7013677716
    // check if admin exist or not if admin exist it exist function else create admin record 
    const AdminCredentialCount= await User.count({
    where:{
        [Op.or]:[
            {user_name: username}]}})
        
            if(AdminCredentialCount>0){
                return;
            }
            //create object for admin record
            const adminCredential ={
                user_name: username,
                password: password,
                primary_profile: primaryProfile, 
                status: status,
                email: email,
                phone: phone
            }
            //create admin record query
            await User.create(adminCredential) 
        }