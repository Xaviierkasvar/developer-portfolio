import {
    Box,
    Typography,
    Container,
    Button,
    FormControl,
    TextField,
    Divider
} from '@mui/material';
import {useRef, useEffect, useState, useContext} from 'react';
import Layout from '../Layout/Layout';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import emailjs from '@emailjs/browser';
import {ColorModeContext} from './_app';

interface ContactBoxProps {
    href: string;
    target?: string;
    t1: string;
    t2: string;
    t3: string;
  }

  interface InputProps {
    name: string;
    label: string;
    type?: string;
    mt?: string;
    multi?: boolean;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  }

// Componente para mostrar información de contacto
const ContactBox: React.FC<ContactBoxProps> = ({ href, target, t1, t2, t3 }) => {
    const colorMode = useContext(ColorModeContext);
    const textColor = colorMode?.mode === 'light' ? 'black' : 'white';
    
    return (
        <Box 
            component={href ? "a" : "div"}
            href={href || undefined}
            target={target || undefined}
            sx={{
                textDecoration: 'none',
                color: textColor,
                display: 'flex',
                flexDirection: 'column',
                mb: 4,
                cursor: href ? 'pointer' : 'default'
            }}
        >
            <Typography variant="h6" sx={{ mb: 1, color: textColor }}>{t1}</Typography>
            <Typography variant="body2" sx={{ color: colorMode?.mode === 'light' ? '#555' : '#aaa', mb: 0.5 }}>{t2}</Typography>
            <Typography variant="body1" sx={{ color: textColor }}>{t3}</Typography>
        </Box>
    );
};

// Componente para campo de texto
const Input: React.FC<InputProps> = ({ name, label, type = 'text', mt = '0', multi = false, value, onChange }) => {
    const colorMode = useContext(ColorModeContext);
    const inputColor = colorMode?.mode === 'light' ? 'black' : 'white';
    
    return (
        <TextField
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            sx={{
                color: inputColor,
                input: { color: inputColor },
                textarea: { color: inputColor },
                width: '100%',
                mt,
                '& .MuiFormLabel-root': { color: colorMode?.mode === 'light' ? '#555' : '#ccc' },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: colorMode?.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                        borderColor: colorMode?.mode === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#0092ff',
                    },
                },
            }}
            label={label}
            multiline={multi}
            rows={multi ? 4 : 1}
            variant="outlined"
        />
    );
};

