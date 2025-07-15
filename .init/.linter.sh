#!/bin/bash
cd /home/kavia/workspace/code-generation/photographer-portfolio-showcase-e1e6aae6/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

