function focusAndScrollViewElement(element){
    var ele = document.getElementById(element);
    ele.focus();
    ele.scrollIntoView({ behavior: 'smooth' });
}