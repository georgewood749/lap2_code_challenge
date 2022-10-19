docker compose down --volumes --remove-orphans
docker volume prune --force
docker compose -f docker-compose.yaml up
