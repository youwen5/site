<script lang="ts">
  import Socials from '$lib/components/Socials.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import * as Card from '$lib/components/ui/card'
  import { ArrowRight, GithubLogo } from 'svelte-radix'
  import Typewriter from 'svelte-typewriter'
</script>

<svelte:head>
  <title>Home | Youwen Wu</title>
  <meta name="description" content="My personal website and blog." />
  <meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="dots-background">
  <div class="container max-w-5xl mx-auto py-14 px-4 sm:px-8 justify-center">
    <Typewriter mode="scramble" scrambleDuration={750}>
      <h1
        class="text-5xl tracking-tight sm:text-6xl font-bold text-center mt-14 sm:mt-20 font-serif"
      >
        👋 Hi, I'm Youwen,
      </h1>
    </Typewriter>
    <div class="text-2xl md:text-3xl font-medium mt-10 text-center">
      <Typewriter cursor mode="loop">
        <h2>a student.</h2>
        <h2>a programmer.</h2>
        <h2>a math enthusiast.</h2>
        <h2>a musician.</h2>
        <h2>a hacker.</h2>
      </Typewriter>
      <br />
      <Typewriter>
        <p>Building efficient <b>free and open source</b> software.</p>
      </Typewriter>
    </div>
    <div class="flex flex-wrap gap-4 justify-center my-8">
      <Button href="/about" size="lg" class="text-xl flex-grow sm:flex-grow-0">More About Me</Button
      >
      <Button
        href="https://github.com/couscousdude"
        target="_blank"
        variant="outline"
        size="lg"
        class="text-xl flex-grow sm:flex-grow-0"><GithubLogo class="mr-2" />My GitHub</Button
      >
    </div>
    <div class="grid grid-cols-2 gap-4">
      <Card.Root class="col-span-2 sm:col-span-1">
        <Card.Header>
          <Card.Title>What I'm up to</Card.Title>
        </Card.Header>
        <Card.Content>
          <ul class="list-disc ml-4">
            <li>
              I'm currently reading through <a
                class="link"
                href="https://www.math.brown.edu/streil/papers/LADW/LADW.html"
                >Linear Algebra Done Wrong</a
              >, by Sergei Treil. I'm syncing my notes and problem set solutions to a
              <a class="link" href="https://github.com/youwen5/linear-algebra-done-wrong"
                >public git repository here.</a
              >
            </li>
            <li>
              I'm working on a dotfile manager for people who want a dotfile manager, but don't want
              to manage dotfiles for their dotfile manager (in other words, with minimal
              configuration).
            </li>
            <li>I'm still trying to understand Haskell.</li>
          </ul>
        </Card.Content>
        <Card.Footer>
          <span class="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              href="https://github.com/couscousdude?tab=repositories"><GithubLogo /></Button
            >
            <Button variant="outline" href="/portfolio"
              >My Portfolio<ArrowRight class="ml-2" /></Button
            >
          </span>
        </Card.Footer>
      </Card.Root>
      <Card.Root class="col-span-2 sm:col-span-1">
        <Card.Header>
          <Card.Title>Blog</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>
            Check out my blog where I write about code, math, games, and other hacks I do. It's <a
              href="https://github.com/couscousdude/blog">built with Haskell.</a
            >
          </p>
        </Card.Content>
        <Card.Footer>
          <Button variant="outline" href="https://blog.youwen.dev"
            >Go to my blog<ArrowRight class="ml-2" /></Button
          >
        </Card.Footer>
      </Card.Root>
      <Card.Root class="col-span-2">
        <Card.Header>
          <Card.Title>Contact Me</Card.Title>
        </Card.Header>
        <Card.Content>
          <h3>Find me on:</h3>
          <Socials />
          <p class="mt-4">
            I read message requests everywhere but do not accept Discord friend requests if I don't
            know you. The best way to reach me and receive a response is probably by email.
          </p>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</main>
