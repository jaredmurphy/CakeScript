(function(window){
      //CODE
      'use strict';
      function define_library(){
        var Library = {};
        var name = "GravyScript";
        Library.greet = function(){
          alert("Hello from the " + name + " library.");
        }
        return Library;
      }
      //define globally if it doesn't already exist
      if(typeof(Library) === 'undefined'){
        window.Library = define_Library();
      }
      else{
        console.log("Library already defined.");
      }


     // ARRAY METHODS

      // array.sample();
      Array.prototype.sample = function() { 
        length = this.length;
        randomIndex = Math.floor(Math.random() * length + 0);
        return this[randomIndex];
      }

})(window);
