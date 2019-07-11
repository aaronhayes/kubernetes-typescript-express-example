# Kubernetes Typescript Express App Example

Dead simple Kubernetes Example using Typescript and Express.

1. Build Docker image `docker build . -t k8-test:1.0.0`
2. Apply kubernetes config `kubectl apply -f k8s.yaml`
3. Setup [Nginx Ingress](https://kubernetes.github.io/ingress-nginx/deploy/#prerequisite-generic-deployment-command):
- `kubectl apply -f mandatory.yaml`
- `kubectl apply -f cloud-generic.yaml`
- `kubectl apply -f ingress.yaml`

4. Test Connection `curl -H "Host:k8-test.localhost" 127.0.0.1`
5. (optional) Scale deployment `kubectl scale --replicas=5 deployment/k8-test`

To cleanup and delete all your pods: `kubectl delete deployment k8-test`
To cleanup and delete your services: `kubectl delete service k8-test-service`