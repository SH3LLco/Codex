---
tags:
  - http
  - networking
  - osi-7
comments: true
---

# HTTP Basics

## What is HTTP?

The HyperText Transfer Protocol (HTTP) is how most applications interact with the internet via HTTP requests. HTTP is a layer 7 application-level protocol. Hypertext means the text contains links to other resources/text that can be easily interpreted.

## HTTP Communication

In its simplest form, HTTP consists of a client and server where the client requests resources from the server, and then the server processes that request and provides resources to the client. The default port for HTTP communication is port 80. We access websites on the internet by entering a Fully Qualified Domain Name (FQDN) as Uniform Resource Locators [URLs](urls.md).

## Drawbacks

HTTP data is transferred in clear-text, which means that anyone between the source and destination can perform a Man-in-the-middle (MiTM) attack to view the data, or, if on the same network, capture the requests with a tool such as [wireshark](https://www.wireshark.org/).  [HTTPS](https-basics.md) was developed to address this insecurity. 

## Sources/References

- [https://datatracker.ietf.org/doc/html/rfc2616](https://datatracker.ietf.org/doc/html/rfc2616)