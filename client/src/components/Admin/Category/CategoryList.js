import React from 'react'
import { List, Datagrid, TextField, DateField,EditButton, DeleteButton } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';

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
        <List {...props}>
            <Datagrid>
               
                <TextField source='name'/>
               
                <MyEditButton basePath='/categories' />
                <DeleteButton basePath='/categories' />
            </Datagrid>
        </List>
    )
}

export default PostList
