const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for ( i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for ( i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})

const tabs1 = document.getElementById('tabs1');
const content1 = document.querySelectorAll('.content1');

const changeClass1 = el => {
    for ( i = 0; i < tabs1.children.length; i++) {
        tabs1.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs1.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass1(e.target);
    for ( i = 0; i < content1.length; i++) {
        content1[i].classList.remove('active');
        if (content1[i].dataset.content1 === currTab) {
            content1[i].classList.add('active');
        }
    }
})