import * as React from 'react';
import {AppBar} from 'react-admin';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props} color="default">
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            {/* <img src="https://marmelab.com/react-admin/assets/logo.svg" /> */}
            <span className={classes.spacer} />
        </AppBar>
    );
};



// const MyAppBar = props => (
//     <AppBar {...props} color="default" position="fixed" >
//         <Toolbar>
//             <Typography variant="h6" id="react-admin-title" />
//             {/* <img src="https://marmelab.com/react-admin/assets/logo.svg" /> */}
//         </Toolbar>
        
//     </AppBar>
// );

export default MyAppBar;

