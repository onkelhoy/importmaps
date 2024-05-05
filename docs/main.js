import {hello} from "hello";
import {world} from "world";

window.onload = () => {
  const btn = document.querySelector('button');

  fetchTranslations();

  btn.onclick = () => {
    hello();
    world();
  }
}

async function fetchTranslations() {
  try {
    const res = await fetch('public/translations/en.json');
    const t = await res.json();

    console.log('yes here is translations:', t['hello'], t);
  }
  catch (e) {
    console.error('ERROR', e)
  }
}