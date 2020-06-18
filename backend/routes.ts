import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getDapps } from './routes/transactions.ts';

const router = new Router();

router.get('/api/dapps', getDapps);

export default router;
