#!/bin/bash

echo "Building the web application..."
docker compose -f "compose.yaml" run --rm web npm run build

echo "Deploying the worker to Cloudflare..."
docker compose -f "compose.deploy.yaml" run --rm --service-ports wrangler

echo "Deployment complete!"