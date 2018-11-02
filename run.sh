#!/bin/bash

rm dist/app.js
npm run tsc -- --build
node dist/app.js