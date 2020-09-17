const submitForm = document.querySelector('.input-box'); // 할 것 제출
const button = document.querySelector('button'); // 입력버튼
const textInput = document.querySelector('input'); // 추가 할 내용
const todolist = document.querySelector('#todo-list'); // 버튼을 눌렀을 때 추가되는 곳
const todo = document.querySelector('.todo');
const done = document.querySelector('.done');
const Donelist = document.querySelector('#done-list');
var count_todolist = 0;
var count_donelist = 0;

// 폼 제출 비동기 함수
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hi');
    if (textInput.value) {
        // textInput.value에 내용이 담겼으면
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = textInput.value;
        span.style.display = 'inline-block';
        span.style.width = '250px';
        div.append(span);

        span.addEventListener('dblclick', (e) => {
            console.log(e.target.parentNode.id);
            const parent = e.target.parentNode;
            if (parent.parentNode.id === 'todo-list') {
                Donelist.append(e.target.parentNode);
                span.style.textDecoration = 'line-through';
                count_donelist += 1;
                count_todolist -= 1;
            } else {
                todolist.append(e.target.parentNode);
                span.style.textDecoration = 'none';
                count_donelist -= 1;
                count_todolist += 1;
            }
            todo.textContent = 'To do list (' + count_todolist + ')';
            done.textContent = 'Done list (' + count_donelist + ')';
        });

        console.log('div content', div.textContent);
        console.log(textInput.value);
        count_todolist += 1;
        todo.textContent = 'To do list (' + count_todolist + ')';

        const button_span = document.createElement('span');
        const button = document.createElement('button');
        button.textContent = 'delete';
        button.addEventListener('click', (e) => {
            let div = e.target;
            while (div.tagName !== 'DIV') div = div.parentNode;
            console.log(div);
            if (div.parentNode.id === 'todo-list') {
                count_todolist -= 1;
                todo.textContent = 'To do list (' + count_todolist + ')';
            } else {
                count_donelist -= 1;
                done.textContent = 'Done list (' + count_donelist + ')';
            }
            div.parentNode.removeChild(div);
        });
        button_span.append(button);
        div.append(button_span);
        todolist.append(div);
        textInput.value = '';
        console.log(todolist.textContent);
        console.log('completed');
    }
});
