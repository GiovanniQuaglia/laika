import { textSpan } from '../domElements/createDomElements';

export default function dialogueDisplayer(delay, text) {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  wait(delay).then(() => { textSpan.innerHTML = text; });
}
