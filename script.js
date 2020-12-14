var houses = ["https://s.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg", 
              
"https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg", 
              "https://media.foxbusiness.com/BrightCove/854081161001/202008/3787/854081161001_6178875221001_6178880081001-vs.jpg"];


houses.forEach(function(item,index) {
    $(".location").append("<img src=" + houses[index] + ">");
    
});



$('button').click(function() {
     //This creates a variable and stores what's written in the input.
     var inputValue = $(".inputName").val();
     //This clears the input.
     $(".inputName").val("");
     //This places the image above the input within an image tag.
    houses.push(inputValue);
    $(".location").empty();  
    houses.forEach(function(item,index) {
    $(".location").append("<img src=" + houses[index] + ">");
});
});