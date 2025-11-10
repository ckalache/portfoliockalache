var projects = document.getElementsByClassName("project");

for (var i = 0; i < projects.length; i++) {
  var collapsible = projects[i].getElementsByClassName("collapsible")[0];

  collapsible.addEventListener("click", function () {
    this.parentNode.classList.toggle("active");
    
    var content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}