import "./menu.css";

export function menubdy(){
    const body=document.getElementById("maddy");
    body.innerHTML ="";


    const menudiv=document.createElement('div');
    menudiv.classList.add('menucnt');
    menudiv.id="menuu";

    const images=[{img:'idli.jpg'} ,{img:"dosa.png"},{img:"poori.jpg"},{img:"rice.jpg"},{img:"meals.jpg"},{img:"briyani.jpg"}]
    const foods=['idli','dosa','poori','variety rice','meals','briyani']
    const kj=[0,0,0,0,0,0]
    const maps=kj.map((e,i)=>{

        let div2=document.createElement('div');
        div2.classList.add('box1'); 
        div2.classList.add('main-box');

        const img3=document.createElement("img");
        img3.src=images[i].img;

        const p=document.createElement("p");
        p.innerText=foods[i];

        let button=document.createElement("button");
        button.innerText="Order Now";

        div2.append(img3)
        div2.append(p)
        div2.append(button)
        menudiv.append(div2)   
    })
    body.append(menudiv); 

    
}
