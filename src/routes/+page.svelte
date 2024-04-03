<script lang="ts">
	import Gpg from '$lib/components/Gpg.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { ArrowRight, GithubLogo } from 'svelte-radix';
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>Youwen Wu | Home</title>
	<meta name="description" content="My personal website and blog." />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="dots-background">
	<div class="container max-w-5xl mx-auto py-10 px-4 sm:px-8">
		<Typewriter mode="scramble" scrambleDuration={750}>
			<h1 class="text-5xl sm:text-6xl font-bold text-center mt-14 sm:mt-20 font-display">
				👋 Hi, I'm Youwen,
			</h1>
		</Typewriter>
		<div class="text-2xl md:text-3xl font-medium mt-10 text-center">
			<Typewriter cursor mode="loop">
				<p>a student.</p>
				<p>a programmer.</p>
				<p>a math enthusiast.</p>
				<p>a musician.</p>
				<p>a hacker.</p>
			</Typewriter>
			<br />
			<Typewriter mode="scramble" scrambleDuration={1000}>
				I'm interested in systems programming, web design, data science, and statistics.
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
					<Card.Title>Blog</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						Check out my blog, <strong>The Coredump</strong>, where I occasionally write about
						computer science, math, and everything else on my mind.
					</p>
				</Card.Content>
				<Card.Footer>
					<Button variant="outline" href="/blog">Go<ArrowRight class="ml-2" /></Button>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="col-span-2 sm:col-span-1">
				<Card.Header>
					<Card.Title>Projects</Card.Title>
				</Card.Header>
				<Card.Content>
					I'm currently working on:
					<ul class="list-disc ml-4">
						<li>
							<a class="link" href="https://github.com/couscousdude/discard" target="_blank"
								>discard</a
							>, a lightweight self-generating flashcards app.
						</li>
						<li>
							<a class="link" href="https://github.com/couscousdude/aural" target="_blank">aural</a
							>, a no-frills Ollama client for interfacing with local LLMs using voice-to-text,
							without any internet.
						</li>
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
			<Card.Root class="col-span-2">
				<Card.Header>
					<Card.Title>Contact Me</Card.Title>
				</Card.Header>
				<Card.Content>
					<h3>Find me on:</h3>
					<Socials />
					<Gpg>
						<Button variant="outline" class="mt-4"><span class="mr-2">🔑</span> My GPG Key</Button>
					</Gpg>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</main>

<style lang="postcss">
</style>
