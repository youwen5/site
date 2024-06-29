<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import Socials from '$lib/components/Socials.svelte'
</script>

<svelte:head>
  <title>About | Youwen Wu</title>
</svelte:head>

<main class="dots-background">
  <div class="max-w-3xl mx-auto pb-14 md:py-14 px-0 sm:px-8 justify-center">
    <Card.Root class="sm:px-6 px-0">
      <Card.Header class="inline-flex items-center">
        <Card.Title class="text-4xl">about.</Card.Title>
        <div class="w-full px-4 h-1.5 rounded-lg bg-muted-foreground" />
      </Card.Header>
      <Card.Content class="gap-8">
        <div class="space-y-4">
          <p class="text-2xl font-semibold">
            Hi. I'm Youwen. I like to write - {'{code | essays | math}'}.
          </p>
          <p class="text-xl leading-relaxed">
            I put most worthwhile things I do on my <a
              href="https://github.com/youwen5"
              class="link">GitHub</a
            >. I write over at a blog called
            <a class="link" href="https://blog.youwen.dev">Gradient Ascent</a>. You can check out my
            <a class="link" href="/portfolio">portfolio</a>
            right here on this site. You can skip down to my
            <a class="link" href="#contact">contact info</a>, or keep reading.
          </p>
          <h2 class="text-3xl font-semibold tracking-tight">
            coding.
            <div class="w-24 h-1.5 rounded-lg bg-muted-foreground mt-1" />
          </h2>
          <p class="text-xl leading-relaxed">
            I learned how to code when I was in 3rd grade (around 8-9 years old). Regrettably, I am
            not a gifted genius and did not build a massive open source empire nor did I found a
            startup before the age of 12. My projects consisted principally of crummy games or
            terrible websites. I only really figured out the fundamentals in 2019 and started
            working on actual projects at the tail end of 2023 (as you can tell from my GitHub
            activity history). My biggest regret is spending the pandemic lockdown learning React
            and web development in 2020 instead of becoming a cool kernel hacker or something.
          </p>
          <img
            src="https://github.com/youwen5/youwen5/raw/main/profile-3d-contrib/profile-night-view.svg"
            alt="github activity graph"
            class="rounded-lg dark:block hidden"
          />
          <img
            src="https://github.com/youwen5/youwen5/raw/main/profile-3d-contrib/profile-green-animate.svg"
            alt="github activity graph"
            class="rounded-lg dark:hidden"
          />
          <h2 class="text-3xl font-semibold tracking-tight">
            hacking.
            <div class="w-24 h-1.5 rounded-lg bg-muted-foreground mt-1" />
          </h2>
          <p class="text-xl leading-relaxed">
            Most people I know in real life think that I am some kind of hacker - likely because
            they once saw me open up a text terminal and update my packages with <code>pacman</code
            >. I proclaim myself a hacker because I once learned how to create shoddy CRUD web
            applications with fad web technologies and believe that places me in the same group as
            Torvalds and the other hackers who build actual software.
          </p>
          <img
            class="w-[350px] rounded-lg"
            src="https://media.tenor.com/XUD0K8qLJYsAAAAe/how-linux-users-install-a-web-browser-linux.png"
            alt="linux users installing a web browser"
          />
          <p class="text-xl leading-relaxed">
            I subscribe to <a href="https://stallman.org/articles/on-hacking.html" class="link"
              >this definition</a
            >
            of hacking, though, by which I <em>am</em> deemed a hacker.
          </p>
          <h2 class="text-3xl font-semibold tracking-tight">
            math.
            <div class="w-24 h-1.5 rounded-lg bg-muted-foreground mt-1" />
          </h2>
          <p class="text-xl leading-relaxed">
            I learn about math I find interesting as a hobby. I also happen to be pursuing it an
            undergraduate degree in it, soon.
          </p>
          <p class="text-xl leading-relaxed">
            I tried doing math competitions in middle and early high school before I realized that
            it wasn't for me (that's my way of saying that I couldn't hope to compete with the
            prodigies). Still, I wholly recommend that anyone who likes math take a look at <a
              href="https://artofproblemsolving.com/"
              class="link">The Art of Problem Solving</a
            > before stepping into calculus and beyond, as mathematical intuition and insight is magnitudes
            more valuable than a shallow familiarity with formulas or integration methods.
          </p>
          <h2 class="text-3xl font-semibold tracking-tight">
            other stuff.
            <div class="w-24 h-1.5 rounded-lg bg-muted-foreground mt-1" />
          </h2>
          <p class="text-xl leading-relaxed">
            Let's see. I play guitar, although I haven't had much time lately. I play video games
            sometimes, <a href="https://steamcommunity.com/id/couscousdude/" class="link"
              >here's my Steam profile</a
            >.
          </p>
          <p class="text-xl leading-relaxed">
            If for whatever reason you're interested in the tools I use on my computer, I have a <a
              class="link"
              href="/about/computing">brief page about it</a
            >. I'm legally obligated to notify you that I run Arch Linux with a tiling window
            manager and Neovim.
          </p>
          <p class="text-xl leading-relaxed">
            This site contains a <a class="link" href="/colophon">colophon</a>, for those interested
            in its inner workings.
          </p>
          <h2 class="text-3xl font-semibold tracking-tight" id="contact">
            contact me.
            <div class="w-24 h-1.5 rounded-lg bg-muted-foreground mt-1" />
          </h2>
          <p class="text-xl leading-relaxed">Find me on:</p>
          <Socials />
          <p class="text-xl leading-relaxed mt-4">
            I read message requests everywhere but do not accept Discord friend requests if I don't
            know you. The best way to reach me and receive a response is probably by email.
          </p>
          <p class="text-xl leading-relaxed">
            If you notice any issues with or have any suggestions about this site or any of my
            projects, feel free to send me an email or message about it.
          </p>
        </div></Card.Content
      >
    </Card.Root>
  </div>
</main>
