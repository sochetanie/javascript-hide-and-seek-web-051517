function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested > div > div > div > div')
}

function increaseRankBy(n) {
    let list = document.querySelectorAll('.ranked-list > li')
    list.forEach(x => { x.innerHTML = parseInt(x.innerHTML) + n })
}

function deepestChild() {
    return document.querySelector('#grand-node > div > div > div > div')
}