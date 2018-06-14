document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);

    // Tooltips
    let tips = document.querySelectorAll('.tooltipped');
    let tool_tips = M.Tooltip.init(tips, {enterDelay: 800});

    // Confirm before delete
    let el = document.getElementsByClassName('confirmation');
    let confirmIt = function (e) {
        if (!confirm('Você deseja realmente remover este recurso?')) e.preventDefault();
    };
    for (let i = 0, l = el.length; i < l; i++) {
        el[i].addEventListener('click', confirmIt, false);
    }
});