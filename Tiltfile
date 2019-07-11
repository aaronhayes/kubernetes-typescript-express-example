k8s_yaml('k8s.yaml')
docker_build('k8-test', '.', live_update=[
    fall_back_on(['package.json', 'package-lock.json']),
    sync('.', '/src'),
])

k8s_resource('k8-test', port_forwards=3000)