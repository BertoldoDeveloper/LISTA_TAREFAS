document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const addButton = document.querySelector(".btn-add");
    const bntDetails = document.getElementById("btnNone");
    const filterButtons = document.querySelectorAll(".filters button");
    const paragraph = document.getElementById("detalisParagraph");
    

    function toggleTaskStatus(button) {
      const task = button.closest(".task");
      task.dataset.status = task.dataset.status === "complete" ? "not-complete" : "complete";
    }

    function removeTask(button) {
      const task = button.closest(".task");
      task.remove();
    }
  
    bntDetails.onclick = function() {
        if (paragraph.style.display === 'none') {  
            paragraph.style.display = 'flex';  
        } else {  
            paragraph.style.display = 'none';  
        }
    };
  
    function filterTasks(filter) {
      const tasks = document.querySelectorAll(".task");
      tasks.forEach(task => {
        if (filter === "Todas" || task.dataset.status === filter) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
      });
    }
  
    
    filterButtons.forEach(button => {
      button.addEventListener("click", function() {
        let filter = button.textContent;
        filter = filter === "Concluidas" ? "complete" : filter === "Não Concluidas" ? "not-complete" : "Todas";
        filterTasks(filter);
      });
    });
  
    taskList.addEventListener("click", (event) => {
      if (event.target.closest(".btn-conclued")) {
        toggleTaskStatus(event.target.closest(".btn-conclued"));
      }
      if (event.target.closest(".btn-remove")) {
        removeTask(event.target.closest(".btn-remove"));
      }
    });
  });