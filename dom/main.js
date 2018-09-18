const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    const container = document.querySelector('#container');
    const box = document.querySelector('#box');
    const text = document.querySelector('.text');

    const addNames = document.querySelector('#add-name');
    const names = document.querySelector('.names');

    btn.innerText = 'click me';
    btn.addEventListener('click', () => alert('hello world'));

    container.appendChild(btn);

    const submitBtn = document.querySelector('#submitBtn');
    submitBtn.addEventListener('click', () => {
        const textInp = document.querySelector('#text-input');
        alert(textInp.value);
    });

    box.addEventListener('mouseenter', () => box.style.backgroundColor = generateRandomColor());

    box.addEventListener('mouseleave', () => box.style.backgroundColor = 'black');

    text.addEventListener('click', () => text.style.color = generateRandomColor());

    addNames.addEventListener('click', () => {
        const name = document.createElement('span');
        name.innerText = 'ray';
        names.appendChild(name);
    });

    const friendNames = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10'];
    const listBtn = document.querySelector('#listBtn');
    const nameList = document.querySelector('#nameList');

    listBtn.addEventListener('click', () => friendNames
        .map((n) => {
            const li = document.createElement('li');
            li.innerText = n;
            return li;
        })
        .forEach(li => nameList.appendChild(li))
    )
});