---
tags:
  - networking
  - find-ip
  - resource
  - reference
comments: true
---
# Find IP Address
This is not an exhaustive list, but a few methods to try.

## Finding a Private IP Address
### Linux

```bash
ifconfig
ip addr
hostname -I
nmtui
nmcli dev show {interface}
cat /proc/net/fib_trie
arp -n
```

### Windows

```powershell
ipconfig
Get-NetIPAddress
Get-NetIPConfiguration
arp -a
Get-NetRoute
```

---

## Finding a Public IP Address

This is not an exhaustive list, but a few methods to try.

### Websites

- [https://whatismyipaddress.com/](https://whatismyipaddress.com/)
- [https://www.ipchicken.com/](https://www.ipchicken.com/)

### Python

```python
python -c "import requests; print(requests.get('https://ifconfig.me').text.strip())"
python3 -c "import requests; print(requests.get('https://ifconfig.me').text.strip())"
```

### Linux

```bash
curl ifconfig.me
curl ipinfo.io/ip
curl icanhazip.com
curl checkip.amazonaws.com
curl ipinfo.io
curl -s ipinfo.io | jq '.ip'
curl -s https://api64.ipify.org?format=json | jq '.ip'
wget -qO- ifconfig.me
wget -qO- icanhazip.com
wget -qO- ipinfo.io/ip
dig +short myip.opendns.com @resolver1.opendns.com
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com
nslookup myip.opendns.com resolver1.opendns.com
host myip.opendns.com resolver1.opendns.com
```

#### AWS EC2 Instances

```bash
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

#### Google Cloud Instances

```bash
curl http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip -H "Metadata-Flavor: Google"
```

#### Azure Virtual Machines

```bash
curl -H Metadata:true "http://169.254.169.254/metadata/instance/network/interface/0/ipv4/ipAddress/0/publicIpAddress?api-version=2021-02-01" -s
```

---

### Windows

```powershell
curl ifconfig.me
curl ipinfo.io/ip
curl icanhazip.com
curl checkip.amazonaws.com
curl ipinfo.io | ConvertFrom-Json
(Invoke-WebRequest -Uri "http://ifconfig.me").Content
(Invoke-WebRequest -Uri "https://api64.ipify.org?format=json").Content | ConvertFrom-Json
nslookup myip.opendns.com resolver1.opendns.com
Test-Connection -ComputerName google.com
```

#### AWS EC2 Instances

```powershell
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

#### Google Cloud Instances

```powershell
curl http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip -H "Metadata-Flavor: Google"
```

#### Azure Virtual Machines

```powershell
Invoke-RestMethod -Uri "http://169.254.169.254/metadata/instance/network/interface/0/ipv4/ipAddress/0/publicIpAddress?api-version=2021-02-01" -Headers @{"Metadata"="true"}
```