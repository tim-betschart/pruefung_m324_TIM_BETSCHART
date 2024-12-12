import fs from 'fs';
import showdown from 'showdown';

const readmeContent = fs.readFileSync('task-3.md', 'utf-8');

const converter = new showdown.Converter();
const htmlContent = converter.makeHtml(readmeContent);

fs.writeFileSync('task-3.html', htmlContent);