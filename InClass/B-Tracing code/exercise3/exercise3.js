const getRepos = function (repoName) {
  return fetch('https://api.github.com/users/' + repoName + '/repos')
    .then(data => data.json())
    .then(function (response) {
      return response.map(function (rep) {
        console.log(rep.name);
        return rep.name;
      });
    });
};

var myElement = document.querySelector("#main");

function addPTag(item) {
  var paragraph = document.createElement("p");
  paragraph.innerText = item;
  myElement.appendChild(paragraph);
}


const migracodeRepos = getRepos('migracode-barcelona');
console.log("Loading...");



migracodeRepos.then((res) => {
  res.forEach(addPTag);
});

// 
// var paragraph = document.createElement("p"); 
// paragraph.innerText = migracodeRepos;
// myElement.appendChild(paragraph);

//Task1. Fix the code
//Task2. Create a <p> for each repository
