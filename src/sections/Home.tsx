import '../style/home.css'
import smallimg from '../assets/images/juliamain-300w.png'
import medimg from '../assets/images/juliamain-400w.png'

export default function Home({ id }: { id: string }) {

  return (
    <section id={id} className='page'>
      <div className='sectionctn homectn'>
        <div className="homeIntro">
          <h1 className="homeHi">Hi 👋, I'm Julia.</h1>
          <h2 className="introblurb">a Web Developer.</h2>
        </div>

        <div className="homeimg">
          <picture >
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
      </div>
    </section>
  )
}
