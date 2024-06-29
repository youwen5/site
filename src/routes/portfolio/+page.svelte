<script>
  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import { Code, Image } from 'svelte-radix'
  import Badge from '$lib/components/ui/badge/badge.svelte'
</script>

<svelte:head>
  <title>Portfolio | Youwen Wu</title>
  <meta name="description" content="My personal website and blog." />
  <meta name="author" content="Youwen Wu" />
</svelte:head>

<div class="dots-background py-20">
  <main class="container mx-auto max-w-5xl bg-background rounded-lg py-4">
    <h1 class="font-serif text-5xl font-medium tracking-tight">
      Portfolio
      <hr class="w-32 mt-0.5 h-1 bg-muted-foreground rounded-lg" />
    </h1>
    <p class="text-xl mt-4">
      Here's some of the stuff I've worked on which I think is notable or interesting enough to
      write about.
    </p>
    <h2 class="text-4xl font-serif font-medium mt-8">Projects</h2>
    <hr class="w-32 mt-1 h-1 bg-muted-foreground rounded-lg" />
    <Card.Root class="p-0 md:p-6 mt-8">
      <Card.Header>
        <Card.Title class="text-4xl font-serif tracking-normal font-medium">Jankboard</Card.Title>
        <div class="w-24 h-1 bg-green-800 dark:bg-green-400 rounded-lg" />
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
    <h2 class="text-4xl font-serif font-medium mt-8">Research</h2>
    <hr class="w-32 mt-1 h-1 bg-muted-foreground rounded-lg" />
    <p class="text-lg mt-8">Nothing here for now...</p>
  </main>
</div>
