# auto-add-dns-domeneshop
Since domeneshop doesn't have an API, I created a small script to add subdomains with cli.

# Features
* Add DNS A-records with default TTL
* It's fugly - (but works for me)

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
For help
```sh
docker run -it --rm --entrypoint sh \       
  -e ROOT_DOMAIN=t-fk.no \
  -e USERNAME=username@email.com \
  -e PASSWORD=password \
  -e ID=100000 \
  --name auto-add-dns-domeneshop \                    
  maccyber/auto-add-dns-domeneshop -c "/src/cli.js -h"
```

For update DNS
```sh
docker run -it --rm --entrypoint sh \       
  -e ROOT_DOMAIN=t-fk.no \
  -e USERNAME=username@email.com \
  -e PASSWORD=password \
  -e ID=100000 \
  --name auto-add-dns-domeneshop \                    
  maccyber/auto-add-dns-domeneshop -c "/src/cli.js -i 178.62.210.166 -d testdomain"
```
