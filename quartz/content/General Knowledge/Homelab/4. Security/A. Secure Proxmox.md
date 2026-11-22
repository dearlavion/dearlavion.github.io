

| Action                | What to do                                                                |
| --------------------- | ------------------------------------------------------------------------- |
| Change default access | Create a personal admin account; avoid using root for everyday management |
| Strong authentication | Use a long, unique password                                               |
| Enable 2FA            | Enable TOTP authentication for Proxmox                                    |
| Restrict access       | Access the web interface through Tailscale                                |
| Firewall              | Enable Proxmox firewall rules                                             |
| Updates               | Regularly update Proxmox and security patches                             |
| Backups               | Back up VM configurations and important data                              |

Proxmox web management normally uses port `8006`.

Your goal is to make sure port 8006 is not accessible from the public internet.

## Create admin account

A PAM user has to exist in Linux first.
as root):

bash

```bash
# check whether the Linux user exists
id baish

# if it says "no such user", create it and set the password
adduser baish        # Debian prompts you for the password
# or, if the user exists but has no password:
passwd baish
```

In Proxmox:

1. Go to **Datacenter**.
    
2. Select **Permissions → Users**.
    
3. Click **Add**.
    
4. Enter the following:
    

| Field     | Value                  |
| --------- | ---------------------- |
| User name | `admbaish`             |
| Realm     | PAM                    |
| Enabled   | Yes                    |
| Expire    | Never                  |
| Password  | Strong unique password |

Click Add.

**3.2 Give the account administrator permissions**

1. Go to **Datacenter → Permissions**.
    
2. Click **Add → User Permission**.
    
3. Enter:
    

| Field     | Value           |
| --------- | --------------- |
| Path      | `/`             |
| User      | `admbaish@pam`  |
| Role      | `Administrator` |
| Propagate | Yes             |

Click Add.

This gives the account administrative privileges throughout your Proxmox environment.

**3.3 Test the new account**

Open an incognito browser window.

Visit:

```
https://YOUR_PROXMOX_IP:8006
```

Log in with:

```
Username: baish
Realm: pam
Password: Your new password
```


## Enable two-factor authentication (2FA)

This protects you even if someone obtains your password.

**4.1 Enable TOTP**

1. Log in using baishn@pam`.
    
2. Go to **Datacenter → Permissions → Two Factor**.
    
3. Find the TOTP option or open your user settings.
    
4. Register a TOTP factor for your account.
    
5. Scan the QR code using your authenticator app.
    
6. Enter the generated code to verify.

#### Option 2: Remove 2FA as root (if you have no recovery keys)

Root’s Linux login doesn’t go through Proxmox 2FA, so you can use the server console or SSH:

bash

```bash
pveum user tfa delete baish@pam
```




## What should we do with root?

Here's the target configuration:

| Security setting                 | Recommendation          |
| -------------------------------- | ----------------------- |
| Root account                     | Keep enabled            |
| Root password                    | Strong, unique password |
| Proxmox GUI login                | Keep available          |
| Root SSH login                   | Disable                 |
| Root SSH password authentication | Disable                 |
| 2FA                              | Enable                  |
| Everyday administration          | Use `baish`             |
