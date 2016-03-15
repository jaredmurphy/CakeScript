
$(document).ready(function() {
  //CODE
  console.log('GravyScript loaded');
  var define_library = function(){
    var Library = {};
    var name = "GravyScript";
    Library.greet = function(){
      alert("Hello from the " + name + " library.");
    }
    return Library;
  }
  //define globally if it doesn't already exist
  if(typeof(Library) === 'undefined'){
    window.Library = define_library();
  }
  else{
    console.log("Library already defined.");
  }


 // ARRAY METHODS

  // array.sample();
  Array.prototype.sample = function() { 
    var length = this.length;
    var randomIndex = Math.floor(Math.random() * length + 0);
    return this[randomIndex];
  }

 // STRING METHODS
  
  // string.reverse();
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  }
});
