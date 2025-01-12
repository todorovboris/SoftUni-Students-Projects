import url from 'url';
import fs from 'fs';
import path from 'path';
import cats from '../data/cats.json';
import breeds from '../data/breeds.json';

export const handler = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    // showing HOME html
    if (pathname === '/' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/home/index.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('404 Not Found');
                res.end();
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};
