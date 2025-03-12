import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'
import reactLogo from '../../files/react.png';
import Prabal1 from '../../files/prabal1.png'
import Prabal2 from '../../files/prabal2.jpeg';
import './About.css'
import { TypeAnimation } from 'react-type-animation';


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
    <div className='about_body'>
      <img className='profile_pic' src={Prabal1} alt={Prabal1} />
      <div className='about'>
        {name && (
          <div className="about__container">
            <img src={reactLogo} alt={reactLogo} />
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          </div>
        )}

        {role && <h2 className='about__role'>{role}.</h2>}
        <TypeAnimation
          sequence={[
            'I code Web Apps...',
            1000,
            'I code Mobile Apps...',
            1000,
            'I code Responsive websites...',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '1.5em' }}
          repeat={Infinity}
        />
        <p className='about__desc'>
          {description && <TypeAnimation
          splitter={(str) => str.split(/(?= )/)}
          sequence={[description, 5000]}
          speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          omitDeletionAnimation={true}
          style={{ fontSize: 18 }}
        />}</p>
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
    </div>
  )
}

export default About
