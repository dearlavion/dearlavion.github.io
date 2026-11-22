**a) Choose where backups go.** Ideally use a separate disk, a NAS, or Proxmox Backup Server, not the same disk as the VMs.

- Go to **Datacenter → Storage**, select or add the storage, and make sure **Content** includes `VZDump backup file`.

**b) Schedule VM/CT backups:** **Datacenter → Backup → Add**:

|Field|Value|
|---|---|
|Storage|your backup storage|
|Schedule|e.g. `daily 02:00`|
|Selection mode|All|
|Mode|Snapshot|
|Compression|ZSTD|
|Retention|Keep daily `7`, weekly `4`, monthly `3`|

To test it, click **Run now** once and check that it finishes without errors.

**c) Back up the host configuration.** VM backups don’t include Proxmox’s own settings:

bash

```bash
tar czf /root/pve-host-backup-$(date +%F).tar.gz \
  /etc/pve /etc/network/interfaces /etc/hosts /etc/hostname \
  /etc/ssh/sshd_config /etc/apt/sources.list.d
```

Copy that file somewhere off the server. Do it again after big changes.

**d) Keep one copy off-site.** If everything sits in the same house, a fire, theft or ransomware can take it all at once. Some options: a second NAS elsewhere, or a cloud storage sync of the backup folder.

**e) Test a restore** once: restore a backup to a new VM ID and boot it. A backup isn’t proven until you’ve restored from it.

Once the firewall is on, tell me what the outside test (step 2) shows and I’ll help you confirm 8006 isn’t reachable from the internet.