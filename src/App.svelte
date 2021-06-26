<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import { shuffle } from './random';

	// const answers = [
	// 	'Yes',
	// 	'No',
	// 	'Certainly',
	// 	'Probably Not',
	// 	'Without A Doubt',
	// 	'Outlook Not Good',
	// 	'It Would Seem So',
	// 	'Don\'t Count On It',
	// ];

  const official = [
    'It is Certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
  ];
	let display = '';
	let shaking = false;

	const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

  //let sid = 0;
	async function shake() {
		display = '';
		shaking = true;
		const answer = shuffle(official)[0]; //official[sid];
    //sid = (sid + 1) % official.length;
		await wait(1000);
		display = answer;
		shaking = false;
	}
</script>
<style>
@keyframes shake-slow {
  2% {
    transform: translate(1px, 5px) rotate(-1.5deg); }
  4% {
    transform: translate(7px, 4px) rotate(-2.5deg); }
  6% {
    transform: translate(8px, -2px) rotate(-0.5deg); }
  8% {
    transform: translate(2px, 10px) rotate(0.5deg); }
  10% {
    transform: translate(3px, 0px) rotate(-1.5deg); }
  12% {
    transform: translate(-8px, 9px) rotate(-1.5deg); }
  14% {
    transform: translate(-9px, -6px) rotate(-0.5deg); }
  16% {
    transform: translate(8px, -2px) rotate(0.5deg); }
  18% {
    transform: translate(-1px, -5px) rotate(1.5deg); }
  20% {
    transform: translate(-2px, -5px) rotate(-2.5deg); }
  22% {
    transform: translate(-4px, -3px) rotate(-2.5deg); }
  24% {
    transform: translate(-7px, 5px) rotate(-0.5deg); }
  26% {
    transform: translate(-5px, 5px) rotate(1.5deg); }
  28% {
    transform: translate(-1px, 6px) rotate(3.5deg); }
  30% {
    transform: translate(-2px, 6px) rotate(-0.5deg); }
  32% {
    transform: translate(2px, 10px) rotate(-0.5deg); }
  34% {
    transform: translate(-9px, 1px) rotate(0.5deg); }
  36% {
    transform: translate(-7px, 5px) rotate(3.5deg); }
  38% {
    transform: translate(-7px, 9px) rotate(1.5deg); }
  40% {
    transform: translate(7px, -8px) rotate(-0.5deg); }
  42% {
    transform: translate(8px, 7px) rotate(-0.5deg); }
  44% {
    transform: translate(-3px, -2px) rotate(0.5deg); }
  46% {
    transform: translate(1px, 2px) rotate(-2.5deg); }
  48% {
    transform: translate(-6px, -2px) rotate(-2.5deg); }
  50% {
    transform: translate(-8px, -1px) rotate(-1.5deg); }
  52% {
    transform: translate(5px, 10px) rotate(-1.5deg); }
  54% {
    transform: translate(7px, -9px) rotate(3.5deg); }
  56% {
    transform: translate(-7px, -5px) rotate(0.5deg); }
  58% {
    transform: translate(3px, 3px) rotate(0.5deg); }
  60% {
    transform: translate(4px, -5px) rotate(3.5deg); }
  62% {
    transform: translate(9px, 9px) rotate(1.5deg); }
  64% {
    transform: translate(-5px, 10px) rotate(-0.5deg); }
  66% {
    transform: translate(-8px, -9px) rotate(-2.5deg); }
  68% {
    transform: translate(-4px, -8px) rotate(-2.5deg); }
  70% {
    transform: translate(6px, -8px) rotate(1.5deg); }
  72% {
    transform: translate(8px, -6px) rotate(-1.5deg); }
  74% {
    transform: translate(-6px, 7px) rotate(1.5deg); }
  76% {
    transform: translate(2px, 5px) rotate(-1.5deg); }
  78% {
    transform: translate(2px, 0px) rotate(-2.5deg); }
  80% {
    transform: translate(-7px, 3px) rotate(-2.5deg); }
  82% {
    transform: translate(-9px, -4px) rotate(0.5deg); }
  84% {
    transform: translate(4px, 9px) rotate(3.5deg); }
  86% {
    transform: translate(-7px, 6px) rotate(-0.5deg); }
  88% {
    transform: translate(3px, -3px) rotate(-1.5deg); }
  90% {
    transform: translate(1px, -3px) rotate(-0.5deg); }
  92% {
    transform: translate(4px, 3px) rotate(2.5deg); }
  94% {
    transform: translate(9px, 1px) rotate(3.5deg); }
  96% {
    transform: translate(-8px, 3px) rotate(0.5deg); }
  98% {
    transform: translate(-8px, -7px) rotate(-2.5deg); }
  0%, 100% {
    transform: translate(0, 0) rotate(0); } }

	.shake-slow {
		transform-origin: center center;
		animation-name: shake-slow;
		animation-duration: 1s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 1;
	}
  .highlight {
    background-image: radial-gradient(20% 8% at center 6%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 90%, rgba(0,0,0,0) 100%), radial-gradient(65% 25% at center 5%, rgba(149,149,149,1) 0%, rgba(0,0,0,1) 100%);
  }
  .rim {
    background-image: radial-gradient(65% 25% at center 95%, rgba(109,109,109,1) 0%, rgba(0,0,0,1) 100%);
  }
</style>
<Tailwindcss />
<ModeSwitcher />

<div on:click={shake} class="highlight cursor-pointer shadow-lg h-[75vmin] w-[75vmin] mx-auto text-center bg-black relative rounded-full flex items-center justify-center" class:shake-slow={shaking}>
	{#if display}
    <div class="rim p-[0.5vmin] rounded-full">
      <div class="rounded-full h-[50vmin] w-[50vmin] bg-black flex items-center justify-center">
        <div class="flex items-center justify-center h-[40vmin] w-[40vmin] before:absolute before:top-[26.5vmin] before:w-0 before:h-0 before:border-t-[34.5vmin] before:border-r-[20vmin] before:border-b-0 before:border-l-[20vmin] before:border-transparent before:border-t-blue-800">
          <div class="text-blue-300 z-10 w-[21vmin] text-[5vmin]">{display}</div>
        </div>
      </div>
    </div>
	{:else}
		<div class="bg-white h-[37vmin] w-[37vmin] rounded-full flex items-center justify-center">
			<div class="text-[22vmin] dark:text-black">8</div>
		</div>
	{/if}
</div>