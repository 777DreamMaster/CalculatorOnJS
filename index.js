function insert(num){
    document.form.textview.value = 
        document.form.textview.value + num; 
}

function clean() {
    document.form.textview.value ="";
}

function remove(){
    var expr = document.form.textview.value;
    document.form.textview.value = expr.substring(0, expr.length - 1);
}

function equal(){
    var expr = document.form.textview.value;
    
    if (expr){
        expr = expr.replaceAll("×", "*");
        expr = expr.replaceAll("÷", "/");
        console.log(expr);
        document.form.textview.value = eval(expr);
    }
}

document.onkeydown = function(e){
    var code = e.keyCode;
    if (code > 95 && code < 106 || code > 47 && code < 58){
        if (code > 95){
            code = code - 48;
        }
        insert(String.fromCharCode(code));
    }
    if (code == 8) remove();

    if (code == 106) insert('×');
    if (code == 107) insert('+');
    if (code == 109) insert('-');
    if (code == 110) insert('.');
    if (code == 111) insert('÷');

    if (code == 13) equal();
    console.log(code)
       
}