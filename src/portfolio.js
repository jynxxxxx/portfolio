export function Portfolio() {

  const body = document.querySelector('.body')
  
  body.innerHTML = `
  <div class="portfolioctn">
    <h2 class="portfoliotitle">Portfolio</h2>
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
  </div>`
  }