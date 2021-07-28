#!/usr/bin/env bash
set -e

CARMEL_ROOT="${HOME}/.carmel"
CACHE_ROOT="${CARMEL_ROOT}/${TYPE}/${NAME}"
__="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$(dirname $__)"
THIS="$( pwd )"
CMD="${1}"

function _unlink() {
    VERSION="${1}"

    if [ -z "${VERSION}" ]; then
      echo "version required"
      exit 1
    fi

    CACHED_VERSION="${CACHE_ROOT}/${VERSION}"

    if [ ! -d "${CACHED_VERSION}" ]; then
      echo "${NAME} version ${VERSION} is not cached"
      exit 1
    fi

    if [ ! -d "${CACHED_VERSION}/${NAME}.original" ]; then
      echo "${NAME} version ${VERSION} is not linked"
      exit 1
    fi

    rm -rf "${CACHED_VERSION}/${NAME}"
    mv "${CACHED_VERSION}/${NAME}.original" "${CACHED_VERSION}/${NAME}"

    echo "${NAME} version ${VERSION} is now unlinked"
}

function _link() {
    VERSION="${1}"

    if [ -z "${VERSION}" ]; then
      echo "${NAME} version required"
      exit 1
    fi

    CACHED_VERSION="${CACHE_ROOT}/${VERSION}"

    if [ ! -d "${CACHED_VERSION}" ]; then
      echo "${NAME} version ${VERSION} is not cached"
      exit 1
    fi

    if [ -d "${CACHED_VERSION}/${NAME}.original" ]; then
      echo "${NAME} version ${VERSION} is already linked"
      exit 1
    fi

    mv "${CACHED_VERSION}/${NAME}" "${CACHED_VERSION}/${NAME}.original"
    ln -s "${THIS}" "${CACHED_VERSION}/${NAME}"

    echo "${NAME} version ${VERSION} is now linked"
}

case "$CMD" in
  link)
    _link "${2}"
    ;;
  unlink)
    _unlink "${2}"
    ;;  
  *)
    echo "Wrong command (supported: link, unlink)"
    exit 1
    ;;
esac