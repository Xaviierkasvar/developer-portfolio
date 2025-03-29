import { Box, Typography, Button } from '@mui/material';
import { IProjectCard } from '../../../Types/Types';
import { btnStyles } from '../Hero/Hero';
import { useState } from 'react';

const ProjectCard = ({
  isReversed,
  img,
  className,
  repoUrl,
  siteUrl,
  title,
  description
}: IProjectCard) => {
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        my: { xs: '2em', sm: '1em', md: '3em' },
        flexDirection: { xs: 'column', md: isReversed ? 'row' : 'row-reverse' },
        alignItems: 'center',
        transform: isReversed ? 'translateX(-150%)' : 'translateX(150%)'
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '600px' },
          minWidth: { xs: 'auto', sm: '250px', md: '390px' },
          height: { xs: '250px', sm: '350px', md: '400px' },
          position: 'relative',
          cursor: 'pointer',
          zIndex: { xs: 0, md: isHoveringImage ? 2 : 0 },
          transition: 'z-index 0.01s'
        }}
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
      >
        <img 
          alt="Project Image" 
          className="img1" 
          src={`${img}`}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            borderRadius: '6px',
            transition: 'transform 0.3s ease-in-out',
            transform: isHoveringImage ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </Box>
      <Box
        sx={{
          borderRadius: '6px',
          width: { xs: '100%', md: 'auto' }, 
          position: "relative",
          transform: { 
            xs: 'translateX(0)',
            md: isReversed ? 'translateX(-25%)' : 'translateX(25%)' 
          },
          maxWidth: '600px',
          padding: { xs: '1.5em 1em', md: '2em 1.5em' },
          textAlign: 'left',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          background: 'white',
          color: 'black',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          mt: { xs: '-1.5em', md: 0 },
          zIndex: { xs: 1, md: isHoveringImage ? 0 : 1 },
          transition: 'z-index 0.01s',
          cursor: 'default'
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Typography
            color="black"
            sx={{ 
              fontSize: { xs: '1.2em', sm: '1.4em' }, 
              fontWeight: '500', 
              pb: '.25em' 
            }}
          >
            {title}
          </Typography>
          <Typography
            color="black"
            variant="h3"
            sx={{ 
              fontSize: { xs: '.83em', sm: '.9em' }, 
              fontWeight: '300',
              display: '-webkit-box',
              WebkitLineClamp: { xs: 4, sm: 'none' },
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              gap: '.5em',
              display: 'flex',
              flexWrap: 'wrap',
              mt: '1em',
              justifyContent: { xs: 'space-between', sm: 'flex-start' }
            }}
          >
            {siteUrl && siteUrl !== "#" && (
              <a 
                href={`${siteUrl}`} 
                rel="noreferrer" 
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="contained"
                  sx={{
                    ...btnStyles,
                    padding: '.5em .8em',
                    color: 'white',
                    border: '1px solid #0092ff',
                    minWidth: { xs: '120px', sm: 'auto' }
                  }}
                >
                  <Typography fontSize="12px">
                    Visitar sitio
                  </Typography>
                </Button>
              </a>
            )}
            {repoUrl && repoUrl !== "#" && (
              <a 
                href={`${repoUrl}`} 
                rel="noreferrer" 
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="text"
                  sx={{
                    ...btnStyles,
                    padding: '.5em .8em',
                    color: '#0092ff',
                    minWidth: { xs: '120px', sm: 'auto' },
                    ':hover': {
                      color: '#0092ff'
                    }
                  }}
                >
                  <Typography fontSize="12px">
                    Chequear código
                  </Typography>
                </Button>
              </a>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;