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

export const matchedTexts = (textArray: string[], searchText: string) => {
  let matchedResults: string[] = [];
  const regex = new RegExp(searchText, 'g');
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
console.log(matchedTexts(textArray, searchText));
