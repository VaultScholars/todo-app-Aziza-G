// app.js
// This file controls what the app does.
// Students will fill in the logic for adding, updating, and deleting tasks.

// The array where all tasks will be stored
let tasks = [];

// ID counter for new tasks
let nextTaskId = 1;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-task-form");
  const taskList = document.getElementById("task-list");
  const emptyState = document.getElementById("empty-state");

  loadTasks(); 

  function loadTasks() {
    const tasks = JSON.parse(localStroage.getItem('tasks')); 

    tasks.forEach(createTaskElement); 
  }

  // When starting the app:
  // - Load tasks from localStorage
  // - Update nextTaskId so it doesn't conflict
  // - Show tasks on the page
  // TODO: Load tasks and render them





  // When the user submits the form to add a task:

  const title = document.getElementById("task-title");
 const addtask = document.getElementById("btn primary-btn");
 const tasklist = document.getElementById("task-list");

 const taskcate = document.getElementById("task-category"); 

 function makeTask() {
 const task = title.value.trim();
 const cate = task.value.trim(); 
 const date = task.value.trim();
  
      if (task) { 
      createTaskElement(task); 
        title.value = '';
        saveTasks();  
      } else {
    alert("Please enter task!"); // validate field 
  }


 };

 addButton.addEventListner("submit", (makeTask)); // add task button 


 function createTaskElement(task) {

  const listItem = document.createElement("li");
  const lsItem = document.createElement("p"); 
  const Itemls = document.createElement("p");


  listItem.textContent = task;
  lsItem.textContent = cate; 
  Itemls.textContent = date; 

  const deletebtn = document.createElement("button") // showcase delete button 
  deletebtn.textContent = "Delete"; 
  deletebtn.className ="task-delete-btn"; 


  taskList.apprendChild(Itemls) // add task 
  taskList.apprendChild(lsItem) 
  taskList.appendChild(listItem)}
  
  
  
  
  
  

  // saving tasks to local storage 
    function saveTasks() {
      let tasks = [];
      taskList.querySelectorAll("li").forEach(function (item) {
        tasks.push(nextTaskId); 

        localStorage.setItem('tasks', JSON.stringify(tasks)); 
      }); 
    };
    
  
      } 
          
        
          
    // What should happen here:
    // - Read values from the form (title, category, due date) 
    // - Validate that the title is not empty
    // - Create a new task object
    // - Add it to the tasks array ( use tasks.push(nextTaskId))
    // - Save updated tasks to localStorage 
    // - Update the page to show the new task
    // - Clear the form
    // TODO: Add a new task
  



  // When clicking inside the task list (“event delegation”):
    , taskList.addEventListener("click", (event) => {
    const target = event.target;
    const listItem = target.closest(".task-item");
    if (!listItem) return;

    const taskId = Number(listItem.dataset.id);
    

    // If the checkbox was clicked:
    if (target.classList.contains("task-checkbox")) 
      {function checkit() {
        let tasks = []; 
        tasks.push(nextTaskId)
      }
      
      // What should happen here:
      // - Find the matching task in the array
      // - Toggle its completed state
      // - Save updated tasks
      // - Update the page
      // TODO: Toggle completed state
      return;
  }
   
    // If the delete button was clicked: 

   if (target.classList.contains("task-delete-btn")) {
      taskList.addEventListener("click", (event)  => {
       const listItem = event.target.parentElement
      taskList.removeChild(listItem);
    });

      // What should happen here:
      // - Remove the task from the tasks array
      // - Save updated tasks
      // - Update the page
      // TODO: Delete the task
      return;
    }
    }) 
)   

