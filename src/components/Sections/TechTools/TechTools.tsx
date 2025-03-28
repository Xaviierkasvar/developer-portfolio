import { Container, Typography, Grid, Divider, Box } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../pages/_app';

// Define la interfaz de props. La propiedad iconsArray es opcional.
interface TechToolsProps {
  iconsArray?: any[];
}

const TechTools: React.FC<TechToolsProps> = ({ iconsArray }) => {
  const colorMode = useContext(ColorModeContext);

  // Si no se pasa iconsArray, se usan los arrays predeterminados:
  const frontendTools = [
    { title: "HTML", svg: "/icons/html.svg" },
    { title: "CSS", svg: "/icons/css.svg" },
    { title: "JavaScript ES6", svg: "/icons/javascript.svg" },
    { title: "Vue 3", svg: "/icons/vue.svg" },
    { title: "React", svg: "/icons/react.svg" },
    { title: "React Native", svg: "/icons/reactnative.svg" },
    { title: "Next.js", svg: "/icons/nextjs.svg" },
    { title: "Angular", svg: "/icons/angular.svg" },
    { title: "Bootstrap", svg: "/icons/bootstrap.svg" },
    { title: "Ionic", svg: "/icons/ionic.svg" }
  ];

  const backendTools = [
    { title: "PHP", svg: "/icons/php.svg" },
    { title: "Laravel", svg: "/icons/laravel.svg" },
    { title: "Python", svg: "/icons/python.svg" },
    { title: "Java", svg: "/icons/java.svg" },
    { title: "Spring Boot", svg: "/icons/spring.svg" },
    { title: "Node.js", svg: "/icons/nodejs.svg" },
    { title: "Express.js", svg: "/icons/express.svg" },
    { title: "SQL Server", svg: "/icons/sqlserver.svg" },
    { title: "PostgreSQL", svg: "/icons/postgresql.svg" },
    { title: "MySQL", svg: "/icons/mysql.svg" }
  ];

  const devopsTools = [
    { title: "Azure DevOps", svg: "/icons/azure.svg" },
    { title: "Git", svg: "/icons/git.svg" },
    { title: "Docker", svg: "/icons/docker.svg" },
    { title: "Swagger", svg: "/icons/swagger.svg" },
    { title: "Postman", svg: "/icons/postman.svg" },
    { title: "NGINX", svg: "/icons/nginx.svg" },
    { title: "Ngrok", svg: "/icons/ngrok.svg" },
    { title: "AWS", svg: "/icons/aws.svg" }
  ];

  // Puedes usar la prop iconsArray para sobrescribir o complementar los arrays
  // si está definida. Por ejemplo, podrías hacer:
  // const tools = iconsArray || frontendTools;
  // En este ejemplo se mantienen los arrays por separado.

  // Componente reutilizable para mostrar un icono
  const TechIcon = ({ title, svg }: { title: string; svg: string }) => (
    <Grid item xs={6} sm={4} md={3} lg={2} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Box
          sx={{
            width: { xs: '35px', sm: '60px' },
            height: { xs: '40px', sm: '60px' },
            margin: '0 auto',
            mb: 1,
          }}
        >
          <img
            src={svg}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            onError={(e) => {
              console.error(`Failed to load icon: ${svg}`);
              (e.target as HTMLImageElement).src = '/icons/default.svg';
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: '.86em', sm: '1em' },
            color: colorMode?.mode === 'dark' ? 'white' : 'black',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Grid>
  );

  return (
    <>
      <Container id="skills" maxWidth="lg" sx={{ margin: '0 auto', py: '6em' }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.2em', sm: '2.5em', md: '3em' },
              color: colorMode?.mode === 'dark' ? 'white' : 'black',
            }}
            fontWeight="600"
          >
            Habilidades Técnicas
          </Typography>
        </Box>

        {/* Frontend Tools */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '.8em', sm: '1em' },
              color: colorMode?.mode === 'dark' ? 'white' : 'black',
            }}
          >
            Tecnologías de desarrollo Frontend
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={3} sx={{ mb: 6 }}>
          {frontendTools.map((item) => (
            <TechIcon key={item.title} title={item.title} svg={item.svg} />
          ))}
        </Grid>

        {/* Backend Tools */}
        <Box sx={{ textAlign: 'center', mb: 4, mt: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '.8em', sm: '1em' },
              color: colorMode?.mode === 'dark' ? 'white' : 'black',
            }}
          >
            Tecnologías de Backend
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={3} sx={{ mb: 6 }}>
          {backendTools.map((item) => (
            <TechIcon key={item.title} title={item.title} svg={item.svg} />
          ))}
        </Grid>

        {/* DevOps Tools */}
        <Box sx={{ textAlign: 'center', mb: 4, mt: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '.8em', sm: '1em' },
              color: colorMode?.mode === 'dark' ? 'white' : 'black',
            }}
          >
            DevOps e Infraestructura
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={3}>
          {devopsTools.map((item) => (
            <TechIcon key={item.title} title={item.title} svg={item.svg} />
          ))}
        </Grid>
      </Container>
      <Divider />
    </>
  );
};

export default TechTools;
