# mapeo-default-config

This is the default config (categories, icons and questions) used by Mapeo for data collection. Users can override this with their own config with custom categories, icons and questions.

## Usage with Docker
In the configuration project's folder build the Docker image with `docker build -t mapeo-builder .` and run it with `docker run -itv $(pwd):/usr/src/app mapeo-builder bash`
