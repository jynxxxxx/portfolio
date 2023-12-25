import smallimg from '../assets/images/self_h1ucxz_c_scale,w_200.png'
import medimg from '../assets/images/self_h1ucxz_c_scale,w_366.png'
import lgimg from '../assets/images/self_h1ucxz_c_scale,w_476.png'
import '../style/aboutme.css'

export default function AboutMe() {

  return (
    <>
      <div className="section">
        <div className="sectionTitle">ABOUT ME</div>
        <div className="separate">_____</div>
      </div>
      <div className="aboutctn">
        <div className="aboutme">
          <picture className="selfpic">
            <source
              media="(max-width: 476px)"
              srcSet={smallimg} />

            <source
              media="(max-width: 768px)"
              srcSet={medimg} />

            <img
              src={lgimg}
              alt="web developer Julia Kim" />
          </picture>
          <div className="aboutintro">
            <h2>Welcome to my corner of the digital world! </h2>
            I am  a driven self-taught web developer who's on a mission to break into the industry. I started this incredibly fun (and at times, quite stressful) journey in June 2023, armed with nothing but sheer determination and an insatiable curiosity about web development. I have struggled, coded, failed, and recoded countless times trying to learn and master the intricacies of HTML, CSS, and JavaScript.
          </div>
        </div>

        <div className='aboutblurbs'>
          <div>I'm a detail-oriented full stack developer with a love for turning ideas into seamless, user-friendly experiences. </div>
          <div> I am currently based out of Seoul, South Korea after having lived in the US for over 20 years.</div>
          <div> I have traveled to 26 different countries so far (a lot of it solo!) and all this experience allows me to bring a unique perspective to every project I undertake.</div>
          <div>Whether it's crafting elegant front-end interfaces or optimizing back-end functionalities, I thrive on the challenge of building meaningful solutions. Let's code something amazing together!</div>
        </div>
      </div>
    </>
  )
}