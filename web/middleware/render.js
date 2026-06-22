import fs from 'fs';
import path from 'path';

/**
 * Middleware that attaches res.templateRender.
 * It compiles the Mustache view using res.render, saves the resulting HTML file
 * to the web/public/ directory, and sends the response.
 */
export const renderMiddleware = (req, res, next) => {
    res.templateRender = (view, templateVars = {}) => {
        res.render(view, templateVars, (err, html) => {
            if (err) {
                console.error(`[renderMiddleware] Rendering error:`, err);
                return next(err);
            }

            const publicDir = path.join(import.meta.dirname, '../public');
            const targetPath = path.join(publicDir, `${view}.html`);

            try {
                if (!fs.existsSync(publicDir)) {
                    fs.mkdirSync(publicDir, { recursive: true });
                }
                fs.writeFileSync(targetPath, html, 'utf8');
            } catch (writeErr) {
                console.error(`[renderMiddleware] Failed to write compiled static HTML to ${targetPath}:`, writeErr);
            }

            res.send(html);
        });
    };
    next();
};
