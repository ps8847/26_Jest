import React from "react";

export default class Users extends React.Component{
    getUserList1(){
        return "user list";
    }
    getUserList2(prop){
        return prop;
    }
    render(){
        return (
            <div>
                <h2>Users Class Component</h2>
            </div>
        )
    }
}