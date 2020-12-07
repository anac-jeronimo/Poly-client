import React from "react";

function Facts() {
  return (
    <div>
    <div className="container-fluid">
    <div className="row">

    <div className="col-sm text-div">

    
       <h3> What is Color-Blindness </h3>
    
     <div>

     
      <p>
        Color-blindness is the inability to distinguish the differences between
        certain colors.
      </p>
      <p>
        This condition results from an absence of color-sensitive pigment in the
        cone cells of the retina,
      </p>
      <p> the nerve layer at the back of the eye.</p>

      <p>Most color vision problems are inherited and are present at birth.</p>
      <p>
        
        Approximately 1 out of 12 males and 1 out of 20 women are color blind.
      </p>

      <h3> What does a color-blind person see? </h3>
      <p>
        A person with color-blindness has trouble seeing red, green, blue, or
        mixtures of these colors.
      </p>
      <p>
       
        The most common type is red-green color-blindness, where red and green
        are seen as the same color.
      </p>
      </div>
      <div className="col-sm imgdiv">

      
      <h3>
        Here are some illustrations of the most common forms of color-blindness:
      </h3>

      <img
        src="images/colorblind.JPG"
        alt="color blindness spectrum comparison"
      />

      <h6>Useful link: </h6>
      <a target="_blank" href="https://www.iamcal.com/misc/colors/">
        
        Click me
      </a>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Facts;
