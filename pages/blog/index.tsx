import React from 'react'
import Layout from '../../Layout/Layout'
import {Box, Button, TextField, Typography} from '@mui/material'

const Index = () => {
    return (
        <Layout
            navbarSx={{
            opacity: 1,
            // background: '#000000eb',
        }}
            title='Francisco Javier Castillo | Blog de Desarrollo'>
            <main>

                <Box
                    sx={{
                      backgroundSize:'cover',
                      backgroundRepeat:'no-repeat',
                      backgroundPosition: 'center',
                      backgroundImage: 'url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                      height: '500px',
                      width: '100%'
                }}>
                  <Box sx={{
                    alignItem:'center',
                    flexDirection:'column',
                    maxWidth:'md',
                    textAlign:'center',
                    display:'flex',
                    justifyContent:'center',
                    margin:'0 auto',
                    height:'100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '2rem'
                  }}>

                  <Typography component='h1' sx={{
                    color:'white',
                    fontSize:{xs:'1.5em',md:'2em',lg:'2.5em'},
                    fontWeight:'bold',
                    py:'.5em'
                  }}>
                          Artículos sobre Desarrollo Web y Tecnología
                  </Typography>
                  <Typography component='h4' sx={{
                    color:'#e0e0e0',
                    fontWeight:'300',
                    maxWidth:'sm',
                    margin:'0 auto',
                    textAlign:'center'
                  }}>
                      Comparto conocimientos y experiencias sobre desarrollo full stack, buenas prácticas de programación y las últimas tendencias tecnológicas. Encuentra artículos para todos los niveles, desde principiantes hasta desarrolladores experimentados.
                  </Typography>
                  <Box sx={{margin:'0 auto',pt:2,display:'flex'}}>
                  <TextField 
                    placeholder='Correo electrónico'
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0092ff',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white',
                      },
                    }}
                  />
                  <Button 
                    variant="contained" 
                    sx={{
                      backgroundColor: '#0092ff',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0077cc',
                      }
                    }}>
                    Suscribirse
                  </Button>
                  </Box>
                  </Box>

                </Box>
            </main>
        </Layout>
    )
}

export default Index