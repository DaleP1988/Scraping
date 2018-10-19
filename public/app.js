//////////////////////////
/////////HOME.HTML////////
//////////////////////////


///////////////////////////
/////POPULATE ARTICLES/////
//////////////////////////


$(document).ready(function () {
    console.log("ready!");
    // $("#").empty();

$.getJSON("/articles", function (data) { //check the JSON object for NYTIMES, articles is a URL (make sure this is correct)
    //for each one 
    for (var i = 0; i < data.length; i++) {
        var newCard = $("#resultsCards").append("<div class='card'><h5 class = card-header>" + data[i].title + "</h5><div class='card-body id='newBody'></div><p href =" +  data[i].link + "class='card-text id='newDesc'>" + data[i].desc + "</p><a data-id='"+ data[i].id + "'id='saveArticle' role = 'button' class='btn btn-secondary btn-sm'>SAVE ARTICLE</a></div>");
        // newCard.append("");
        // newCard.append("");
        // newCard.text("");
        // newCard.text(""); //for data.description, CHECK JSON
    

//END POPULATE ARTICLES


////////////////////////
////////NAVBAR CLEAR////
//////ARTICLES//////////
////////////////////////

//should work for both///

$(document).on("click", "#clearArticles", function (){
    //need to get articles and delete//
   $("#resultsCards").empty();
   $("#resultsCards").append("<div class='card'><div class= 'card-body'>Uh oh. Looks like we don't have any new articles</div></div>");
   $("#resultsCards").append("<div class= 'card bg-info text-white'><div class = 'card-header'>What Would You Like To Do?><div class = 'card-body'><a id = 'scrapeNewArt'>Try scraping new articles</a><a href='/articles'>Go To Saved Articles</a></div></div></div> ")
//make sure the file paths are correct for the above
   })



//    <div class="card">
//   <div class="card-header">Header</div>
//   <div class="card-body">Content</div> 
//   <div class="card-footer">Footer</div>
// </div>




////////////////////////////
///////NAVBAR//////////////
/////SCRAPE NEW ARTICLES///
///////////////////////////

$(document).on("click", "#scrapeNew", function (){
    //need to get articles and delete//
   
    $.getJSON("/articles", function (data) { //check the JSON object for NYTIMES, articles is a URL (make sure this is correct)
        //for each one 
        for (var i = 0; i < data.length; i++) {
            var newCard = $("#resultsCards").append("<div class='card'><h5 class = card-header>" + data[i].title + "</h5> <div class='card-body id='newBody'> <p class='card-text id='newDesc'>" + data[i].desc + "</p> <a data-id='"+ data[i].id + "'id='saveArticle' class='btn btn-secondary btn-sm'>SAVE ARTICLE</a> </div>  </div>");
            // newCard.append("<h5 class = card-header>" + data[i].title + "</h5>");
            // newCard.append("<div class='card-body id='newBody'></div>");
            // newCard.text("<p class='card-text id='newDesc'>" + data[i].desc + "</p>");
            // newCard.text("<a data-id='"+ data[i].id + "'id='saveArticle' class='btn btn-secondary btn-sm'>SAVE ARTICLE</a>"); //for data.description, CHECK JSON
        
   })

   $(document).on("click", "#scrapeNewArt", function (){


    $.getJSON("/articles", function (data) { //check the JSON object for NYTIMES, articles is a URL (make sure this is correct)
        //for each one 
        for (var i = 0; i < data.length; i++) {
            var newCard = $("#resultsCards").append("<div class='card'><h5 class = card-header>" + data[i].title + "</h5> <div class='card-body id='newBody'> <p class='card-text id='newDesc'>" + data[i].desc + "</p> <a data-id='"+ data[i].id + "'id='saveArticle' class='btn btn-secondary btn-sm'>SAVE ARTICLE</a> </div>  </div>");
})





////////////////////////
//////SAVE ARTICLE/////
////////////////////////


$(document).on("click", "#saveArticle", function(){
    //empty notes from next page
    $("#savedCards").empty();
    //save id from the a tag
    var thisId = $(this).attr("data-id");
    $("#savedCards").append()

    //ajax call for the article
    $.ajax({
        method: "GET",
        url: "/articles/" + thisId  //articles is THE URL
    })
    //with that done, add the saved article information to the saved articles page
    .then(function(data){
        console.log(data);
        //article title
        $("#savedArticles").append("<div class='card'><h5 class = 'card-header'> + data.title + </h5> <div class='card-body id='newBody'><p href =" +  data[i].link + " class='card-text id='newDesc'> + data.desc + </p></div></div><a data-id='"+ data.id + "'id='deleteArticle' role = 'button' class= 'btn btn-secondary btn-sm'>DELETE FROM SAVED</a><a data-id='"+ data.id + "'id='articleNotes' role = 'button' class='btn btn-warning btn-sm'>ARTICLE NOTES</a>");
        // $("#savedArticles").text("<h5 class = card-header>" + data.title + "</h5>");
        // $("#savedArticles").text("<div class='card-body id='newBody'></div>");
        // $("#savedArticles").text("<p class='card-text id='newDesc'>" + data.desc + "</p>");
         //delete article button
        // $("#savedArticles").text("<a data-id='"+ data.id + "'id='deleteArticle' role = 'button' class='btn btn-secondary btn-sm'>DELETE FROM SAVED</a>"); //for data.description, CHECK JSON
         //new notes button
        // $("#savedArticles").text("<a data-id='"+ data.id + "'id='articleNotes' role = 'button' class='btn btn-warning btn-sm'>ARTICLE NOTES</a>"); //for data.description, CHECK JSON

    })
})

//END POPULATED SAVED ARTICLES

/////////////////////////
//////////SAVED.HTML/////
/////////////////////////


///////////////////////////
///MAKE NEW NOTE///////////
///////////////////////////

$(document).on("click", "#articleNotes", function()
    $("#noteModal").modal('show');
    var noteContent = $("#newNotContent").val();
    $("#newNotePosted").text(noteContent).append("<button class='btn btn-danger btn-sm' id='deleteNote'>X</button> ");
    $("#noteModal").modal('hide');

}

//need to add store note to database!!!
// ??????????????????????????????????????



///////////////////////////
//////DELETE FROM SAVED////
/////////ARTICLE//////////

$(document).on("click", "#deleteArticle", function(){

 //figure out the get path//



////////////////////////
//////DELETE NOTE///////
///in note modal//////////

$(document).on("click", "#deleteNote" , function(){
$("#newNotePosted").val("");

})

///make sure the above doesn't delete all notes...

















    //NEW NOTES
    for (var i = 0; i < data.length; i++) {
        $("#resultsCards").text("<div class='card'></div>");
        $("#resultsCards").text("<h5 class = card-header>" + data.title + "</h5>");
        $("#resultsCards").text("<div class='card-body id='newBody'></div>");`1`
        $("#resultsCards").text("<p class='card-text id='newDesc'></p>");
        $("#resultsCards").text("<a data-id='"+ data.id + "'id='saveArticle' class='btn btn-secondary btn-sm'>SAVE ARTICLE</a>"); //for data.description, CHECK JSON
    
    if (data.note) {
        //place the title fo the note in the title input
        $("#newDesc").text(data.note.desc); //CHECK THE JSON!
        //place the body of the note in the body 
    }
});
});

//when you click the saveNote Button
$(document).on("click", "#saveArticle", function (){
//grab id associated with article from the submit button
var thisId = $(this).attr("save");


})


$(document).ready(function () {
    console.log("ready!");
    // $("#").empty();





    //save id from the p tag
    var Id = $(this).attr("data-id"); //make sure thsi si the div for the articles

    $.ajax({
        method: "GET",
        url: "/articles/" + this

    })


        .then(function (data) {
            console.log(data);
            //title of the article

            //input to enter the new title

            //a textarea to add a new note body

            // a button to submit a new note, with the id of the article saved


            //if there is no note in the article

            if (data.note) {
                $("#title input tag").val(data.note.title);
                //place teh nody of the note in teh body
                $("#body input ta").val(data.note.body);

            }
        })
});


//when you click the savenote button
// add the save note button on click here
$(document).on("click", "#savenote", function () {
    //grab is associated with the article from the submit button
    var thidId = $(this).attr("selected id");

    //Run a post request to change the note, using what's entered in the inputs
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            //value take from the title input
            title: $("#titleinput").val(),
            //Value taken from note textarea
            body: $("#bodyinput").val()
        }
    })
})
    //with that done 
    .then(function (data) {
        //log the response 
        console.log(data);
        //empty the notes section
        $("#notes").empty();
    });

//also, remove the values entered in the input and textarea for note entry

$("#titleinput").val("");
$("#bodyinput").val("");
});


////////////////////
/////home.html/////
///////////////////

//SCRAPE NEW ARTICLES 
//on click function (to fill cards and trigger modal)
//build and populate cards (make sure there is a save articles button)

function articleCards() {
    //build the article cards
    //make sure there is a save articles button 



}


$("#scrapeNew").on(click) function() {
    articleCards();
    //display the cards 

}



//MODAL WITH NEW ARTICLES ALERT
//alert number of articles

function newArticles() {

    //build the new articles alert modal
}


$("#newArticles").onclick function() {
    newArticles(); //call the modal

    //build the modal

}


//SAVED ARTICLES BUTTON 

function savedArticlesCards() {

    //build saved articles cards 


}

$("#savedCards").onclick function() {
    savedArticlesCards();
    //direct to new page
    //direct to next page and add to saved articles
}



////////////////////
/////saved.html/////
///////////////////



//FILL MODAL WITH NEW NOTE


function newNoteModal() {
    // build modal
    // dynamically fill the id
    // add user input form
    // add save note button
    //

}


//on click new note button load modal


$("#").onclick function() { //new note button from the saved articles page
    newNoteModal();


}




//ADD NEW NOTE USER INPUT TO MONGODB



function noteToDatabase() {
    //get request for the user input to the database

}

$("#").onclick function() {
    noteToDatabase();

}




//DELETE FROM SAVED





//FILL ARTICLE CARDS
//dynamically build the cards
//get the saved cards data from the database





