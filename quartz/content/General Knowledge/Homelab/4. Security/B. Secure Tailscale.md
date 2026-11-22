
## Restrict access with Tailscale

```bash
tailscale ip -4      # shows the server's Tailscale IP, e.g. 100.x.y.z
```

**Test it:** install Tailscale on your laptop or phone, sign in with the same account, then open:

```
https://100.x.y.z:8006
```

Log in as `baish` with 2FA. If that works, Tailscale is done.

**In the Tailscale admin console** (login.tailscale.com):

- On the Proxmox machine, choose **Disable key expiry**, so the server doesn’t drop off Tailscale after 180 days.
- Optionally, turn on **MagicDNS** so you can use `https://proxmox-name:8006` instead of the IP.

**On your router:** make sure there is **no port forward** for 8006 (or 22) to the Proxmox server. If there is one, delete it.