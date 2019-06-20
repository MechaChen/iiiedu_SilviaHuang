var tasks = [];

function doFirst() {
  document.getElementById("theForm").addEventListener("submit", addTask);
}

function addTask(e) {
  e.preventDefault();
  var task = document.getElementById("task");
  tasks.push(task.value);

  var output = "";
  output += "<h3>TodoList</h3>";
  output += "<ol><li>";
  output += tasks.join("</li><li>");
  output += "</li></ol>";

  document.getElementById("output").innerHTML = output;

  return false;
}

window.addEventListener("load", doFirst);
