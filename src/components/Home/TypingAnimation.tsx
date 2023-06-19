import { useEffect, useRef, useState } from "react";

type CodeColorInstruction = {
  color: string;
  start: number;
  end: number;
};

type CodeChar = {
  id: string;
  char: string;
  color: string;
};

const colorScheme: CodeColorInstruction[][] = [
  [
    // 0
    { color: "secondary", start: 0, end: 5 },
    { color: "primary", start: 6, end: 28 },
    { color: "secondary", start: 29, end: 33 },
    { color: "accent", start: 34, end: 55 },
  ],
  [
    // 1
    { color: "secondary", start: 0, end: 2 },
    { color: "primary", start: 3, end: 17 },
    { color: "secondary", start: 18, end: 18 },
    { color: "primary", start: 19, end: 19 },
    { color: "accent", start: 20, end: 34 },
    { color: "secondary", start: 35, end: 36 },
    { color: "primary", start: 37, end: 45 },
    { color: "secondary", start: 46, end: 46 },
    { color: "accent", start: 47, end: 48 },
    { color: "primary", start: 49, end: 50 },
  ],
  [
    { color: "secondary", start: 0, end: 12 },
    { color: "primary", start: 13, end: 15 },
  ],
  [
    // 3
    { color: "primary", start: 0, end: 1 },
    { color: "secondary", start: 2, end: 5 },
    { color: "primary", start: 6, end: 9 },
    { color: "secondary", start: 10, end: 12 },
    { color: "accent", start: 13, end: 27 },
    { color: "primary", start: 28, end: 28 },
  ],
  [
    // 4
    { color: "primary", start: 0, end: 1 },
    { color: "secondary", start: 2, end: 5 },
    { color: "primary", start: 6, end: 11 },
    { color: "secondary", start: 12, end: 12 },
    { color: "primary", start: 13, end: 14 },
    { color: "accent", start: 15, end: 29 },
    { color: "primary", start: 30, end: 31 },
    { color: "accent", start: 32, end: 50 },
    { color: "primary", start: 51, end: 51 },
    { color: "accent", start: 52, end: 65 },
  ],
  [
    { color: "primary", start: 0, end: 6 },
    { color: "secondary", start: 7, end: 7 },
    { color: "accent", start: 8, end: 57 },
    { color: "primary", start: 58, end: 61 },
  ],
  [
    // 6
    { color: "primary", start: 0, end: 8 },
    { color: "secondary", start: 9, end: 23 },
    { color: "primary", start: 24, end: 27 },
  ],
  [{ color: "primary", start: 0, end: 2 }],
];

// this looks horrible, but the trailing empty spaces are essential to "pause" the cursor for a bit at the end of each line
const codeLines = [
  "import { FelipeChernicharo } from 'software-development';                                  ",
  "var helloStranger = `welcome to my ${Portfolio}!`;                                  ",
  "soGladYouHere() {                                  ",
  "  var take = 'a look around';                                  ",
  "  var check = ['my background', 'personal projects', 'tech skills'];                                  ",
  "  { see: 'a little bit of my work as a programmer, and...' };                                  ",
  "  return wheneverYouLike();  ",
  "}; ",
];

let objIdx = 0;
function getCharColor(id: string) {
  const [row, col] = id.split("-").map(Number);
  const colorRow = colorScheme[row];
  if (col === 0) objIdx = 0;
  if (col > colorRow[objIdx]?.end) {
    objIdx++;
  }

  return colorRow[objIdx]?.color || "base-content opacity-80";
}

const codeTable: CodeChar[][] = [];
for (let i = 0; i < codeLines.length; i++) {
  const line = codeLines[i];
  codeTable[i] = [];
  for (let j = 0; j < line.length; j++) {
    const [id, char] = [`${i}-${j}`, line[j]];
    codeTable[i][j] = { id, char, color: getCharColor(id) };
  }
}

export default function TypingAnimation() {
  const [cursorIdx, setCursorIdx] = useState(0);
  const [cursorRow, setCursorRow] = useState(0);
  const interval = useRef<any>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCursorIdx((prev) => prev + 1);
    }, 50);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (codeTable[cursorRow] && cursorIdx >= codeTable[cursorRow].length) {
      if (cursorIdx === 3 && cursorRow === 7) {
        clearInterval(interval.current);
        return;
      }

      setCursorIdx(0);
      setCursorRow((prev) => prev + 1);
    }
  }, [cursorIdx]);

  return (
    <div className="mockup-window bg-primary max-w-[900px] mx-auto">
      <div className="bg-base-300">
        <div className="font-mono text-lg h-[450px] w-[900px] flex flex-col justify-center pl-20">
          {codeTable.map((line, i) => (
            <div className={`py-2 animate-pulse`} key={i}>
              {line.map((char, j) => {
                const [row, col] = char.id.split("-").map(Number);
                if (cursorIdx === col && cursorRow === row) {
                  // moving cursor
                  return <div key={char.id} className="inline-block w-2 h-5 -mb-1 bg-base-content opacity-80"></div>;
                } else if (cursorRow < row || (cursorRow === row && cursorIdx < col)) {
                  // text truncation
                  return <div key={char.id} className="inline-block w-2 h-4"></div>;
                } else if (row === 7 && col === 2) {
                  // final cursor
                  return <div key={char.id} className="inline-block w-2 h-5 -mb-1 bg-base-content opacity-80"></div>;
                } else {
                  // indentation
                  return (
                    <span key={char.id} className={`text-${char.color} ${char.char === " " && j < 3 ? "ml-2" : ""}`}>
                      {char.char}
                    </span>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
