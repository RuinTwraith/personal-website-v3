import Section from '../../components/Section'
import { photos } from '../../data/data.json'
import './about.scss'
import Image from '../../components/Image'

const About = () => {
  return (
    <div className="about full-width">
      <div className="about__container">
        <div className="profile__container">
          <div className="profile__text">
            <p className="profile__line">
              Hello 👋 My name is Dibbendu Koley. I am from New Delhi, India.
              I'm a Frontend Web Developer with several years of work
              experience.
            </p>
            <p className="profile__line">
              Over the years, I have worked on many projects spanning multiple
              domains and using various tech stacks. From crafting intuitive
              user interfaces to optimizing website performance, I am passionate
              about delivering seamless and engaging digital experiences.
            </p>
            <p className="profile__line">
              You can find my extensive portfolio on{' '}
              <a
                href="https://github.com/RuinTwraith"
                target="_blank"
                rel="noreferrer"
                className="link link-light"
              >
                GitHub
              </a>
              , showcasing not only my skills but also my commitment to clean
              and efficient code. Let's connect and explore the endless
              possibilities of the web together!
            </p>
          </div>
          <Image file="me" path={`photos/me.webp`} />
        </div>
        <Section {...photos} />
      </div>
    </div>
  )
}

export default About
