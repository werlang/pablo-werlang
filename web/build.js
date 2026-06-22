import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';
import { getIndexData } from './route/index.js';

const routeName = 'index';

const templatePath = path.join(import.meta.dirname, 'view', `${routeName}.html`);
const outputPath = path.join(import.meta.dirname, 'public', `${routeName}.html`);

try {
    console.log(`Reading template from: ${templatePath}`);
    const template = fs.readFileSync(templatePath, 'utf8');

    console.log(`Compiling view: ${routeName}...`);
    const rendered = Mustache.render(template, getIndexData());

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, rendered, 'utf8');
    console.log(`Successfully compiled and wrote static HTML to: ${outputPath}`);
} catch (err) {
    console.error(`Failed to compile view ${routeName}:`, err);
    process.exit(1);
}
