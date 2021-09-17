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