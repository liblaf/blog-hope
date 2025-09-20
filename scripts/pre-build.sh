#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

wget --output-document='src/.vuepress/public/avatar.jpg' 'https://assets.liblaf.me/avatar.jpg'

FOLDERS=(
  2022
  2023
  2024
  2025
  PhD
)
OBSIDIAN_VAULT_DIR="${OBSIDIAN_VAULT_DIR:-"$HOME/github/liblaf/obsidian"}"
rsync --archive --force --stats --human-readable --itemize-changes \
  "${FOLDERS[@]/#/"$OBSIDIAN_VAULT_DIR/"}" 'src/'
