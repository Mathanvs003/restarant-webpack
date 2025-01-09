import "./about.css";

export function abtbody(){
    
    const abtdiv=document.createElement("div");
    abtdiv.classList.add('back');

    abtdiv.id="abt";

    const body=document.querySelector('#maddy');
    body.innerHTML ="";

    const div2=document.createElement("div");
    div2.classList.add('centercnt');

    const h1=document.createElement("h1");
    h1.id="title";

    h1.innerHTML="About Us";

    const p=document.createElement("p");
    p.id="cnt";

    p.innerHTML="Maddy’s Restaurant offers a cozy yet elegant dining experience in the heart of Tirunelveli. Known for its innovative dishes and commitment to quality, Maddy’s serves a diverse menu ranging from comfort foods like prime rib and truffle mac & cheese to fresh, seasonal creations. Using locally sourced ingredients, each meal is crafted to delight the senses. The welcoming atmosphere, complemented by attentive service, makes it perfect for any occasion. Whether for a casual meal or a special celebration, Maddy’s promises a memorable dining experience. Reserve your table today and taste the difference at Maddy’s Restaurant";
    div2.append(h1);
    div2.append(p);
    abtdiv.append(div2);

    body.append(abtdiv)
}

