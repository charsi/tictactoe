#!/bin/bash

rm dist/*
npm run tsc -- --build
node dist/app.js