
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

  // array.shuffle();
  Array.prototype.shuffle = function() {
    for (var i = this.length-1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
    return this;
  }

  // array.zip();
  Array.prototype.zip = function(values) {
    hashName = {};
    if (this.length !== values.length) {
      console.log("Error! ARRAYS ARE NOT EQUAL LENGTHS");
    } else {
      for (var i = 0; i < this.length; i++) {
        hashName[this[i]] = values[i];
      }
    }
    return hashName;
  }
  
 // STRING METHODS

  // string.reverse();
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  }
});
