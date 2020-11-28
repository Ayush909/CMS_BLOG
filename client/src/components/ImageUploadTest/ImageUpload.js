import React, { useState } from 'react'
import axios from 'axios'

function ImageUpload() {

    const [singleFile,setSingleFile] = useState(null)
    const [MultipleFiles,setMultipleFiles] = useState(null)

    const singleFileUploadHandler = (  ) => {
        const data = new FormData();// If file selected
        if ( singleFile ) {
            data.append( 'profileImage', singleFile,singleFile.name );
            // for (const entry of data.entries())
            //     {
            //         console.log(entry)
            //     }
            axios.post('/upload/profile-img-upload', data, {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then( ( response ) => {
                if ( 200 === response.status ) {
                // If file size is larger than expected.
                if( response.data.error ) {
                    if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                    console.log('Max size: 2MB', 'red' );
                    } else {
                        console.log( response.data );// If not the given file type
                        console.log( response.data.error, 'red' );
                    }
                } else {
                // Success
                    let fileName = response.data;
                    console.log( 'fileName', fileName );
                    console.log( 'File Uploaded', '#3089cf' );
                }
           }
          }).catch( ( error ) => {
          // If another error
         console.log( error, 'red' );
         });
        } else {
         // if file not selected throw error
         console.log( 'Please upload file', 'red' );
        }};


    const singleFileHandler = (e) =>{
        setSingleFile(e.target.files[0])
    }

    const multipleFileChangedHandler = (e) => {
            
       setMultipleFiles(e.target.files)
       
		console.log( e.target.files );
    };
    
    const multipleFileUploadHandler = () => {
		const data = new FormData();
        let selectedFiles = MultipleFiles;
        
        // If file selected
		if ( selectedFiles ) {
			for ( let i = 0; i < selectedFiles.length; i++ ) {
				data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
            }

            for (const entry of data.entries()) {
                console.log('inside formData:',entry)
            }


			// axios.post( '/upload/multiple-file-upload', data, {
			// 	headers: {
			// 		'accept': 'application/json',
			// 		'Accept-Language': 'en-US,en;q=0.8',
			// 		'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
			// 	}
			// })
			// .then( ( response ) => {
			// 		console.log( 'res', response );
			// 		if ( 200 === response.status ) {
			// 			// If file size is larger than expected.
			// 			if( response.data.error ) {
			// 				if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
			// 					console.log( 'Max size: 2MB', 'red' );
			// 				} else if ( 'LIMIT_UNEXPECTED_FILE' === response.data.error.code ){
			// 					console.log( 'Max 4 images allowed', 'red' );
			// 				} else {
			// 					// If not the given ile type
			// 					console.log( response.data.error, 'red' );
			// 				}
			// 			} else {
			// 				// Success
			// 				let fileName = response.data;
			// 				console.log( 'fileName', fileName );
			// 				console.log( 'File Uploaded', '#3089cf' );
			// 			}
			// 		}
			// 	}).catch( ( error ) => {
			// 	// If another error
			// 	console.log( error, 'red' );
			// });
		} else {
			// if file not selected throw error
			console.log( 'Please upload file', 'red' );
		}
	};

    return (
        <div className="text-center mt-4">
            <label htmlFor="uploadImage">Upload an image: </label>
            <br/>
            <input type="file" name="profileImage" id="uploadImage" onChange={ e => singleFileHandler(e)}/>
            <br/>
            <br/>
            <button className="btn btn-info" onClick={singleFileUploadHandler}>Single Upload!!!</button>
            <br/>
            <br/>

            <input type="file" multiple name="galleryImage" onChange={(e)=>multipleFileChangedHandler(e)}/>
            <div className="mt-5">
                <button className="btn btn-info" onClick={multipleFileUploadHandler}>Multiple Upload!</button>
            </div>

        </div>
    )
}

export default ImageUpload
