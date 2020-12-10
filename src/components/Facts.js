import React from "react";

function Facts() {
  return (
    <div>
    <div className="container-fluid">
    <div className="row facts-page">

    <div className="col-sm text-div ">

      <div className="bigP">
      <h3> What is Color-Blindness </h3>
      
      <p>
      *  Color-blindness is the inability to distinguish the differences between
        certain colors.
      </p>
      <p>
      *  This condition results from an absence of color-sensitive pigment in the
        cone cells of the retina, the nerve layer at the back of the eye.</p>

      <p>*  Most color vision problems are inherited and are present at birth.</p>
      <p>
        
      *  Approximately 1 out of 12 males and 1 out of 20 women are color blind.
      </p>
       

      <h3> What does a color-blind person see? </h3>
      <p>
      *  A person with color-blindness has trouble seeing red, green, blue, or
        mixtures of these colors.
      </p>
      <p>
       
      * The most common type is red-green color-blindness, where red and green
        are seen as the same color.
      </p>
      </div>
      </div>
      <div className="col-sm imgdiv">
      <h3>
        Illustrations of the most common
      </h3>
      <h3>
      forms of color-blindness: 
      </h3>

      <img className="img-stripes"
       // src="images/colorblind.JPG"
       src="images\eyeTest_know_color_blindness.jpg"
        alt="color blindness spectrum comparison"
      />
      <div className="test">
      <a target="_blank" href="https://www.color-blindness.com/ishihara_cvd_test/ishihara_cvd_test.html?iframe=true&width=500&height=428">
        Take the test!
      </a>
      </div>
      </div>
      <div className="col-sm useful-link">
      <h3> Statistics </h3>
      <ul className="facts-list">
        <li> *  0.38% of women are deuteranomalous (around 95% of all color deficient women).</li>
        <li>*  0.005% of the population are totally colour blind.</li>
        <li> * 0.003% of the population have tritanopia.</li>
        <li> * Protanomaly occurs in about 1% of males.</li>
        <li> * Deuteranomaly occurs in about 5% of males. It's the most common color deficiency.</li>
        <li> * Protanopia occurs in about 1% of males.</li>
        <li> * Deuteranopia occurs in about 1% of males.</li>
      </ul>
      <h5>Useful link: </h5>
      <p>
          If you want to see more about how diferent color blind </p> 
          <p>
          see the world, click this here:   
      </p>
      <a target="_blank" href="https://www.iamcal.com/misc/colors/">
        
        Click me
      </a>
      </div>
      </div>
      </div>
    </div>
    
    
  );
}

export default Facts;
