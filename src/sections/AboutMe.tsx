import smallimg from '../assets/images/aboutJ-300w.png'
import medimg from '../assets/images/aboutJ-400w.png'
import IconCarousel from '../components/IconCarousel'
import '../style/aboutme.css'

export default function AboutMe({ id }: { id: string }) {

  return (
    <section id={id} className='page'>
      <div className='sectionctn'>
        <div className="aboutctn">
          <div className="aboutimg">
            <picture className="selfpic">
              <source
                media="(max-width: 476px)"
                srcSet={smallimg} />

              <source
                media="(max-width: 1024px)"
                srcSet={medimg} />

              <img
                src={medimg}
                alt="web developer Julia Kim" />
            </picture>
          </div>

          <div className='aboutme'>
            <div className="aboutintro">
              <h1>Welcome to my corner of the digital world! </h1>
              <div className='aboutsub'>
                I am  a driven self-taught web developer who's on a mission to break into the industry.
              </div>
            </div>
            <div className='aboutblurbs'>
              <div className='loves'>Loves:</div>
              <ul className='lovesitems'>
                <li>Food</li>
                <li>Travel (26 countries and counting!)</li>
                <li>Climbing</li>
              </ul>

            </div>
            <div className='carousel'>
              <h3 className="langs">Languages and Tools:</h3>
              <IconCarousel />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}