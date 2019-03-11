const fetch = require("node-fetch");

const getfrequency = async (req, res) => {
  if (!req.params.number || isNaN(req.params.number))
    return res.status(400).failure("Please enter a valid number.");

  let data = await getTTTData();
  if (data.status === "failure")
    return res.status(400).failure("Internal server error.");
  let wordMap = createWordMap(data.array);
  let sortedData = sortByCount(wordMap);

  res
    .status(200)
    .success(sortedData.slice(0, req.params.number), "Data finally recieved.");
};

async function getTTTData() {
  try {
    const initialData = await fetch("http://terriblytinytales.com/test.txt");
    const data = await initialData.text();
    let arr = data.split(/\s+/);
    return { status: "success", array: arr };
  } catch (err) {
    return { status: "failure" };
  }
}

function createWordMap(words) {
  var wordsMap = {};
  words.forEach(function(key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;
}

function sortByCount(wordsMap) {
  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
}

module.exports = {
  getfrequency
};
