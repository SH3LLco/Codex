---
tags:
  - general-networking
  - ip-addresses
comments: true
---
# IP Addresses
## Definition

An **Internet Protocol (IP) address** is a unique numerical identifier assigned to every device participating in a computer network that uses the Internet Protocol for communication. It serves two primary functions:

- **Identification:** Uniquely identifies a device on the network
- **Location Addressing:** Provides the means to route packets of data to and from devices across interconnected networks

An IP address operates within the framework of the Internet Protocol, which is a set of rules governing the format of data sent via the internet or local networks.

---

## Structure and Types of IP Addresses

### IPv4 (Internet Protocol Version 4)

- IPv4 addresses are 32-bit numbers, represented in **dotted-decimal notation** (e.g., `192.168.1.1`)
- Composed of four octets (8-bit segments), each ranging from 0 to 255
- IPv4 supports approximately **4.3 billion unique addresses** (2³²), leading to address exhaustion

### IPv6 (Internet Protocol Version 6)

- IPv6 addresses are 128-bit numbers, represented in **colon-separated hexadecimal notation** (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`)
- Provides a vastly larger address space of **2¹²⁸ possible addresses**
- IPv6 includes built-in features such as:
    - Improved security (IPsec)
    - Auto-configuration
    - Better routing efficiency

---

## How IP Addresses Work

The operation of IP addresses occurs at the **Network Layer (Layer 3)** in the OSI model. Below is an in-depth explanation of their functionality.

### Address Assignment

- **Static IP:** Manually assigned by an administrator and remains constant
- **Dynamic IP:** Automatically assigned by a **Dynamic Host Configuration Protocol (DHCP)** server, used for flexibility in consumer networks
- **Private vs. Public IPs:**
    - **Private IPs:** Reserved for internal networks (e.g., `192.168.x.x`, `10.x.x.x`), not routable on the internet
    - **Public IPs:** Globally unique and routable on the internet, assigned by an **Internet Service Provider (ISP)**

### IP Address Components

- **Network Identifier (NetID):**
    - Specifies the network to which the device belongs
    - Determined by the **subnet mask** (e.g., `/24` in CIDR notation)
- **Host Identifier (HostID):**
    - Identifies a specific device within the network
    - The size of the HostID is inversely proportional to the NetID

### Routing and Communication

IP addresses enable data transfer by serving as endpoints in a **packet-switching network**. Key processes include:

- **Address Resolution:**
    - Devices translate domain names into IP addresses using the **Domain Name System (DNS)**
    - **ARP (Address Resolution Protocol)** maps IP addresses to MAC (Media Access Control) addresses within local networks
- **Packet Routing:**
    - Data is divided into packets, each containing a source and destination IP
    - Routers use **routing tables** to determine the optimal path for packets
    - Packets traverse multiple routers to reach the target destination
- **Encapsulation and Decapsulation:**
    - Data at the sender's end is encapsulated with headers (including IP address) and transmitted
    - At the receiver's end, headers are stripped to extract the data

---

## IP Classes and Subnetting

### Classful IP Addressing

Historically, IPv4 addresses were divided into classes (A, B, C, D, E) based on the range of the first octet.

### Subnetting

Subnet masks (e.g., `255.255.255.0`) divide IP addresses into smaller, manageable sub-networks, improving address utilization and network performance.

---

## IP Protocols and Mechanisms

### Connectionless and Best-Effort Delivery

- The Internet Protocol is **connectionless**, meaning it does not establish a dedicated path before transmitting data
- It uses a **best-effort delivery** model without guarantees for delivery, order, or error correction. These functions are handled by higher-layer protocols like **TCP**

### Fragmentation and Reassembly

- If a packet exceeds the Maximum Transmission Unit (MTU) of a network segment, it is fragmented into smaller packets
- The receiving device reassembles these fragments using identification and offset information in the IP header

---

## Challenges and Modern Solutions

### IPv4 Address Exhaustion

The growth of devices has depleted IPv4 addresses. Solutions include:

- **Network Address Translation (NAT):** Allows multiple devices to share a single public IP
- **IPv6 Adoption:** Offers a nearly limitless pool of addresses

### Security

IP addresses are vulnerable to spoofing, denial-of-service (DoS) attacks, and other exploits. Modern networks implement:

- **Firewalls**
- **IPsec**
- **VPNs**