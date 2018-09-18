const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

$(document).ready(() => {
    const btn = $('<input type="button" value="click me"></input>');
    const container = $('#container');
    const box = $('#box');
    const text = $('.text');

    const addNames = $('#add-name');
    const names = $('.names');

    btn.click(() => alert('hello world'));

    btn.appendTo(container);

    const submitBtn = $('#submitBtn');
    submitBtn.click(() => {
        const textInp = $('#text-input');
        alert(textInp.val());
    });

    box.mouseover(() => box.css('background-color', generateRandomColor()));

    box.mouseout(() => box.css('background-color', 'black'));

    text.click(() => text.css('color', generateRandomColor()));

    addNames.click(() => $('<span>ray</span>').appendTo(names));

    const friendNames = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9', 'name10'];

    $('#listBtn').click(() => friendNames
        .map((n) => $(`<li>${n}</li>`))
        .forEach(li => li.appendTo($('#nameList')))
    )
});
