<script lang="ts">
  import Socials from '$lib/components/Socials.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import * as Card from '$lib/components/ui/card'
  import { ArrowRight, Backpack, GithubLogo } from 'svelte-radix'
  import Typewriter from 'svelte-typewriter'

  let showFortune = false
</script>

<svelte:head>
  <title>Home | Youwen Wu</title>
  <meta name="description" content="My personal website and blog." />
  <meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="max-w-3xl mx-auto py-14 sm:mt-18 px-4">
  <Typewriter interval={75}>
    <h1 class="text-4xl tracking-tight sm:text-6xl font-bold">👋 Hi. I'm Youwen.</h1>
  </Typewriter>
  <div class="mt-10">
    <Card.Root class="p-4 h-fit">
      <span class="inline-flex gap-6 align-center font-mono">
        <p class="text-2xl md:text-3xl">sh-5.2$</p>
        <Typewriter cursor mode="cascade" interval={300} keepCursorOnFinish>
          <h2 class="text-2xl md:text-3xl">uname -a</h2>
        </Typewriter>
      </span></Card.Root
    >
    <br />
    <p class="sm:text-2xl text-xl leading-relaxed mt-2">
      I'm a first-year student at the <a class="link" target="_blank" href="https://ucsb.edu"
        >University of California, Santa Barbara</a
      >. Before that, I built robots with
      <a class="link" href="https://github.com/Team-1280">Team 1280</a>. In my spare time, I hack on
      <a
        href="https://raw.githubusercontent.com/youwen5/youwen5/main/profile-3d-contrib/profile-night-view.svg"
        class="link">free software and open source</a
      >.
    </p>
  </div>
  <div class="flex flex-wrap gap-4 my-8">
    <Button href="/about" size="lg" class="text-xl flex-grow sm:flex-grow-0">About</Button>
    <Button href="/portfolio" variant="outline" size="lg" class="text-xl flex-grow sm:flex-grow-0"
      >Portfolio</Button
    >
    <Button
      href="https://github.com/youwen5"
      target="_blank"
      variant="outline"
      size="lg"
      class="px-2"><GithubLogo /></Button
    >
  </div>
  <Card.Root class="p-4">
    <span class="inline-flex gap-4 align-center font-mono">
      <p class="text-lg sm:text-xl overflow-x-auto">sh-5.2$</p>
      <p class="text-lg sm:text-xl overflow-x-auto">ls -l /home/youwen</p>
    </span></Card.Root
  >
  <h2 class="text-2xl font-medium mt-8 mb-4">Links of possible interest:</h2>
  <ul class="my-2 text-lg list-disc list-inside space-y-2">
    <li>
      <a class="link" href="https://code.youwen.dev">code.youwen.dev</a>: my personal Git forge
      instance
    </li>
    <li>
      <a class="link" href="https://solipsism.social">my Misskey (fediverse) server</a>, where I'm
      <a class="link" href="https://solipsism.social/@youwen">@youwen@solipsism.social</a>
    </li>
    <li>
      <a class="link" href="https://blog.youwen.dev">blog.youwen.dev</a>, my static blog powered by
      <a class="link" href="https://www.haskell.org/">Haskell</a>.
    </li>
    <li>
      <a class="link" href="https://github.com/youwen5/liminalOS">liminalOS</a>, my custom advanced
      Linux® distribution.
    </li>
    <li>
      <a class="link" href="https://garden.youwen.dev/">alexandria</a>, a public-facing
      <a class="link" href="https://en.wikipedia.org/wiki/Zettelkasten">Zettelkasten</a>
      I've been maintaining.
    </li>
  </ul>
  <div class="grid grid-cols-2 gap-4 mt-8">
    <Card.Root class="col-span-2">
      <Card.Header>
        <Card.Title>Contact me</Card.Title>
      </Card.Header>
      <Card.Content>
        I'm reachable at any of the platforms below, but a good place to start if I don't know you
        is via email, which I always respond to.
        <Socials />
        <p class="mt-2">
          Fellow Linux geeks can download my PGP key from
          <a
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/8F5E6C1AF90976CA7102917A865658ED1FE61EC3"
            class="link">OpenPGP</a
          >,
          <a href="https://pgp.mit.edu/pks/lookup?op=vindex&search=0x865658ED1FE61EC3" class="link"
            >MIT</a
          >,
          <a href="https://github.com/youwen5.gpg" class="link">GitHub</a>, or my personal
          <a href="https://code.youwen.dev/youwen5.gpg" class="link">Git forge</a>.
        </p>
      </Card.Content>
    </Card.Root>
    <Card.Root class="col-span-2 sm:col-span-1">
      <Card.Header>
        <Card.Title>Fun</Card.Title>
      </Card.Header>
      <Card.Content>
        View your fortune below:
        <div class="inline-flex gap-2 w-full mt-4">
          <Card.Root class="py-2 px-4 w-fit">
            <span class="inline-flex gap-3 align-center font-mono">
              <p class="text-md overflow-x-auto">sh-5.2$</p>
              <p class="text-md overflow-x-auto">fortune</p>
            </span></Card.Root
          >
          <Button variant="secondary" size="lg" on:click={() => (showFortune = true)}>Enter</Button>
        </div>
        {#if showFortune}
          <Card.Root class="font-mono w-full mt-2">
            <Card.Header>Your fortune:</Card.Header>
            <Card.Content>
              <Typewriter
                >In civilizations without monads, dreams dry up, mutation takes the place of purity
                and the Rustaceans take the place of Hasklars. - Simon Haskal</Typewriter
              >
            </Card.Content>
          </Card.Root>
        {/if}
      </Card.Content>
    </Card.Root>
    <Card.Root class="col-span-2 sm:col-span-1">
      <Card.Header>
        <Card.Title>Miscellany</Card.Title>
      </Card.Header>
      <Card.Content>
        <ul class="list-disc list-inside">
          <li>
            Use NixOS and want to try Zen Browser? I've been maintaing this <a
              class="link"
              href="https://github.com/youwen5/zen-browser-flake">flake</a
            >.
          </li>
        </ul>
      </Card.Content>
      <Card.Footer>
        <span class="flex gap-2">
          <Button variant="outline" href="https://missioncontrol.youwen.dev/goto/Cg25ehqSR?orgId=1"
            >Homelab resource metrics<ArrowRight class="ml-2" /></Button
          >
        </span>
      </Card.Footer>
    </Card.Root>
  </div>
</main>
