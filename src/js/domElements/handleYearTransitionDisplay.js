import { yearChangeBlender } from './createDomElements';

function yearTransitionDisplay() {
  yearChangeBlender.style.opacity = '1';
  yearChangeBlender.style.visibility = 'visible';
  setTimeout(() => {
    yearChangeBlender.style.opacity = '0';
  }, 600);
  setTimeout(() => {
    yearChangeBlender.style.visibility = 'hidden';
  }, 1000);
}

export default yearTransitionDisplay;
