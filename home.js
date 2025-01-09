import "./demo.css"


export function navbar(){
   
    const nav=document.createElement('nav');
    nav.classList.add('navbar');

    const div1=document.createElement('div');
    div1.classList.add('header');
    div1.classList.add('header1');


    const h1=document.createElement('h1');
    h1.classList.add('title');

    h1.innerHTML="Maddy's Restaurant";

    const ul=document.createElement('ul');
    ul.classList.add('list');

    const li1=document.createElement('li');
    const li2=document.createElement('li');
    const li3=document.createElement('li');

    const a1=document.createElement('a');
    const a2=document.createElement('a');
    const a3=document.createElement('a');

    a1.id="one";
    a2.id="two";
    a3.id="three";

    a1.href="#home";
    a2.href="#about"
    a3.href="#menu"

    a1.innerText="Home";
    a2.innerText="About Us";
    a3.innerText="Menu";

    li1.append(a1);
    li2.append(a2)
    li3.append(a3)

    const body=document.querySelector('#navv');

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
 
    div1.append(h1);
    div1.append(ul)
    nav.append(div1);
    body.append(nav);

    
}

export function body1(){

   
    const body=document.getElementById('maddy');
    body.innerHTML='';

    const img=document.createElement("img");
    img.src="body2.avif";
    img.classList.add("face");

    const hmdiv=document.createElement('div');
    hmdiv.append(img);
    hmdiv.classList.add("middle")

    hmdiv.id="mid";

    const h1=document.createElement('h1');
    h1.classList.add('content');

    const p=document.createElement('p');
    p.classList.add('content1');

    h1.innerHTML="Welcome Maddy's Restaurant";
    p.innerHTML="A restaurant about natural foods is typically called an organic restaurant where the primary focus is on serving dishes made with ingredients.";

    hmdiv.append(h1);
    hmdiv.append(p);
    body.append(hmdiv);
  

    // const a=document.getElementById('mid');
    // a.style.display="flex";

    // const b=document.getElementById('menuu');
    // b.style.display="none";

    // const c=document.getElementById('abt');
    // c.style.display="none";  
}

  
