<script>
  import {
    InstagramLogo,
    TwitterLogo,
    GithubLogo,
    LinkedinLogo,
    DiscordLogo,
    EnvelopeClosed
  } from 'svelte-radix'
  import * as Popover from '$lib/components/ui/popover'

  export let center = false

  import Button from './ui/button/button.svelte'
</script>

<div class="flex gap-2 mt-2 flex-wrap" class:justify-center={center}>
  <Button
    class="hover:scale-110 transition-transform"
    variant="ghost"
    size="icon"
    href="https://github.com/couscousdude"
  >
    <GithubLogo />
  </Button>
  <Button
    class="hover:scale-110 transition-transform"
    variant="ghost"
    size="icon"
    href="https://www.instagram.com/uncle_uwon/"><InstagramLogo /></Button
  >
  <Button
    class="hover:scale-110 transition-transform"
    variant="ghost"
    size="icon"
    href="https://twitter.com/couscousdude"><TwitterLogo /></Button
  >
  <Button
    class="hover:scale-110 transition-transform"
    variant="ghost"
    size="icon"
    href="https://www.linkedin.com/in/youwen-wu-306221288/>"
  >
    <LinkedinLogo />
  </Button>
  <Button
    class="hover:scale-110 transition-transform"
    variant="ghost"
    size="icon"
    href="https://discord.com/users/307507140199710720"
  >
    <DiscordLogo />
  </Button>
  <Popover.Root>
    <Popover.Trigger asChild let:builder>
      <Button
        class="hover:scale-110 transition-transform"
        variant="ghost"
        size="icon"
        builders={[builder]}
      >
        <EnvelopeClosed />
      </Button>
    </Popover.Trigger>
    <Popover.Content>
      <p>
        You can reach my personal mail at <a class="link" href="mailto:youwenw@gmail.com"
          >youwenw@gmail.com</a
        >
        or my institutional address at
        <a class="link" href="mailto:youwen@ucsb.edu">youwen@ucsb.edu</a>. I sign all of my mail
        with my <a href="./youwen.gpg">PGP key</a>. It is also available on the
        <a href="https://keys.openpgp.org/">OpenPGP key servers</a>.
      </p>
      <br />
    </Popover.Content>
  </Popover.Root>
</div>
