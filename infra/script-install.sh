#!/bin/bash

set -x

export http_proxy="http://proxyservico.eparana.parana:8181"
export https_proxy="http://proxyservico.eparana.parana:8181"
export NPM_CONFIG_PREFIX="/home/desenv/mobile/nodejs/"
export PATH="/home/desenv/mobile/nodejs/bin:$PATH"


sudo rm -rf /home/desenv

sudo mkdir -p /home/desenv/mobile/

sudo chmod -R a+rwx /home/desenv/

#sudo echo "export http_proxy=\"http://proxyservico.eparana.parana:8181\"" >> /etc/profile
echo "export http_proxy=\"http://proxyservico.eparana.parana:8181\"" >> ~/.profile
echo "export http_proxy=\"http://proxyservico.eparana.parana:8181\"" >> /home/desenv/mobile/inicia-titanium.sh

#sudo echo "export https_proxy=\"http://proxyservico.eparana.parana:8181\"" >> /etc/profile
echo "export https_proxy=\"http://proxyservico.eparana.parana:8181\"" >> ~/.profile
echo "export https_proxy=\"http://proxyservico.eparana.parana:8181\"" >> /home/desenv/mobile/inicia-titanium.sh


#sudo echo "export NPM_CONFIG_PREFIX=\"/home/desenv/mobile/nodejs/\"" >> /etc/profile
echo "export NPM_CONFIG_PREFIX=\"/home/desenv/mobile/nodejs/\"" >> ~/.profile
echo "export NPM_CONFIG_PREFIX=\"/home/desenv/mobile/nodejs/\"" >> /home/desenv/mobile/inicia-titanium.sh

#sudo echo "export PATH=\"/home/desenv/mobile/nodejs/bin:$PATH\"" >> /etc/profile
echo "export PATH=\"/home/desenv/mobile/nodejs/bin:$PATH\"" >> ~/.profile
echo "export PATH=\"/home/desenv/mobile/nodejs/bin:$PATH\"" >> /home/desenv/mobile/inicia-titanium.sh

echo "export http_proxy=\"http://proxyservico.eparana.parana:8181\"" >> ~/.bashrc
echo "export https_proxy=\"http://proxyservico.eparana.parana:8181\"" >> ~/.bashrc
echo "export NPM_CONFIG_PREFIX=\"/home/desenv/mobile/nodejs/\"" >> ~/.bashrc
echo "export PATH=\"/home/desenv/mobile/nodejs/bin:$PATH\"" >> ~/.bashrc


mkdir -p  /home/desenv/mobile/nodejs/src

cd /home/desenv/mobile/nodejs/src

wget -c  http://nodejs.org/dist/v0.8.25/node-v0.8.25.tar.gz

tar xvfz node-v0.8.25.tar.gz

sudo apt-get install --yes g++ 

cd node-v0.8.25

./configure --prefix=/home/desenv/mobile/nodejs/

make 

make install 

npm config set http-proxy http://proxyservico.eparana.parana:8181
npm config set https-proxy http://proxyservico.eparana.parana:8181

npm install -g acs
npm install -g titanium
npm install -g titanium-code-processor
npm install -g alloy
titanium config  cli.httpProxyServer http://proxyservico.eparana.parana:8181

cd /home/desenv/mobile/

http_proxy=  wget -c -T0 http://10.15.254.143/titanium.linux.gtk.x86_64.zip 
http_proxy=  wget -c -T0 http://10.15.254.143/mobile-env.tar 

unzip titanium.linux.gtk.x86_64.zip
tar xvf mobile-env.tar 

