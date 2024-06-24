<svelte:head>
  <title>My Computing Setup | Youwen Wu</title>
</svelte:head>

<main class="container">
  <h1>My Computing Setup</h1>
  <p>
    I'm generally very particular about how I use my computer and the software that runs on it. I
    don't always configure my tools in the most "user-friendly" way, but rather the most efficient
    way for me. In other words, I prefer function over form -- if something can be done faster in a
    terminal, I wouldn't use the GUI version. I also generally prefer free software, as in software
    which respects the <a href="https://www.gnu.org/philosophy/free-sw.en.html"
      >four essential freedoms.</a
    > However, I'm not a fanatic, and I run proprietary blobs in my firmware and drivers to get my hardware
    to function properly.
  </p>
  <h2>First, some brief hardware details</h2>
  <ul>
    <li>Intel Core i7-13700KF</li>
    <li>RTX 4080 (Founder's Edition)</li>
    <li>32GB DDR5 memory at 5200 mt/s</li>
  </ul>
  <p>
    The other hardware details of my computer are not particularly interesting. I do have an AIO
    water cooler.
  </p>
  <h2>Software</h2>
  <p>
    I run <a href="https://archlinux.org/">Arch Linux</a> with the
    <a href="https://hyprland.org/">Hyprland</a> desktop environment. My OS choice is mostly
    pragmatic, I don't feel strong allegiances to any particular distro. I simply use Arch as it
    lets me configure my system exactly how I want and has an up to date and large user package
    repository. I've also been interested in looking into <a href="https://nixos.org/">NixOS</a>,
    but I don't yet have 40 hours per week to configure my operating system, unfortunately. I use
    Hyprland because:
  </p>
  <ol>
    <li>
      Tiling window managers are infinitely superior and anyone who disagrees has never experienced
      productivity.
    </li>
    <li>
      Hyprland implements most modern Wayland features which is very important as I'm on Nvidia.
    </li>
  </ol>
  <p>I also keep a Windows installation around, mainly for gaming.</p>
  <h2>Code editing</h2>
  <p>
    One of the most used pieces of software on a developer's computer is their text editor, so I
    spent a lot of time settling on one. In the past, I used <a
      href="https://code.visualstudio.com/">Visual Studio Code</a
    >, but I've since switched to
    <a href="https://neovim.io/">Neovim.</a> VS Code is a fine editor and I recommend it to anyone
    new to programming, but it just doesn't make sense for me to run a full electron app when I
    don't need any of the fancy GUI features and I can work faster in Neovim. Modern code editing
    has mostly become editor-agnostic anyways with the advent of
    <a href="https://microsoft.github.io/language-server-protocol/">LSP</a>, so most of the
    important features are available in practically every editor anyways.
  </p>
  <p>As for my terminal, my main priorities (in order) are:</p>
  <ol>
    <li>Performance</li>
    <li>Font rendering quality and support (ligatures, etc)</li>
    <li>Additional quality of life features</li>
  </ol>
  <p>
    Since my editor (Neovim) runs purely in a terminal, performance is the most important since any
    perceptible latency or lag quickly becomes extremely annoying. Otherwise, it would probably
    shift down to the bottom of the list.
  </p>
  <p>
    I've tried <a href="https://sw.kovidgoyal.net/kitty/">kitty</a> and
    <a href="https://alacritty.org/">Alacritty</a> but ended up settling on kitty. Although Alacritty
    (allegedly) has better performance, kitty is practically the same in day-to-day use (and I heard
    it has better latency, too). I ended up choosing kitty mainly due to its more versatile configuration
    as well as support for font ligatures. It also has tabs and native multiplexing, which the maintainers
    of Alacritty refuse to support (which is fine, with tmux or zellij, but native is nice to have).
  </p>
</main>
