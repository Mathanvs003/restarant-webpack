const render = function(){
    const content = document.getElementById('maddy');
    content.style="";
    while(content.children.length > 1){
        content.children[0].remove();
    }
}

export default render;