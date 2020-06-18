import { Application } from 'https://deno.land/x/oak/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import cronStart from './cron/cron.ts';

import router from './routes.ts';
import { connectToDB } from './config/db.ts';

const env = config();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

connectToDB();
cronStart();

console.log(`Server running on port ${env.PORT}`);
await app.listen({ port: Number(env.PORT) });
