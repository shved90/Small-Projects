//http://www.javascriptkit.com/javatutors/arraysort2.shtml


function loadJSON(callback) {   

    var xhr = new XMLHttpRequest();
        //xhr.overrideMimeType("application/json");
        
    xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == "200") {
            callback(xhr.responseText);
          }
    };
    xhr.open('GET', 'https://dl.dropboxusercontent.com/s/bs8iiggp3ot7g6h/data.json', true);
    xhr.send();
    return xhr.onreadystatechange;
 }

var currentNo = 0;
var maxNo = 10;

 function init(value) {
    loadJSON(function(response) {
        var jsonList = JSON.parse(response);
        var peopleList = document.getElementById("peopleList");
        

        if (value % 1 === 0){
            for (var i=0;i<jsonList.length;i++){

                if(jsonList[i]["id"] == value){
                    document.getElementsByTagName("main")[0].classList.add("asideShow")
                    var friendsObj = jsonList[i]["friends"];
                    friendView = document.getElementById("friendView").getElementsByClassName("friendList__friend");
                    
                    for(var k=0;friendsObj.length<friendView.length;k++){ // this needs more work
                        document.getElementById("friendView").removeChild(friendView[k])
                    }

                    for (var j=0;j<friendsObj.length;j++){
                        friendView[j].getElementsByClassName("friend__name")[0].innerText = friendsObj[j]["first_name"] + " " + friendsObj[j]["last_name"];
                        friendView[j].getElementsByClassName("friend__email")[0].innerText = friendsObj[j]["email"];
                        friendView[j].getElementsByClassName("friend__avatar")[0].src = friendsObj[j]["picture"];

                        if(friendView.length < friendsObj.length){
                            var friendTemplate = friendView[0].cloneNode(true);
                            document.getElementById("friendView").append(friendTemplate);
                        }
                    }
                    return;
                }
            }
        }

        
        var peopleBlock = [];
        
        for(currentNo; currentNo < maxNo; currentNo++ ){
            if(peopleList.getElementsByClassName("peopleList__person").length < jsonList.length){
                var personTemplate = peopleList.getElementsByClassName("peopleList__person")[currentNo].cloneNode(true);
                peopleList.append(personTemplate);
            }
            peopleBlock = peopleList.getElementsByClassName("peopleList__person")[currentNo]; 
            peopleBlock.id = jsonList[currentNo]["id"];
            peopleBlock.getElementsByClassName("person__name")[0].innerText = jsonList[currentNo]["first_name"] + " " + jsonList[currentNo]["last_name"];
            peopleBlock.getElementsByClassName("person__gender")[0].innerText = jsonList[currentNo]["gender"];
            peopleBlock.getElementsByClassName("person__email")[0].innerText = jsonList[currentNo]["email"];



            //first version - loading friends into relevant parent box, intead of separate element

            // var friendBlock = [];
            // if(jsonList[currentNo]["friends"]){
            //     jsonList[currentNo]["friends"].forEach(function(friendObj, j){
            //         friendBlock = peopleBlock.getElementsByClassName("person__friendList")[0].getElementsByClassName("friendList__friend")[j];
            //         friendBlock.getElementsByClassName("friend__name")[0].innerText = jsonList[currentNo]["friends"][j]["first_name"] + " " + jsonList[currentNo]["friends"][j]["last_name"];
            //         friendBlock.getElementsByClassName("friend__email")[0].innerText = jsonList[currentNo]["friends"][j]["email"];
            //         friendBlock.getElementsByClassName("friend__avatar")[0].src = jsonList[currentNo]["friends"][j]["picture"];
                    
            //         if(peopleBlock.getElementsByClassName("person__friendList")[0].getElementsByClassName("friendList__friend").length < jsonList[currentNo]["friends"].length){
            //             friendTemplate = peopleBlock.getElementsByClassName("person__friendList")[0].getElementsByClassName("friendList__friend")[j].cloneNode(true);
            //             peopleBlock.getElementsByClassName("person__friendList")[0].append(friendTemplate);
            //         }
            //     });

            // }

        };

    });
};

init();


document.addEventListener("click", function(event){
    if(event.target.id == "loadMore"){
        currentNo = maxNo;
        maxNo += 10;
        init();
    }

    if(event.target.classList[0] == "loadFriends"){
        init(event.target.parentNode.id)
    }
})

