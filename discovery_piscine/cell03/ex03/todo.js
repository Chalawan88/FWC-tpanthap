const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return "";
}

function saveTodos() {
  const todos = [];
  const items = ftList.children;
  for (let i = 0; i < items.length; i++) {
    todos.push(items[i].textContent);
  }
  setCookie('todos', JSON.stringify(todos), 7);
}

function createTodo(text) {
  const todoDiv = document.createElement('div');
  todoDiv.textContent = text;

  todoDiv.addEventListener('click', () => {
    if (confirm('Do you really want to remove this TO DO?')) {
      todoDiv.remove();
      saveTodos();
    }
  });

  ftList.insertBefore(todoDiv, ftList.firstChild);
}

function loadTodos() {
  const saved = getCookie('todos');
  if (saved) {
    try {
      const todos = JSON.parse(saved);
      for (let i = todos.length - 1; i >= 0; i--) {
        createTodo(todos[i]);
      }
    } catch (e) {}
  }
}

newBtn.addEventListener('click', () => {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== '') {
    createTodo(text.trim());
    saveTodos();
  }
});

loadTodos();