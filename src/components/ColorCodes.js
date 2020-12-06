/* import { render } from '@testing-library/react'; */
import React from 'react';


class ColorCodes extends React.Component {
    render() {
        return(
            <div>
                <div className="title">
                <h2>
                    Color codes
                </h2>
                </div>
              
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm bigP">
                        <p>Coloradd is a sign code for aiding color blind people to recognise colors, developed by Portuguese graphic designer and professor at the University of Minho, Miguel Neiva.
            It consists of geometric shapes representing colors and color combinations. </p>
            <p>The code is based on five base signs: two triangles (one angled upwards and the other angled downwards), 
            one diagonal line, one solid square box and one empty square box representing black,
             white and the primary colors: red (magenta), blue (cyan), and yellow.
              Colors derived from other colors have the symbols of the combined colors, 
              creating derivative colors (orange, green, purple and brown) and dark or white tones.
               Metalized colors like silver or gold are shown with a left parenthesis on the symbols.</p>
               <div className="img1">
               <img src="basic-color-codes.jpg" />
               </div>
               <div className="img2">
               <img src="Code_cinzas.gif"/>
               </div>
               
                        </div>
                        <div className="col-sm">
                        <div className="img3">
                        <img src="COLOR-ADD_1.jpg"/>
                        </div>
                          <div className="img4">
                          <img src="image.jpg"/> 
                          </div>                        
                       </div>
                        <div className="col-sm">
                        <div className="img5">
                        <img src="CODE-CLARO-ESCURO.gif"/>
                        </div>
                           
                        </div>
                    </div>
              
                </div>
            </div>
        )
    } 
}

export default ColorCodes;