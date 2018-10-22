import dialogueDisplayer from './dialoguesTextDisplay';

function automaticNewYearDialogues(value) {
  const year = `${value}`;
  if (year.length > 4) {
    dialogueDisplayer(1200, "This doesn't look good. Better not to go too much into the future.");
    dialogueDisplayer(5200, '');
  }
  else if (year === '1957' || year === '1968') { return; }
  else {
    dialogueDisplayer(1200, 'Seems like there is nothing special now.');
    dialogueDisplayer(5200, '');
  }
}

export default automaticNewYearDialogues;
