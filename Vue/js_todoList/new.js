var tasks = [];
function doFirst() {
  document.getElementById("theForm").onsubmit = addTask;
}

function addTask() {
  var task = document.getElementById("task");
  tasks.push(task.value);

  var output = "";
  output += "<h3>TodoList</h3>";
  output += "<ol><li>";
  output += tasks.join("</li><li>");
  output += "</li></ol>";
  console.log(output);

  task.value = "";

  document.getElementById("output").innerHTML = output;
  return false;
}

// function addTask(e) {
//   e.preventDefault();
//   var task = document.getElementById("task");
//   tasks.push(task.value);

//   var output = "";
//   output += "<h3>TodoList</h3>";
//   output += "<ol><li>";
//   output += tasks.join("</li><li>");
//   output += "</li></ol>";

//   task.value = "";

//   document.getElementById("output").innerHTML = output;
//   return false;
// }

window.onload = doFirst;
