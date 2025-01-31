import { skillFunctionality } from "./skills.js";
import { topNav } from "./topnav.js";
import { animation } from "./animation.js";


topNav();
skillFunctionality();
animation();


const copyright = `&copy;${new Date().getFullYear()} Radithya Rafa. All rights reserved`;
document.querySelector('footer p').innerHTML = copyright;

