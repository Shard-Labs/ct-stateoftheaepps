import { Application } from './deps.ts';
import { config } from './deps.ts';
import cronStart from './cron/cron.ts';
import router from './routes.ts';
import { connectToDB } from './config/db.ts';
import { oakCors } from './deps.ts';

const env = config();

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}/public/img`,
  });
});

connectToDB();
cronStart();

console.log(`Server running on port ${env.PORT}`);
await app.listen({ port: Number(env.PORT) });
