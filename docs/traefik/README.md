# Traefik config

Traefik runs in a docker container defined in [docker-compose.yml](docker-compose.yml). The config is loaded from [traefik.toml](traefik/traefik.toml). There should be an empty directory called `acme` inside `traefik`. In here traefik will create a file called `certs.json` to store the ssl certificates.

The portainer agent is needed for portainer to acces the docker engine on the host.
