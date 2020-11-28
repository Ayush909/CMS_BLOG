import React from 'react'
import {Admin, Resource,Login } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from '../Admin/PostList'
import PostCreate from '../Admin/PostCreate'
import PostEdit from '../Admin/PostEdit'
import CategoryList from '../Admin/Category/CategoryList'
import CategoryCreate from '../Admin/Category/CategoryCreate'
import CategoryEdit from '../Admin/Category/CategoryEdit'
import authProvider from './authProvider'
import MyLayout from '../Mydashboard/MyLayout'


const MyLoginPage = () => (
    <Login
      
        backgroundImage="https://source.unsplash.com/random/1600x900/daily"
        
    />
);

function Mydashboard() {
    return (
        
            <Admin 
                layout={MyLayout} 
                dataProvider={restProvider('http://localhost:3000/api')} 
                authProvider={authProvider}
                loginPage={MyLoginPage}
            >
                <Resource 
                    name="posts" 
                    list={PostList} 
                    create={PostCreate} 
                    edit={PostEdit}
                />
                
                <Resource
                    name="categories"
                    list={CategoryList}
                    create={CategoryCreate}
                    edit={CategoryEdit}
                />
            </Admin>
                
    )
}

export default Mydashboard
