Test package for node test runner

```bash
npm install
npm run test
```

It seems the issue is that `tsup` is compiling the source to CJS and Node's mocking no longer applies?
