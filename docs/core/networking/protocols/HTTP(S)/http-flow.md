---
tags:
  - http
  - networking
  - flow
  - osi-7
comments: true
---

# HTTP Flow

``` mermaid
sequenceDiagram

    autonumber

    participant User

    participant Browser

    participant DNS_Server as DNS Server

    participant Web_Server as ACME Web Server: 152.153.81.14

  

    User->>Browser: Go to acme.org

    Browser->>DNS_Server: DNS Query: Where is acme.org?

    DNS_Server-->>Browser: DNS Response: 152.153.81.14

  

    Browser->>Web_Server: Request

    note over Browser,Web_Server: 152.153.81.14:80 GET / HTTP/1.1

    Web_Server-->>Browser: Response

    note over Web_Server,Browser: acme.org HTTP/1.1 200 OK index.html
``` 
!!! note "Notes on DNS"

	Browsers typically check local resources first for host records such as `/etc/hosts` on linux or <br> `c:\Windows\System32\Drivers\etc\hosts` on windows. <br> <br> Additionally, all domain names need to be resolved because servers typically can't communicate without an IP address. 

## Flow Breakdown

1. User enters URL (acme.org) into browser.
2. Browser sends request to DNS (Domain Name System) server to resolve the IP address. 
3. DNS server looks up the IP for acme.org and responds with the host's IP Address. 
4. Browser sends a `HTTP GET` request to the default HTTP port (80) on the host's IP address asking for the root `/` path. 
5. Web server receives the request, processes it, and returns the configured default index file provided when root `/` is requested. 
