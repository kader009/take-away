const text = document.getElementById('text');
const submit = document.getElementById('submit');
const show = document.getElementById('show');

submit.addEventListener('click', () => {
  const inputValue = text.value.trim();

  const listItem = document.createElement('li');
  const taskItem = document.createElement('span');
  const deletebtn = document.createElement('button');
  deletebtn.innerText = 'Delete';
  deletebtn.style.marginLeft = '10px';
  taskItem.innerHTML = inputValue;

  deletebtn.addEventListener('click', () => {
    show.removeChild(listItem);
  });

  listItem.appendChild(taskItem);
  listItem.appendChild(deletebtn);
  show.appendChild(listItem);
  text.value = '';
});
