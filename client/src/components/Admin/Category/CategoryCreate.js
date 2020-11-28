import React from 'react'
import { Create, SimpleForm, TextInput, DateInput ,ImageInput,ImageField} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles';


const CategoryCreate = (props) => {

  
  return (
    <Create title='Create a Category' {...props} className="container">
      <SimpleForm style={{textAlign:'center'}}>
        <TextInput source='name' fullWidth='true'/>

      </SimpleForm>
    </Create>
  )
}

export default CategoryCreate