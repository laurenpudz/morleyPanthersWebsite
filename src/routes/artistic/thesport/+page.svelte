<script lang="ts">
	import FeatureHeading from '../../../components/featureHeading.svelte';
	import { ChevronDown, ChevronRight } from 'lucide-svelte';

	let showFreeskateInfo = $state(false);
	let showDanceInfo = $state(false);
	let showFiguresInfo = $state(false);
	let showGroupInfo = $state(false);
</script>

<div class="py-5">
	<FeatureHeading title="ARTISTIC SKATING" />
	<p class="py-3">
		Artistic roller skating is the branch of the sport where the winner is the skater or team that
		shows the greatest skating skill. It's about being the best, not necessarily the fastest or
		strongest. On ice, it's called figure skating (but that name covers only part of the sport).
		Most events are for single or pairs of skaters, but there is a team aspect too.
	</p>
	<p class="py-3">
		You can compete on inline or roller skates. Some aspects are more difficult on inlines, a few
		are easier.
	</p>
	<p class="py-3">
		There are four basic "disciplines" to the sport. Click on each link below for more details on
		each:
	</p>
	<div class="flex flex-col gap-2 py-3">
		<div>
			<button
				class="font-heading text-2xl flex items-center gap-2"
				onclick={() => (showFreeskateInfo = !showFreeskateInfo)}
				>Free Skating
				{#if showFreeskateInfo}
					<ChevronDown />
				{:else}
					<ChevronRight />
				{/if}</button
			>
		</div>
		{#if showFreeskateInfo}
			<p class="p-3">
				Also known as freestyle, this is arguably the most exciting part of the sport. Skaters
				demonstrate their ability to perform spins, jumps and sophisticated footwork in a
				choreographed routine.
			</p>
			<p class="p-3">
				You can freeskate using "quad" roller skates or inline skates. Most skaters prefer "quad"
				skates, for the extra control they allow, but others prefer inline skates, partly because
				they are lighter. Special artistic inline skates are needed - "street" skates don't have the
				toe stop you need for many moves in freeskating. You will also see the skates have three
				wheels, which gives better manoeuvrability, and the centre wheel is lower for the same
				reason.
			</p>
			<p class="p-3">
				The difficulty of your routine is up to you - simple jumps and spins in lower grades make
				way for more difficult items, like sit and camel spins.
			</p>
		{/if}
		<div>
			<button
				class="font-heading text-2xl flex items-center gap-2"
				onclick={() => (showDanceInfo = !showDanceInfo)}
				>Dance {#if showDanceInfo}
					<ChevronDown />
				{:else}
					<ChevronRight />
				{/if}</button
			>
		</div>
		{#if showDanceInfo}
			<p class="p-3">
				Involving either a team of two skaters or a solo skater, dance involves the performance of a
				set or custom-designed dance to music. Unlike ballroom dance, skate dancing is normally
				performed with a single skater or team on the floor at a time, because skilled skaters will
				use an entire 50 x 25 metre floor, performing at high speed.
			</p>
			<p class="p-3">
				"Set" pattern dances are performed to specified steps, rhythm and tempo. At the other end of
				the scale, a "free dance" is designed with steps and music largely up to the skater and
				their coach. In between, there are "style dances" which involve a mix of set and free dance.
			</p>
			<p class="p-3">
				Dance skaters will tell you that their discipline might lack just a little of the flat-out
				excitement of freeskating, but is a lot more fun.
			</p>
			<p class="p-3">
				Dance skaters normally use "quad" roller skates, but this is a personal choice, the rules
				permitting both inline and quad skates.
			</p>
		{/if}
		<div>
			<button
				class="font-heading text-2xl flex items-center gap-2"
				onclick={() => {
					showFiguresInfo = !showFiguresInfo;
				}}
				>Figures {#if showFiguresInfo}
					<ChevronDown />
				{:else}
					<ChevronRight />
				{/if}</button
			>
			{#if showFiguresInfo}
				<p class="p-3">
					Figure skating requires the accurate following of a fixed pattern on the floor, commonly
					involving one- or two-foot turns from forwards to backwards or vice versa. Most skaters
					use figure skating to improve their general skating skills, and a lot also find the idea
					of performing a figure better than others to be the ultimate skating challenge.
				</p>
				<p class="p-3">
					Because of the high demands on skate control in figure skating, all figure skaters use
					"quad" roller skates. Most serious figure skaters have a separate pair of skates designed
					specifically for figure skating, but if you're only using figures to hone up your skating
					skills, you don't need to take this step.
				</p>
			{/if}
		</div>
		<div>
			<button
				class="font-heading text-2xl flex items-center gap-2"
				onclick={() => {
					showGroupInfo = !showGroupInfo;
				}}
				>Precision, Quartets and Showgroups {#if showGroupInfo}
					<ChevronDown />
				{:else}
					<ChevronRight />
				{/if}</button
			>
		</div>
		{#if showGroupInfo}
			<p class="p-3">
				This is the "team sport" side of skating, in which between 4 and 24 skaters perform a
				routine that includes elements of dance and freeskating.
			</p>
			<p class="p-3">
				Skaters have used precision or show as a way into the sport, because the idea of
				participating in a team is less daunting than that of performing alone. However, even
				experienced skaters tend to jump at the chance of joining a team, because they enjoy working
				together with skating friends for a common purpose.
			</p>
			<p class="p-3">
				Showgroups and quartets are more recent additions to the sport. Group sizes can range from
				four for quartets to up to 24 in a "large" group. They both involve performing combinations
				of moves, sometimes involving the whole team together, sometimes with individual members
				demonstrating their skills.
			</p>
		{/if}
	</div>
</div>
