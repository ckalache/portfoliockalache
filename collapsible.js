var projects = document.getElementsByClassName("project");

for (var i = 0; i < projects.length; i++) {
  var project = projects[i];
  var collapsible = project.getElementsByClassName("collapsible")[0];

  collapsible.addEventListener("click", function () {
    project.classList.toggle("active");
    
    var content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}