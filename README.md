# Kubernetes Typescript Express App Example

Dead simple Kubernetes Example using Typescript and Express.

1. Build Docker image `docker build . -t k8-test:1.0.0`
2. Apply kubernetes config `kubectl apply -f k8s.yaml`
3. Expose kubernetes deployment `kubectl expose deployment k8-test --type="LoadBalancer"`
4. Test Connection `curl localhost:3000`
5. (optional) Scale deployment `kubectl scale --replicas=5 deployment/k8-test`