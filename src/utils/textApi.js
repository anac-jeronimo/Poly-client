import axios from "axios";

class TextToSpeech {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECTS_API}/api`
        });
        this.service = service;
    }
}

export default TextToSpeech;


/* ISTO ESTAVA NO HBS , OU SEJA, FRONTEND?

<audio controls>
<source src="{{translationAudioPt}}" type="audio/mpeg">
</audio>

<h3 class="mycard-title"> {{translation}} </h3> 
 <hr >

       <audio controls>
<source src="{{meaningAudioEng}}" type="audio/mpeg">
</audio>
  ////////////ISTO NO BACK PODE SER UTIL 

router.post('/create', requiredLogin, (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  let {phrase, translation, meaning} = req.body;
  let phraseAudioEng = "";
  let translationAudioPt = "";
  let meaningAudioEng = "";
  let userId = req.session.currentUser._id;
  googleTTS(`${phrase}`, 'en', 1)
  .then((url) => {
    phraseAudioEng = url;
    return googleTTS(`${translation}`, 'pt', 1)
    .then((url2) => {
      translationAudioPt = url2;
      return googleTTS(`${meaning}`, 'en', 1)
      .then((url3) => {
        meaningAudioEng = url3;
        return Card.create({
          phrase,
          translation,
          meaning,
          phraseAudioEng,
          translationAudioPt,
          meaningAudioEng
      }).then((createdCard) => {
        Like.create({
          user: userId,
          card: createdCard._id
        }).then(() => {
        res.redirect('/myarea');
      });
      });
    });
    });
  });
});



*/