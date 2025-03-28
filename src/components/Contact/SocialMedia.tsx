import {Box} from "@mui/material"
import SocialMediaIcon from './SocialMediaIcon';

export const SocialMediaArray = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/francisco-javier-castillo-barrios-673004220/',
        color: '#0e76a8',
        svg: 'https://www.svgrepo.com/show/138936/linkedin.svg'
    }, 
    {
        color: '#171515',
        title: 'Github',
        href: 'https://github.com/Xaviierkasvar',
        svg: 'https://www.svgrepo.com/show/343674/github.svg'
    },
    {
        title: 'Email',
        href: "mailto:javier_castillo_15@hotmail.es",
        color: '#0078D4',
        svg: 'https://www.svgrepo.com/show/373299/email.svg'
    }
]

const SocialMedia = () => {
    return (
        <Box sx={{
            pt: '1em',
            pb:'3em',
            display: 'flex'
        }}>
            {SocialMediaArray.map(icon => {
                return <SocialMediaIcon
                    svg={icon.svg}
                    key={icon.href}
                    title={icon.title}
                    href={icon.href}
                    color={icon.color}/>
            })}
        </Box>
    )
}

export default SocialMedia