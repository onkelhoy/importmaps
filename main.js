import {hello} from "hello";
import {world} from "world";

window.onload = () => {
  const btn = document.querySelector('button');

  btn.onclick = () => {
    hello();
    world();
  }
}