import { test, mock } from "node:test";
import assert from "node:assert";
import got from "got";
import { isUrlOk } from "../dist/index.js";

test("testtesttest", async (t) => {
  const mockGot = t.mock.method(got, "head", () => {
    return { statusCode: 200 };
  });

  const url = "https://github.com/vercel/turbo/";

  const result = await isUrlOk(url);

  assert.strictEqual(result, true);
  assert.strictEqual(mockGot.mock.calls.length, 1);
  assert.strictEqual(mockGot.mock.calls[0].arguments[0], url);

  mock.reset();
});
