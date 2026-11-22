## **Level 1 – BIOS: Automatically turn on your mini PC**

This is the first thing to configure.
Your mini PC's BIOS/UEFI usually has a setting called:
- Restore on AC Power Loss
- AC Power Recovery
- After Power Failure
- State After G3

Set it to:
Power On

This tells your mini PC to turn itself on when electricity returns.

## **Level 2 – Proxmox: Automatically start your VMs**

Next, configure Proxmox to start your four VMs automatically.

In Proxmox:
1. Select VM 100.
2. Go to Options.
3. Find Start at boot.
4. Set it to Yes.
5. Repeat for VMs 101, 102 and 103.

But there's another important setting: **Startup Order and Startup Delay.**

I recommend:

|VM|Startup order|Startup delay|
|---|---|---|
|100 – k8s-control|1|30 seconds|
|101 – worker-01|2|15 seconds|
|102 – worker-02|3|15 seconds|
|103 – devops-tools|4|10 seconds|

The delays help avoid starting everything simultaneously.

## **Level 3 – Kubernetes: Automatically recover workloads**

Here's the good news.

K3s runs as a Linux systemd service.

When Ubuntu starts, the K3s service starts automatically if installed through the standard installation method.

Check this on your control plane:

```
sudo systemctl status k3s
```

On your workers:

```
sudo systemctl status k3s-agent
```

Enable automatic startup if necessary:

```
# Control plane
sudo systemctl enable k3s

# Worker nodes
sudo systemctl enable k3s-agent
```

When the VMs boot:

1. Ubuntu starts.
    
2. K3s starts automatically.
    
3. Workers reconnect to the control plane.
    
4. Kubernetes reconciles the desired application state.
    
5. Your Java Pods are recreated if needed.
    

You don't need to manually reinstall Kubernetes or execute the K3s installation commands again.