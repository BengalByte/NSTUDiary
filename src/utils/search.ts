let textArray = [
  'Abrar',
  'Fahim',
  'Patwari',
  'Towhidul',
  'Islam',
  'Rakibul',
  'Islam',
];
let searchText = 'Ab';

const letterAndNumberText = (text: string) => {
  // Remove all characters that are not numbers or letters
  return text.replace(/[^a-zA-Z0-9]/g, '');
};

export const matchedTexts = (textArray: string[], searchText: string) => {
  let matchedResults: string[] = [];
  let cleanText = letterAndNumberText(searchText);
  const regex = new RegExp(cleanText.trim(), 'gi');
  if (searchText === '') {
    return textArray;
  } else {
    for (let i = 0; i < textArray.length; i++) {
      console.log(textArray[i]);
      if (regex.test(textArray[i])) {
        matchedResults.push(textArray[i]);
      }
    }
    return matchedResults;
  }
};
