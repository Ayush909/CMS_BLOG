import React, { useEffect } from 'react'
import { Create, SimpleForm, TextInput, SelectInput} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useState } from 'react';

const PostCreate = (props) => {

  // const useStyles = makeStyles({
  //   root:{
  //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //     color: '#fff'
  //   }
  // });
  
  // const MyTextInput = props => {
  //   const classes = useStyles();
    
  //   return (
  //           <TextInput  
  //               source='title'
  //               classes={{
  //                 root : classes.root
  //               }} 
  //               {...props} 
                
  //           />
  //         ) 
  // };
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    axios.get('/api/categories')
    .then(result=>{
      console.log(result)
      setCategories(result.data.map(cat=> cat))
    })
    .catch(err=>{
      console.log(err)
    })
  },[])


  console.log(categories)

  return (
    <Create title='Create a Post' {...props} className="container">
      <SimpleForm style={{textAlign:'center'}}>
        <TextInput source='title' fullWidth='true'/>
        <TextInput source='subtitle' fullWidth='true'/>
        <TextInput multiline source='body' fullWidth='true' />
        <TextInput source='author' fullWidth='true'/>

        <SelectInput source="category" choices={categories} fullWidth='true' />

        

      </SimpleForm>
    </Create>
  )
}

export default PostCreate