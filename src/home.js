export function HomePage() {

const body = document.querySelector('.body')

body.innerHTML = `
  <div class="introctn">
    <h1 class="nameintro">JULIA KIM</h1>
    <div class="introsubtext">WEB DEVELOPER</div>
  </div>
  <div class="aboutctn">
    <div class="aboutme">
      <h2 class="abouttitle">About Me</h2>
      <div class="aboutintro">
        <p></p>
        I am  a driven self-taught web developer who's on a mission to break into the industry. I started this incredibly fun (and at times, quite stressful) journey in June 2023, armed with nothing but sheer determination and an insatiable curiosity about web development. I have struggled, coded, failed, and recoded countless times trying to learn and master the intricacies of HTML, CSS, and JavaScript. 
        <p></p>
      </div>
      <picture class="selfpic">
        <source
          media="(max-width: 476px)" 
          srcset="./images/self_h1ucxz_c_scale,w_200.png">
        
        <source
          media="(max-width: 768px)" 
          srcset="./images/self_h1ucxz_c_scale,w_366.png">
        
        <img
          src="./images/self_h1ucxz_c_scale,w_476.png" 
          alt="web developer Julia Kim">
      </picture>
    </div>
    <div class="skillctn">
      <div class="skill">
        <div class="skilltitle">First-Class Skills:</div>
        <div class="skilldescrip">I have honed my skills in front-end and back-end technologies, giving her a holistic understanding of the web development ecosystem. I am currently proficient in HTML5, CSS3, JavaScript, React.js, and Node.js.</div>
      </div>

      <div class="skill">
        <div class="skilltitle">The Self-Starter:</div>
        <div class="skilldescrip">I thrive in fast-paced, collaborative environments. My work ethic, problem-solving prowess, and willingness to embrace new challenges make me an great team player. I am also an avid learner and eager to learn about emerging web technologies.</div>
      </div>

      <div class="skill">
        <div class="skilltitle">Building the Future Together:</div>
        <div class="skilldescrip">I am now actively seeking my first coding job, eager to contribute my skills, creativity, and boundless enthusiasm to a forward-thinking team. I am ready to embrace challenges, learn from experts, and contribute my unique perspective to help your company succeed.</div>
      </div>
    </div>
  </div>

  <div class="sneakpeek">
    <h2 class="projectstitle">Projects</h2>
    <div class="projectctn"> 
      <div class="projectcard left">
        <div class="cardlabel">First Landing Page</div>
        <div class="projectdescrip">
          <div class="maindescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet faucibus tellus, eget sodales nunc. Donec viverra urna pulvinar, ornare enim nec, aliquam elit. Vestibulum vel arcu eget sem molestie molestie. Donec elementum malesuada ante, in sagittis lorem rutrum eget. Cras gravida ut est ut viverra. 
          </div>
          <div class="tools">Built using Javascript</div>
          <div class="projectlinks">
            <a class="link" href="https://jynxxxxx.github.io/First-Landing-Page/">Live Page</a>
            <a class="link" href="https://github.com/jynxxxxx/First-Landing-Page">GitHub</a>
          </div>
        </div>
        <div class="screenshot">
          <div class="design"></div>
          <img
            class="projectimg landing"
            src="./images/landingpage.png"
            alt="website screenshot"
          >
        </div>
      </div>

      <div class="projectcard right">
        <div class="cardlabel">Dummy Form</div>
        <div class="projectdescrip">
          <div class="maindescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet faucibus tellus, eget sodales nunc. Donec viverra urna pulvinar, ornare enim nec, aliquam elit. Vestibulum vel arcu eget sem molestie molestie. Donec elementum malesuada ante, in sagittis lorem rutrum eget. Cras gravida ut est ut viverra. 
          </div>
          <div class="tools">Built using Javascript</div>
          <div class="projectlinks">
            <a class="link" href="https://jynxxxxx.github.io/dummy_form/">Live Page</a>
            <a class="link" href="https://github.com/jynxxxxx/dummy_form">GitHub</a>
          </div>
        </div>
        <div class="screenshot">
          <div class="design"></div>
          <img
            class="projectimg dummyform"
            src="./images/dummyform.png"
            alt="website screenshot"
          >
        </div>
      </div>

      <div class="projectcard left">
        <div class="cardlabel">Simple Calculator</div>
        <div class="projectdescrip">
          <div class="maindescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet faucibus tellus, eget sodales nunc. Donec viverra urna pulvinar, ornare enim nec, aliquam elit. Vestibulum vel arcu eget sem molestie molestie. Donec elementum malesuada ante, in sagittis lorem rutrum eget. Cras gravida ut est ut viverra. 
          </div>
          <div class="tools">Built using Javascript</div>
          <div class="projectlinks">
            <a class="link" href="https://jynxxxxx.github.io/calculator/">Live Page</a>
            <a class="link" href="https://github.com/jynxxxxx/calculator">GitHub</a>
          </div>
        </div>
        <div class="screenshot">
          <div class="design"></div>
          <img
            class="projectimg calc"
            src="./images/calc.png"
            alt="website screenshot"
          >
        </div>  
      </div>

      <div class="projectcard right">
        <div class="cardlabel">Etch a Sketch</div>
        <div class="projectdescrip">
          <div class="maindescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet faucibus tellus, eget sodales nunc. Donec viverra urna pulvinar, ornare enim nec, aliquam elit. Vestibulum vel arcu eget sem molestie molestie. Donec elementum malesuada ante, in sagittis lorem rutrum eget. Cras gravida ut est ut viverra. 
          </div>
          <div class="tools">Built using Javascript</div>
          <div class="projectlinks">
            <a class="link" href="https://jynxxxxx.github.io/Etch-a-Sketch/">Live Page</a>
            <a class="link" href="https://github.com/jynxxxxx/Etch-a-Sketch">GitHub</a>
          </div>
        </div>
        <div class="screenshot">
          <div class="design"></div>
          <img
            class="projectimg sketch"
            src="./images/etchasketch.png"
            alt="website screenshot"
          >
        </div>  
      </div>  
    </div>
    <div class="seemore">See More</div>
  </div>`
}
