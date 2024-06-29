<script>
  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import { Code, Image, Link2 } from 'svelte-radix'
  import Badge from '$lib/components/ui/badge/badge.svelte'
  import * as Tooltip from '$lib/components/ui/tooltip'
</script>

<svelte:head>
  <title>Portfolio | Youwen Wu</title>
  <meta name="description" content="My personal website and blog." />
  <meta name="author" content="Youwen Wu" />
</svelte:head>

<div class="md:dots-background py-12">
  <main class="px-4 mx-auto max-w-5xl bg-background rounded-lg py-4">
    <h1 class="font-serif text-5xl font-medium tracking-tight">
      Portfolio
      <hr class="w-32 mt-0.5 h-1 bg-muted-foreground rounded-lg" />
    </h1>
    <p class="text-xl mt-4">
      Here's some of the stuff I've worked on which I think is notable or interesting enough to
      write about.
    </p>
    <p class="leading-loose text-lg mt-4">
      Quick links: <a class="link mx-1" href="#projects">Projects.</a>
      <a class="link mx-1" href="#research">Research.</a>
      <a class="link mx-1" href="#certifications">Certifications.</a>
    </p>
    <h2 id="projects" class="text-4xl font-serif font-medium mt-8">Projects</h2>
    <hr class="w-32 mt-1 h-1 bg-muted-foreground rounded-lg" />
    <p class="mt-4 text-lg leading-relaxed">
      Below are some selected projects I am particularly proud of. You can also view <a
        href="/projects"
        class="link">all of my projects</a
      > here.
    </p>
    <Card.Root class="p-0 md:p-6 mt-8">
      <Card.Header>
        <span class="inline-flex items-center gap-2">
          <Card.Title class="text-4xl font-serif tracking-normal font-medium" id="jankboard"
            >Jankboard</Card.Title
          >
          <Tooltip.Root openDelay={300}>
            <Tooltip.Trigger asChild let:builder>
              <Button
                on:click={() =>
                  navigator.clipboard.writeText(
                    window.location.origin + window.location.pathname + '#jankboard'
                  )}
                builders={[builder]}
                size="icon"
                variant="ghost"><Link2 /></Button
              >
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Copy link</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </span>
        <div class="w-24 h-1 bg-blue-800 dark:bg-blue-400 rounded-lg" />
        <div class="flex flex-wrap gap-2 py-2">
          <Badge>Robotics</Badge>
          <Badge variant="secondary">License: GPLv3</Badge>
          <Badge variant="outline">Web Technology</Badge>
          <Badge variant="outline">Rust</Badge>
        </div>
      </Card.Header>
      <Card.Content class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="col-span-2 flex flex-col justify-between">
          <div class="space-y-4 text-lg">
            <p>
              Jankboard is a fully custom control dashboard for Team 1280's robot competing in the
              2024 season of the FIRST Robotics Competition.
            </p>
            <p>
              It displays the robot's telemetry through a network connection established via the
              NetworkTables protocol, including speed, orientation, acceleration, heading, and other
              vital metrics. It also features a full 3D robot visualization and looks like a Tesla
              UI. It was used in production for the first time at the <a
                class="link"
                href="https://cafirst.org/frc/centralvalley/">Central Valley Regional</a
              >, where we made it to the playoffs as 2nd pick.
            </p>
            <p>
              It's built with <a class="link" href="https://tauri.app/">Tauri</a>,
              <a class="link" href="https://svelte.dev/">Svelte</a>, and
              <a class="link" href="https://www.rust-lang.org/">Rust</a>.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 mt-8">
            <Button
              class="inline-flex gap-2 md:basis-auto basis-full"
              href="https://github.com/youwen5/jankboard"><Image /> Gallery</Button
            >
            <Button
              class="inline-flex gap-2 md:basis-auto basis-full"
              href="https://github.com/youwen5/jankboard"
              variant="outline"><Code /> Source</Button
            >
          </div>
        </div>
        <div class="flex justify-center md:justify-end col-span-1">
          <img
            src="/assets/portfolio/images/team-1280-logo.png"
            alt="team 1280 logo"
            class="border-2 border-muted rounded-lg p-2 w-full h-fit"
          />
        </div>
      </Card.Content>
    </Card.Root>
    <h2 class="text-4xl font-serif font-medium mt-8" id="research">Research</h2>
    <hr class="w-32 mt-1 h-1 bg-muted-foreground rounded-lg" />
    <p class="text-lg mt-8">Nothing here for now...</p>
    <h2 class="text-4xl font-serif font-medium mt-8" id="certifications">Certifications</h2>
    <hr class="w-32 mt-1 h-1 bg-muted-foreground rounded-lg" />
    <ul class="my-4 text-lg leading-loose">
      <li class="p-2 rounded-lg border-2 border-accent">
        <a
          class="link"
          href="https://www.freecodecamp.org/certification/couscousdude/javascript-algorithms-and-data-structures"
          >Legacy JavaScript Data Structures and Algorithms</a
        >. Represents roughly 300 hours of work. Earned in 2022.
      </li>
    </ul>
  </main>
</div>
