import { Log } from "./logger.js";

async function testLogger() {
  await Log(
    "frontend",
    "info",
    "component",
    "Logger initialized successfully"
  );
}

testLogger();