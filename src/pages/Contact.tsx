import linkedIn from "../assets/images/linkedin.svg"
import { VscGithubInverted, VscMail } from "react-icons/vsc"
import '../style/contact.css'

export function Contact() {
  return (
    <>
      <div className="section">
        <div className="sectionTitle">CONTACT</div>
        <div className="separate">_____</div>
      </div>
      <div className="contactctn">
        <div className="contactdesc">
          <div className="desc1">Connect with me:</div>
          <div className="desc2">
            If you want to know more about my work/experiences, explore potential collaborations, job opportunities, or simply to share insights.
          </div>
          <div className="desc3">Feel free to browse my profile to get a glimpse of my experience and accomplishments.
            I'm open to new opportunities and meaningful connections!
          </div>
          <div className="desc4">Let's make things happen. 🚀</div>
        </div>
        <div className="contact">
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
            <a className="linkctn" href="mailto:jnykim97@gmail.com">
              <VscMail className="linkicon" />
              <div className="linktxt">jnykim97@gmail.com</div>
            </a>
          </ul>

        </div>
      </div>
    </>
  )
}
