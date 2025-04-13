<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import Socials from '$lib/components/Socials.svelte'
</script>

<svelte:head>
  <title>About | Youwen Wu</title>
</svelte:head>

<main>
  <div class="max-w-3xl mx-auto pb-14 pt-6 md:py-14 px-2 sm:px-8 justify-center">
    <Card.Root class="sm:px-6 px-0">
      <Card.Header class="inline-flex items-center">
        <Card.Title class="text-4xl">about.</Card.Title>
        <div class="w-full px-4 h-1.5 rounded-lg bg-muted-foreground" />
      </Card.Header>
      <Card.Content class="gap-8">
        <div class="space-y-4">
          <p class="text-2xl font-semibold">Hi. I'm Youwen.</p>
          <img
            src="https://preview.redd.it/kwp14kysyul41.png?auto=webp&s=25544fd77159edfd1b6276ea2c59a4d6b5c9cfe3"
            alt="undergrad category theorist"
          />
          <p class="text-xl leading-relaxed">(pictured above: me)</p>
          <p class="text-xl leading-relaxed">
            I'm deeply committed to the craft of software engineering. In fact I am constantly
            analyzing and predicting the latest trends of the industry so that I can do the exact
            opposite.
          </p>
          <h2 class="text-3xl font-semibold tracking-tight">
            computing.
            <div class="w-24 h-1.5 rounded-lg bg-muted-foreground mt-1" />
          </h2>
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
