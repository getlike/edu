function edit(e,id) {
    //e.PreventDefault; // Сразу в начале функции
    if (e=='admin'){
        alert('низя низя');
    }
    else (
        window.location.href = 'edit.php?id='+id
    )
}
function deleted(e,id) {
    //e.PreventDefault; // Сразу в начале функции
    if (e=='admin'){
        alert('низя низя');
    }
    else (
        window.location.href = 'delete.php?id='+id
    )
}