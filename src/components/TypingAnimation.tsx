// accent -> yellow
// primary -> red
// secondary -> purple
const colorScheme = [
  [
    // 0
    { color: "primary", start: 0, end: 5 },
    { color: "white", start: 6, end: 28 },
    { color: "secondary", start: 29, end: 53 },
    { color: "white", start: 54, end: 55 },
  ],
  [
    // 1
    { color: "primary", start: 0, end: 2 },
    { color: "white", start: 3, end: 17 },
    { color: "primary", start: 18, end: 18 },
    { color: "white", start: 19, end: 19 },
    { color: "accent", start: 20, end: 34 },
    { color: "primary", start: 35, end: 36 },
    { color: "white", start: 37, end: 45 },
    { color: "primary", start: 46, end: 46 },
    { color: "accent", start: 47, end: 48 },
    { color: "white", start: 49, end: 50 },
  ],
  [
    { color: "accent", start: 0, end: 12 },
    { color: "white", start: 13, end: 15 },
  ],
  [
    // 3
    { color: "white", start: 0, end: 1 },
    { color: "primary", start: 2, end: 5 },
    { color: "white", start: 6, end: 11 },
    { color: "primary", start: 12, end: 12 },
    { color: "white", start: 13, end: 14 },
    { color: "accent", start: 15, end: 29 },
    { color: "white", start: 30, end: 31 },
    { color: "accent", start: 32, end: 34 },
  ],
  [
    // 4
    { color: "white", start: 0, end: 1 },
    { color: "primary", start: 2, end: 5 },
    { color: "white", start: 6, end: 11 },
    { color: "primary", start: 12, end: 12 },
    { color: "white", start: 13, end: 14 },
    { color: "accent", start: 15, end: 29 },
    { color: "white", start: 30, end: 31 },
    { color: "accent", start: 32, end: 34 },
    { color: "accent", start: 32, end: 34 },
  ],
  [
    { color: "white", start: 0, end: 6 },
    { color: "primary", start: 7, end: 7 },
    { color: "accent", start: 8, end: 57 },
    { color: "white", start: 58, end: 61 },
  ],
  [
    { color: "primary", start: 0, end: 8 },
    { color: "secondary", start: 9, end: 23 },
    { color: "white", start: 24, end: 27 },
  ],
  [{ color: "white", start: 0, end: 1 }],
];

const textTable = [
  "import { SoftwareDeveloper } from 'felipe-chernicharo';",
  "var helloStranger = `welcome to my ${Portfolio}!`;",
  "soGladYouHere() {",
  "  var take = 'a look around';",
  "  var check = ['my background', 'personal projects', 'tech skills'];",
  "  { see: 'a little bit of my work as a programmer, and...' };",
  "  return wheneverYouLike();",
  "}",
];

let objIdx = 0;
function getCharColor(id: string) {
  const [row, col] = id.split("-").map(Number);
  const colorRow = colorScheme[row];
  if (col === 0) objIdx = 0;
  if (col > colorRow[objIdx]?.end) {
    objIdx++;
  }

  return colorRow[objIdx]?.color || "blue";
  // return colorRow[objIdx].color;
  // if (col >= colorRow[objIdx].start && col <= colorRow[objIdx].end) {}
}

const codeTable: any = [];
for (let i = 0; i < textTable.length; i++) {
  const line = textTable[i];
  codeTable[i] = [];
  for (let j = 0; j < line.length; j++) {
    const [id, ch] = [`${i}-${j}`, line[j]];
    codeTable[i][j] = { id, ch, color: getCharColor(id) };
  }
}

console.log({ codeTable });

export default function TypingAnimation() {
  return <div>
    
  </div>;
}
