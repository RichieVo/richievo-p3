/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
// 
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//    
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating 
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = new Vue({
          el: '#vue_app',
          // This automatically imports your movies.json file and puts it into
          //   the variable: movies
          created () {
                fetch('movies.json').then(response => response.json()).then(json => {
                      this.movies = json
                })
          },
          data: {
                // This holds your movies.json data.
                movies: [],

                /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
                title: 'IMDB + Richie’s Top 8 Movies',
                owner: 'Richie',
                github: 'https://github.com/RichieVo/richievo-p3'


          },
          methods: {
                /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
                //Date Converter
                makeTextDate: function(dateArray) {
                    var year = dateArray[0];
                    var month = dateArray[1];
                    var day = dateArray[2];
              
                    //Month Converter
                    var monthArray = new Array();
                    monthArray[0] = "January";
                    monthArray[1] = "February";
                    monthArray[2] = "March";
                    monthArray[3] = "April";
                    monthArray[4] = "May";
                    monthArray[5] = "June";
                    monthArray[6] = "July";
                    monthArray[7] = "August";
                    monthArray[8] = "September";
                    monthArray[9] = "October";
                    monthArray[10] = "November";
                    monthArray[11] = "December";
                    var alphaMonth = monthArray[month];
                    return alphaMonth + " " + day + ", " + year;
              
                },
                
                //Like Counter
                like: function(index) {
                    this.movies[index].likes++;
                   
                },
                
                //Dislike Counter
                dislike: function(index) {
                    this.movies[index].dislikes++;
                
                   
                },
                
                //Poster Click
                posterClick: function(index) {
                    
                    if(this.movies[index].posterindex < this.movies[index].posters.length-1){
                        this.movies[index].posterindex++;
                    }
                    else {
                        this.movies[index].posterindex = 0;
                    }
                    
                    
                },
                
                //Time Converter
                timeText: function(minutes) {
                    //variable reassignment
                    var num = minutes;
                    var hour = (num / 60);
                    var nhours = Math.floor(hour);
                    var minute = (hour - nhours) * 60;
                    var nminutes = Math.round(minute);
                    return nhours + "h " + nminutes + "m ";
                }
                
              
          }
    })  

