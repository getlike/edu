function activateMenu() {
    document.addEventListener('click', function (e) {
        if (e.target.className === 'menu-item') {
            reserActiveItem();
            e.target.className = 'menu-item selected';
        }
        // else if (e.target.className === 'menu-item selected') {
        //     reserActiveItem();
        //     e.target.className = 'menu-item';
        // }
    })
}


function reserActiveItem() {
    var items = document.querySelectorAll('.menu-item');

    for (var i = 0; i < items.length; i++) {
        items[i].className = 'menu-item';
    }
}

function init() {
    activateMenu();

}

window.onload = function () {
    init();
};