import { PlainTexts, BoldDecorator, ItalicDecorator, StrikeOutDecorator, showOutput } from "./data/test";
const p1 = new PlainTexts("Hello, World");
const d1 = new BoldDecorator(p1);
const d2 = new ItalicDecorator(d1);
const d3 = new StrikeOutDecorator(d2);


showOutput(p1);
showOutput(d1);
showOutput(d2);
showOutput(d3);
