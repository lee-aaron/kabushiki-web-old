#!bin/bash
ssh -i ./deploy_key $DEPLOYMENT@$IP << EOF
cd kabushiki-web
git pull
yarn
yarn build
EOF