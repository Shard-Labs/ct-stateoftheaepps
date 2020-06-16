import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getTransactions,
} from "./transactions.ts";

const router = new Router();

router.get("/api/transactions", getTransactions);

export default router;
