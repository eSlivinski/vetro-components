#!/bin/sh

this_directory=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$this_directory"

rm ../.git/hooks/post-checkout
rm ../.git/hooks/pre-push

cp ./hooks/post-checkout ../.git/hooks/post-checkout
cp ./hooks/pre-push ../.git/hooks/pre-push

chmod +x ../.git/hooks/post-checkout
chmod +x ../.git/hooks/pre-push

cd .. && sh .git/hooks/post-checkout
