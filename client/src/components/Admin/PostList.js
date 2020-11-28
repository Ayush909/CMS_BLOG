import React from 'react'
import { List, Datagrid, TextField, DateField,EditButton, DeleteButton,Pagination } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';


const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10]} {...props} />;


function PostList(props) {

   


  const useStyles = makeStyles({
    button: {
        fontWeight: '200',
        color:"green"
    },
   })

    const MyEditButton = props => {
        const classes = useStyles();
        return <EditButton className={classes.button} {...props} />;
    };


    console.log(props)
    return (
        <List {...props} sort={{field:'title',order:'DESC'}} pagination={<PostPagination/>}>
            <Datagrid>
              
                <TextField source='title'/>
                {/* <TextField source='body'/> */}
                <DateField source='publishedAt' label="Published At"/>
                <MyEditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>
        </List>
    )
}

export default PostList
