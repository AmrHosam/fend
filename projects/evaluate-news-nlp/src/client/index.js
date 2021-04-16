import { handleSubmit } from './js/formHandler'
import { urlValidation }from './js/urlChecker'
import { getPolarity }from './js/polarityChecker'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import img from './images/index.png';

alert("I exist")

document.getElementById("logo").setAttribute("src",img)

export {
    handleSubmit,
    urlValidation,
    getPolarity
   }
   