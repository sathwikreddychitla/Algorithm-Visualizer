let delay=300;
let pathfinding_speed=document.querySelector("#speed_input");
pathfinding_speed.addEventListener('input',()=>{
  delay=510 - parseInt(pathfinding_speed.value);
  console.log(delay);
})

// Create a Node
function createNode(row, col, weight) {
  var node = document.createElement("div");
  node.setAttribute("class", "node");
  node.setAttribute("row", row);
  node.setAttribute("col", col);
  node.setAttribute("cost", Number.POSITIVE_INFINITY);
  node.setAttribute("parent", null);
  node.setAttribute("weight", weight);
  node.innerText = weight.toString();
  // console.log(node);
  return node;
} // End createNode

// Create Board and insert into HTML
function createBoard() {
  var grid = document.querySelector(".container");
  grid.innerHTML = "";
  for (var row = 0; row < 10; row++) {
    for (var col = 0; col < 15; col++) {
      let weight = Math.floor((Math.random()*10));
      let temp = createNode(row, col, weight);
      grid.appendChild(temp);
    }
  }
  // Set start and end node
  var startNode = document.querySelector("div[row='0'][col='0']");
  var endNode = document.querySelector("div[row='9'][col='14']");
  startNode.setAttribute("cost", 0);
  startNode.innerHTML = "S";
  endNode.innerHTML = "E";
  startNode.style.backgroundColor="green";
  endNode.style.backgroundColor="green";
  // startNode.style.boxShadow = `${0}px ${0}px ${0}px rgba(0,0,0,0.5)`;
} // End createBoard

// Refresh Button
function refresh() {
  var btn = document.querySelector(".start");
  var speed_input = document.querySelector("#speed_input");
  var info = document.querySelector(".info");
  btn.style.visibility = "visible";
  speed_input.style.visibility= "visible";
  info.style.visibility= "visible";
  createBoard();
} // End refresh

// Check and update node
function checkNode(row, col, curr, checker, seen, counter) {
  if (row >= 0 && col >= 0 && row <= 9 && col <= 14) {
    var node = document.querySelector(`div[row="${row}"][col="${col}"]`);

    var cost = Math.min(
      parseInt(curr.getAttribute("cost")) +
        parseInt(node.getAttribute("weight")),
      node.getAttribute("cost")
    );
    if (cost < node.getAttribute("cost")) {
      node.setAttribute(
        "parent",
        curr.getAttribute("row") + "|" + curr.getAttribute("col")
      );
      node.setAttribute("cost", cost);
    }
    changeColor(node, counter, cost);
    changeColor(curr, counter, false);
    if (!seen.includes(node)) {
      checker.push(node);
    }
    seen.push(node);
    return node;
  } else {
    return false;
  }
} // End checkNode

// Animate the nodes
function changeColor(node, counter, cost) {
  setTimeout(() => {
    node.style.backgroundColor = "#f7977a";
    if (cost) {
      node.style.backgroundColor = "blue";
      node.innerHTML = cost;
    }
  // }, counter * 10);
}, counter * delay);
// }, counter * 1000);
  setTimeout(() => {
    node.style.backgroundColor = "#00BEDABF";
  // }, counter * 10 + 10);
}, counter * delay + delay);
// }, counter * 1000 + 1000);
} // End changeColor

// Start path-finding
function start() {
  var startNode = document.querySelector("div[row='0'][col='0']");
  var endNode = document.querySelector("div[row='9'][col='14']");
  // Hide button
  var btn = document.querySelector(".start");
  var refreshBtn = document.querySelector(".refresh");
  var speed_input = document.querySelector("#speed_input");
  var info = document.querySelector(".info");
  btn.style.visibility = "hidden";
  refreshBtn.style.visibility = "hidden";
  speed_input.style.visibility= "hidden";
  info.style.visibility="hidden";
  // Algo here
  var seen = [startNode];
  var checker = [startNode];
  // console.log(checker);
  var counter = 1;
  // console.log(checker.length);
  while (checker.length != 0) {
    checker.sort(function (a, b) {
      console.log(counter);
      // console.log(a);
      // console.log(b);
      if (parseInt(a.getAttribute("cost")) < parseInt(b.getAttribute("cost"))) {
        return 1;
      }
      if (parseInt(a.getAttribute("cost")) > parseInt(b.getAttribute("cost"))) {
        return -1;
      }
      return 0;
    });
    let curr = checker.pop();
    // Important to parse string to integer
    let row = parseInt(curr.getAttribute("row"));
    let col = parseInt(curr.getAttribute("col"));
    // Check up down left right
    let nextRow = row + 1;
    let prevRow = row - 1;
    let leftCol = col - 1;
    let rightCol = col + 1;
    let a = checkNode(nextRow, col, curr, checker, seen, counter);
    // console.log(a);
    let b = checkNode(prevRow, col, curr, checker, seen, counter);
    // console.log(b);
    let c = checkNode(row, leftCol, curr, checker, seen, counter);
    // console.log(c);
    let d = checkNode(row, rightCol, curr, checker, seen, counter);
    // console.log(d);
    counter++;
  }

  // Draw out best route
  setTimeout(() => {
    startNode.style.backgroundColor = "FFFE6A";
    while (endNode.getAttribute("parent") != "null") {
      endNode.style.backgroundColor = "FFFE6A";
      var coor = endNode.getAttribute("parent").split("|");
      var prow = parseInt(coor[0]);
      var pcol = parseInt(coor[1]);
      endNode = document.querySelector(`div[row="${prow}"][col="${pcol}"]`);
    }
  // }, counter * 10 + 10);
}, counter * delay + delay);
// }, counter * 1000 + 1000);
  // Show refresh button again
  setTimeout(() => {
    refreshBtn.style.visibility = "visible";
  // }, counter * 10 + 10);
}, counter * delay + delay);
// }, counter * 1000 + 1000);
} // End start

// Algo Explanation tabs
function openTab(evt, id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " active";
} // End openTab

// Initialize
window.onload = () => {
  createBoard();
  document.querySelectorAll("button")[2].click();
};
