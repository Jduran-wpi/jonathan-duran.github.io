# Pulls in base image from chainguard container registry
FROM cgr.dev/chainguard/node:latest-dev AS base

WORKDIR /opt/docusaurus

# Copy everything from my directory into the work dir
COPY --chown=node ./jonathandurangallery .

# Run yarn to import packages declared in package.json file
# Run yarn audit to detect any dependency vulnerabilities from packages used
# chmod to change permissions of the /opt/docusaurus directory
RUN yarn && \
    yarn audit && \
    chmod -R 755 /opt/docusaurus/

ENTRYPOINT [ "yarn", "start", "--host", "0.0.0.0" ]