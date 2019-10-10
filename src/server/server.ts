import * as path from 'path';
import * as express from 'express';
import * as passport from 'passport';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';

import routes from './routes';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(express.json());
app.use(routes);
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
