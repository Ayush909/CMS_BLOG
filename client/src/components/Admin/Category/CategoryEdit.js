import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const CategoryEdit = props =>{
    
  return (
    <Edit title='Edit Category' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
      </SimpleForm>
    </Edit>
  )
}

export default CategoryEdit