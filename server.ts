import { Application } from 'https://deno.land/x/oak/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import router from './routes.ts';

const env = config();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${env.PORT}`);
await app.listen({ port: Number(env.PORT) });
