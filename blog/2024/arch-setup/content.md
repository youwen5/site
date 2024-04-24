## Introduction

Recently, I made the switch from Windows 11 to Arch Linux. I can confirm that Arch does live up to
its meme reputation as an OS that takes hours of configuration to get working.

I'm making a (non-exhaustive) list of the most important tweaks and setup I had to go through to get
everything running smoothly on my system. This is partially intended for anyone who's running into
the same issues, and partially for my own reference in case I have to go through this again.

I'm running KDE Plasma 6 with the Layan rices from XeroLinux. I make heavy use of the XeroLinux
utility script to get everything set up with sane defaults easily.

Here's the general gist of the main setup steps:

1. Follow the Arch Wiki's installation guide, until you set up GRUB and boot into the tty. Create a
   user for yourself, and add yourself to the `sudoers` list with `visudo`.
2. Install `paru` and install `plasma`. Then, run the XeroLinux script. Install all of the
   recommended tweaks and KDE Plasma rices/addons, EXCEPT the GPU drivers (we'll do those later).
3. Install `sddm` and enable its service with `systemctl`. Then, `sudo reboot`. You should restart
   into KDE Plasma.
4. At the bottom left, make sure you're using X11 and not Wayland. Wayland is completely broken at
   the time of writing on Nvidia without some configuration. Log in.
5. Once loaded in, go to the XeroLinux GPU drivers installation guide. Run these commands
<!-- TODO: add gpu driver guide -->
6. If you were successful in setting up the GPU drivers, you should now be able to enter Plasma with
   Wayland. For me, performance is much better and smoother, and I'm able to set up the display
   configurations that I want without weird `xrander` hacks. However, at this point, Wayland is
   still super problematic, and even more setup will need to be done.
7. Set the environment variable to tell all electron apps to use native Wayland instead of xwayland.
   This will stop weird behavior in discord, vscode, obsidian. etc.
8. Enable the experimental Nvidia kernel flag to preserve the entire video memory on suspend. This
   will allow you to use suspend properly and not break everything.
