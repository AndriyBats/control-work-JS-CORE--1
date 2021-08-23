let getSel = function (selector) {
    return document.querySelector(selector);
}

let f1 = document.forms.f1;
let f2 = document.forms.f2;
let f3 = document.forms.f3;
let f4 = document.forms.f4;
let f5 = document.forms.f5;
let f6 = document.forms.f6;

f1.edit.addEventListener('click', function () {
    getSel('.block2-style-form').style.display = 'none';
    getSel('.block2-edit').style.display = 'block';
    getSel('.block2-edit-textarea').value = getSel('.block1').innerHTML;
})
f2.save.addEventListener('click', function () {
    getSel('.block1').innerHTML = getSel('.block2-edit-textarea').value;
    getSel('.block2-edit').style.display = 'none';
})
f1.style.addEventListener('click', function () {
    getSel('.block2-edit').style.display = 'none';
    getSel('.block2-style-form').style.display = 'block';
})

f3.addEventListener('click', function (event) {
    if (event.target.name === 'fontSize') {
        getSel('.block1').style.fontSize = event.target.value;
    }
})
f3.chooseFontFamily.addEventListener('change', function () {
    getSel('.block1').style.fontFamily = this.value;
})

f3.colorOfText.addEventListener('click', function () {
    getSel('.block2-style-right').style.display = 'block';
    getSel('.block1').classList.remove('.block1-background');
    getSel('.block1').classList.add('.block1-color');
})

f3.backgroundColor.addEventListener('click', function () {
    getSel('.block2-style-right').style.display = 'block';
    getSel('.block1').classList.remove('.block1-color');
    getSel('.block1').classList.add('.block1-background');
})

getSel('.block-color').addEventListener('click', function (event) {
    if (getSel('.block1').classList.contains('.block1-color')) {
        getSel('.block1').style.color = getComputedStyle(event.target).backgroundColor;
    } else if (getSel('.block1').classList.contains('.block1-background')) {
        getSel('.block1').style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    }
    getSel('.block2-style-right').style.display = 'none';
})

f3.boldText.addEventListener('click', function () {
    if (this.checked) {
        getSel('.block1').style.fontWeight = '700';
    } else {
        getSel('.block1').style.fontWeight = '';
    }
})

f3.cursiveText.addEventListener('click', function () {
    if (this.checked) {
        getSel('.block1').style.fontStyle = 'italic';
    } else {
        getSel('.block1').style.fontStyle = '';
    }
})
f2.add.addEventListener('click', function () {
    getSel('.container1').style.display = 'none';
    getSel('.container2').style.display = 'block';
    getSel('.block3-radio-table').checked = false;
    getSel('.block3-radio-list').checked = false;
    getSel('.create-table').style.display = 'none';
    getSel('.create-list').style.display = 'none';
})

f4.addEventListener('click', function (event) {
    if (event.target.value === 'table') {
        getSel('.create-table').style.display = 'block';
        getSel('.create-list').style.display = 'none';
        getSel('.block3-input-countTR').value = '';
        getSel('.block3-input-countTD').value = '';
        getSel('.block3-input-widthTD').value = '';
        getSel('.block3-input-heightTD').value = '';
        getSel('.width-border').value = '';  
    } else if (event.target.value === 'list') {
        getSel('.create-list').style.display = 'block';
        getSel('.create-table').style.display = 'none';
        getSel('.block3-input-countLi').value = '';
    }
})

f5.createYourTable.addEventListener('click', function () {
    getSel('.container2').style.display = 'none';
    getSel('.container1').style.display = 'block';
    let myTable = document.createElement('table');
    myTable.style.borderSpacing = 0;
    for (let i = 0; i < getSel('.block3-input-countTR').value; i++) {
        let myTr = document.createElement('tr');
        myTable.appendChild(myTr);
        for (let i = 0; i < getSel('.block3-input-countTD').value; i++) {
            let myTd = document.createElement('td');
            myTd.textContent = 'TD';
            myTd.style.width = getSel('.block3-input-widthTD').value + 'px';
            myTd.style.height = getSel('.block3-input-heightTD').value + 'px';
            myTd.style.border = getSel('.width-border').value + 'px' + ' ' + getSel('.choose-type-of-border').value + ' ' + getSel('.choose-color-of-border').value;
            myTr.appendChild(myTd);
        };
    };
    getSel('.block2-edit-textarea').value += myTable.outerHTML;
})

f6.createYourList.addEventListener('click', function () {
    getSel('.container2').style.display = 'none';
    getSel('.container1').style.display = 'block';
    let myUl = document.createElement('ul');
    for (let i = 0; i < getSel('.block3-input-countLI').value; i++) {
        let myLi = document.createElement('li');
        myLi.textContent = 'item'+' '+(i+1);
        myLi.style.listStyleType = getSel('.choose-type-of-marks').value;
        myUl.appendChild(myLi);  
    };
    getSel('.block2-edit-textarea').value += myUl.outerHTML;
})