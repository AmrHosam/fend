import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import img from './images/index.png';

console.log("CHANGE!!");

document.getElementById("logo").setAttribute("src",img)

export {
    checkForName,
    handleSubmit
   }
   