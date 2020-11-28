import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput,ImageInput,ImageField,FileInput,FileField } from 'react-admin'

const PostEdit = props =>{



  return (
    <Edit undoable={false} title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' fullWidth='true'/>
        <TextInput source='subtitle' fullWidth='true'/>
        <TextInput fullWidth="true" multiline source='body' />
        <DateInput label='Published At' source='publishedAt' />
              

      </SimpleForm>
    </Edit>
  )
}

export default PostEdit