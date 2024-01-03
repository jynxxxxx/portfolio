import linkedIn from "../assets/images/linkedin.svg"
import { VscGithubInverted, VscMail } from "react-icons/vsc"
import '../style/contact.css'

export function Contact({ id }: { id: string }) {

  return (
    <section id={id} className='page'>
      <div className='sectionctn'>
        <div className="contactctn">
          <div className="contact">
            <div className="contactdesc">
              Connect with me:
            </div>
            <ul className="contactlist">
              <li>
                <a className="linkctn" href="https://jynxxxxx.github.io/portfolio/" target="_blank" rel="noreferrer">
                  <VscGithubInverted className="linkicon" />
                  <div className="linktxt">GitHub</div>
                </a>
              </li>
              <li>
                <a className="linkctn" href="https://www.linkedin.com/in/jnykim/" target="_blank" rel="noreferrer">
                  <img className="linkicon" src={linkedIn} alt="LinkedIn" />
                  <div className="linktxt">LinkedIn</div>
                </a>
              </li>
              <li>
                <a className="linkctn" href="mailto:jnykim97@gmail.com">
                  <VscMail className="linkicon" />
                  <div className="linktxt">jnykim97@gmail.com</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}
