
### Firewall

The goal is to allow 8006 and SSH only from Tailscale and your home LAN, and block everything else.

**Find your LAN subnet first**, e.g. `192.168.8.0/24`:

bash

```bash
ip -4 addr show vmbr0
```

Your LAN subnet is **`192.168.8.0/24`**. These are your exact rules.

### Step 1: Add the rules (firewall still off)

Go to **Datacenter → Firewall → Add** and create each rule below with Direction `in`, Action `ACCEPT`, **Enable ✔**. Leave Interface and Destination empty.

|#|Source|Protocol|Dest. port|Comment|
|---|---|---|---|---|
|1|`100.64.0.0/10`|tcp|`8006`|Web UI via Tailscale|
|2|`100.64.0.0/10`|tcp|`22`|SSH via Tailscale|
|3|`192.168.8.0/24`|tcp|`8006`|Web UI from LAN|
|4|`192.168.8.0/24`|tcp|`22`|SSH from LAN|
|5|`192.168.8.0/24`|icmp|_(empty)_|Ping from LAN (optional)|
|6|_(empty)_|udp|`41641`|Tailscale direct connections (optional)|

Rule 6 lets Tailscale connect directly instead of through a relay, which is faster. It’s safe, because Tailscale only accepts its own encrypted traffic on that port.

### Step 2: Turn it on

1. **Datacenter → Firewall → Options**: double-click **Firewall** and set it to **Yes**. Leave **Input Policy = DROP** and **Output Policy = ACCEPT**.
2. **pve (node) → Firewall → Options**: make sure **Firewall = Yes**.

### Step 3: Check it from the shell

You’re logged in as `baish`, so switch to root first:

bash

```bash
su -
pve-firewall status        # should say: enabled/running
pve-firewall compile | grep -E '8006|22'   # shows your rules are loaded
```

### Step 4: Test (keep your current tab open)

|Test|Expected|
|---|---|
|`https://192.168.8.50:8006` from a LAN device|✅ works|
|`https://<tailscale-ip>:8006` with Tailscale on|✅ works|
|SSH `baish@192.168.8.50`|✅ works|
|Phone on **mobile data, Tailscale OFF** → `https://<your public IP>:8006`|❌ times out|

To find your public IP, open `ifconfig.me` from a device at home.

If anything goes wrong and you lose access, from the server’s own keyboard and screen, logged in as root:

bash

```bash
pve-firewall stop
```

### Your VMs aren’t affected yet

These rules protect only the Proxmox host. VMs and containers keep working normally until you turn on their own firewall (VM → Firewall → Options). We can do that later, VM by VM, if you want.

Once the Step 4 tests are done, tell me the results and we’ll move on to updates

