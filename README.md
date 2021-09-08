# README

## The issue

Checkout `Screenshot 2021-09-08 at 16.51.09@2x.png` in this repository.

In that screen you'll notice that the command logs incorrectly reports the intercepted request as modified even though it clearly wasn't as you can see the test spec in the `cypress/integration/bug_spec.js`.

I was able to trace down the issue to https://github.com/cypress-io/cypress/blob/e216ae2422706d4f46e6dfa68abe2d589c72cf96/packages/driver/src/cy/net-stubbing/events/before-request.ts#L289-L291.

For this specific case `req` and `reqClone` will be different, because `req.body` is a string whilst `reqClone.body` will be a parsed JSON body.

## How-to replicate the issue

First, install the dependencies:

```
npm install
```

Then first run the example server and then cypress separately:

```
node server
./node_modules/.bin/cypress open
```
