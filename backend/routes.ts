import { Router } from './deps.ts';
import { getDapps } from './routes/transactions.ts';

const router = new Router();

router.get('/api/dapps', getDapps);

export default router;
