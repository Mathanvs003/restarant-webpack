import {navbar} from "./home";
import { body1 } from "./home";
import { abtbody } from "./about";
import { menubdy } from "./menu";
import render from "./render";

navbar()
body1()

document.getElementById("two").addEventListener('click',()=>{
    render()
    abtbody()

});
document.getElementById("one").addEventListener('click',()=>{
    render()
    body1()
});
document.getElementById("three").addEventListener('click',()=>{
    render()
    menubdy()
});