// Componente para redes sociales
const SocialMedia = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 4, 
            my: 5 
        }}>
            <Box 
                component="a"
                href="https://github.com/Xaviierkasvar"
                target="_blank"
                rel="noreferrer"
                sx={{ 
                    width: 40, 
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { backgroundColor: '#0092ff' }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </Box>
            <Box 
                component="a"
                href="https://www.linkedin.com/in/francisco-javier-castillo-barrios-673004220/"
                target="_blank"
                rel="noreferrer"
                sx={{ 
                    width: 40, 
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#0077b5',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { backgroundColor: '#0092ff' }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </Box>
            <Box 
                component="a"
                href="mailto:javier_castillo_15@hotmail.es"
                sx={{ 
                    width: 40, 
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#ea4335',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { backgroundColor: '#0092ff' }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
            </Box>
        </Box>
    );
};

const Contact = () => {
    const colorMode = useContext(ColorModeContext);
    const ref = useRef();
    const form = useRef();
    const [status, setStatus] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    
    const color = status === 200 ? 'green' : 'red';
    const textColor = colorMode?.mode === 'light' ? 'black' : 'white';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };      

    useEffect(() => {
        // Registrar ScrollTrigger
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.to('.gradientBg2', {
            opacity: 1,
            duration: '.7',
            delay: '.75'
        });

        // Animación del título y descripción
        gsap.to('.t1', {
            opacity: 1,
            y: 0,
            duration: 0.8
        });
        gsap.to('.t2', {
            opacity: 1,
            duration: 0.8,
            delay: 0.4
        });

    }, []);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica de envío omitida por ahora
      };      

    return (
        <Layout
            title='Francisco Javier Castillo | Contacto'
            desc='Contacta con Francisco Javier Castillo Barrios, Ingeniero de Sistemas y desarrollador Full Stack. Correo: javier_castillo_15@hotmail.es | Teléfono: +57 300-433-0873'>

            <Box sx={{
                overflowX: 'hidden'
            }}>
                <Container
                    id='hero'
                    maxWidth='lg'
                    sx={{
                    margin: '0 auto',
                    pt: {
                        xs: '7.5em',
                        sm: '8.5em'
                    },
                    position: 'relative'
                }}>
                    {/* Elementos decorativos */}
                    <Box
                        sx={{
                        width: '150px',
                        height: '150px',
                        zIndex: '0',
                        position: 'absolute',
                        top: {
                            xs: '60%',
                            sm: ' 75%'
                        },
                        transform: 'rotate(15deg)',
                        right: {
                            xs: '80%',
                            sm: '86%'
                        },
                        background: 'transparent',
                        backgroundImage: 'radial-gradient(#0092ff 2px, transparent 0)',
                        backgroundSize: '15px 13px'
                    }}></Box>
                    <Box
                        className='gradientBg2'
                        sx={{
                        width: '90px',
                        height: '90px',
                        zIndex: '0',
                        position: 'absolute',
                        top: {
                            xs: '6%',
                            sm: '5%'
                        },
                        opacity: 0,
                        right: '-4%',
                        background: 'transparent',
                        backgroundImage: 'radial-gradient(#0092ff 2px, transparent 0)',
                        backgroundSize: '15px 13px'
                    }}></Box>
                    
                    {/* Título y descripción */}
                    <Box ref={ref}>
                        <Typography
                            className='t1'
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.4em',
                                sm: '3.4em',
                                md: '3.8em'
                            },
                            color: textColor,
                            textAlign: 'center',
                            transform: 'translateY(40px)',
                            opacity: 0,
                            pt: '1em',
                            fontWeight: '600'
                        }}>
                            Trabajemos juntos en tu próximo proyecto
                        </Typography>
                        <Typography
                            variant='h2'
                            className='secondary t2 t25o0'
                            sx={{
                            textAlign: 'center',
                            pt: '1.5em',
                            margin: '0 auto',
                            fontSize: {
                                xs: '.9em',
                                sm: '1em'
                            },
                            color: textColor,
                            maxWidth: '570px',
                            fontWeight: '300'
                        }}>
                            Si tienes alguna pregunta o necesitas ayuda con tu proyecto, estaré encantado de asistirte.
                        </Typography>
                    </Box>
                    
                    {/* Formulario y datos de contacto */}
                    <Box
                        sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        margin: '0 auto',
                        flexDirection: 'column',
                        width: {
                            xs: '100%',
                            md: '600px'
                        }
                    }}>
                        {/* Formulario */}
                        <Box
                            ref={form}
                            onSubmit={sendEmail}
                            component='form'
                            sx={{
                            mt: '6em',
                            justifyContent: 'space-between'
                        }}>
                            <Typography
                                sx={{
                                textAlign: 'center',
                                pb: '1em',
                                color
                            }}>
                                {status === 200
                                    ? '¡Mensaje enviado! Te responderé lo antes posible.'
                                    : ''}
                                {status > 200 && 'Hubo un error. Asegúrate de completar todos los campos correctamente.'}
                            </Typography>
                            
                            <Box
                                sx={{
                                display: 'flex',
                                gap: '1em',
                                flexDirection: { xs: 'column', sm: 'row' }
                            }}>
                                <Input 
                                    name="user_name" 
                                    label='Nombre' 
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <Input 
                                    name="user_phone" 
                                    type='tel' 
                                    label='Teléfono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Input 
                                name="user_email" 
                                type="email" 
                                label="Email" 
                                mt="1em"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <Input 
                                name="message" 
                                label='Mensaje' 
                                mt='1em' 
                                multi={true} 
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <Button
                                type='submit'
                                variant='contained'
                                sx={{
                                display: 'flex',
                                margin: '4em auto ',
                                padding: '.5em 3.5em',
                                width: {
                                    xs: '100%',
                                    sm: '250px'
                                },
                                backgroundColor: '#0092ff',
                                '&:hover': {
                                    backgroundColor: '#007acc'
                                }
                            }}>
                                Enviar
                            </Button>
                        </Box>

                        <Divider sx={{ my: 5 }} />
                        
                        {/* Información de contacto */}
                        <Box sx={{ my: '3em' }}>
                            <ContactBox 
                                href='mailto:javier_castillo_15@hotmail.es'
                                target='_blank'
                                t1='Contáctame' 
                                t2='Correo electrónico' 
                                t3='javier_castillo_15@hotmail.es'
                            />
                            <ContactBox 
                                href='https://www.google.com/maps/place/Soledad,+Atlántico/'
                                target='_blank'
                                t1='Ubicación'
                                t2='Ubicación actual' 
                                t3='Soledad - Atlántico, Colombia'
                            />
                            <ContactBox 
                                target='_blank'
                                href='https://wa.me/573004330873'
                                t1='Contacto directo' 
                                t2='Número de teléfono' 
                                t3='+57 300-433-0873'
                            />
                        </Box>
                    </Box>
                    
                    {/* Redes sociales */}
                    <SocialMedia />
                </Container>
            </Box>
        </Layout>
    )
}

export default Contact