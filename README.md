# auto-add-dns-domeneshop

# 1. Run from host

## Install
```sh
npm run setup
```

## Configure
```sh
vim config/index.js
```

## Run

For help
```sh
./cli -h
```

Run this to update DNS
```sh
./cli.js -i 178.62.210.166 -d testdomain
```
# 2. Run from docker
```sh
docker run -it --rm --entrypoint sh \       
  -e ROOT_DOMAIN=t-fk.no \
  -e USERNAME=username@email.com \
  -e PASSWORD=password \
  --name auto-add-dns-domeneshop \                    
  maccyber/auto-add-dns-domeneshop -c "/src/cli.js -h"
```
