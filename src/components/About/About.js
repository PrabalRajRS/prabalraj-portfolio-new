import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'
import reactLogo from '../../files/react.png';
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  const handleDownload = async () => {
    await fetch(resume).then(response => {
      response.blob().then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'PRABAL_RAJ.pdf';
        a.click();
      });
    });
  };

  return (
    <div className='about center card'>
      {name && (
        <div className="about__container">
          <img src={reactLogo} alt={reactLogo} />
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        </div>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <span type='button'
            role="button"
            className='btn btn--outline'
            onKeyDown={handleDownload}
            tabIndex={0}
            onClick={handleDownload}>
            Resume
          </span>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                aria-label='github'
                rel="noreferrer"
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
