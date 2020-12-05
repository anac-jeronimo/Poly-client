import React from 'react';

function ColorTheory () {
    return(
        <div style={{width:"100%"}}>
                <div>
                    <h2 className="color-theory-title"> Color Theory </h2> 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 color-theory-img">
                        <img src="Color_diagram_Charles_Hayter.jpg"></img>
                            <p className="color-theory-p">Color diagram Charles Hayter</p>
                        </div>
                        <div className="col-md-4">
                            <p> In the visual arts, color theory is a body of practical guidance to color mixing and the visual effects </p>
                            <p>of a specific color combination. There are also definitions (or categories) of colors based on the color wheel:</p>
                            <p> primary color, secondary color, and tertiary color. Although color theory principles first appeared in the </p>
                            <p>writings of Leone Battista Alberti (c. 1435) and the notebooks of Leonardo da Vinci (c. 1490), a tradition of  </p>
                            <p>"colory theory" began in the 18th century, initially within a partisan controversy over Isaac Newton's theory of </p>
                            <p>color (Opticks, 1704) and the nature of primary colors. From there it developed as an independent artistic tradition </p>
                            <p>with only superficial reference to colorimetry and vision science. </p>

                            <p>The purpose of color theory range from renaissance fine art to modern commercial advertising. </p>
                            <p>Colours affect our mood and perception.</p>
                            <p>Color theory is not new but also seen in old traditions. </p>

                            <p> Color can be classified: </p>
                            <ul>
                                <li>Warm and Cold</li>
                                <li>Receding and Advancing</li>
                                <li>Positive and negative</li>
                                <li>Subtractive and additive</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <img src="colorwheel.jpg" />
                        </div>
                    </div>                   
            </div>
        </div>
       
    )
}

export default ColorTheory;
