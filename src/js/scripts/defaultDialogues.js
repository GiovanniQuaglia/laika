import dialogueDisplayer from './dialoguesTextDisplay';

function defaultDialogues(value) {
  const year = `${value}`;
  if (year === '0') {
    dialogueDisplayer(1200, 'One of my ancestors was born this year.');
    dialogueDisplayer(5200, '');
  }
  else if (year.length > 4) {
    dialogueDisplayer(1200, "This doesn't look good. Better not to go too much into the future.");
    dialogueDisplayer(5200, '');
  }
  else if (year === '1957' || year === '2018' || year === '0');
  else {
    dialogueDisplayer(1200, 'Seems like there is nothing special now.');
    dialogueDisplayer(5200, '');
  }
}

export default defaultDialogues;
