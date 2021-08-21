import React from 'react';
import { Box } from '@material-ui/core';
import Page from '../../components/Page';

const Home = () => {

    return(
        <Page title="Home"> 
            <Box
                display="flex"
                flexDirection="column"
                height="80%"
                justifyContent="center"
            >
                {[...new Array(50)]
                    .map(
                        () => { 
                            return (
                                `Cras mattis consectetur purus sit amet fermentum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur etc...`
                            )
                        }
                    )
                }    
            </Box>
        </Page>
    )
}

export default Home;