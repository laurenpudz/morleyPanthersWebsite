<script lang="ts">
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import { Star } from 'lucide-svelte';
</script>

<BasicPageWrapper title="Skate Classes">
	<p>
		The Learn to Skate Classes on Saturday and Sunday mornings are run by the Morley Rollerdrome,
		but the Morley Panthers Rollerskating Club - or, more particularly, the artistic coaches and
		skaters of the club - provide much of the teaching. We do this because we have a close
		cooperative relationship with the Rollerdrome. The rink supports the club in many ways, and we
		like to respond. We also find many of our competitive skaters from the ranks of those who pass
		through the classes. But we know that most do not become club members, and that's fine. It's a
		victory for all of us when a child (or an adult, for that matter) finds a recreation they enjoy,
		whether they go on to become an Australian champion or simply keep coming to Rollerdrome, and
		enjoying skating with their friends.
	</p>
	<p class="font-heading text-3xl pt-5">The Class Levels</p>
	<p>
		There are five levels in our classes, the first called "Entry Level", the rest numbered 1 to 4.
	</p>

	<div class="flex gap-5 flex-wrap pt-10">
		<!-- Entry level -->
		<div class="bg-neutral-dark p-7 max-w-lg">
			<p class="font-heading text-2xl">Entry Level</p>
			<p>
				This is where new skaters learn to balance and roll on their skates, and gain some
				confidence. <br />
				The items to be mastered at this level are:
			</p>
			<ul class="list-['★__'] ps-6 py-2">
				<li>How to get down to and up from the floor</li>
				<li>How to stand on skates - posture and balance</li>
				<li>Balancing on one leg</li>
				<li>Marching steps - begin moving</li>
				<li>
					Stopping - with the brake rubber, on the front of roller skates or the back of inlines
				</li>
				<li>Glides - basic, showing an ability to roll</li>
			</ul>
		</div>
		<!-- Star one -->
		<div class="bg-neutral-dark p-7 max-w-lg">
			<div class="flex gap-4 items-center">
				<p class="font-heading text-2xl">Level 1</p>
				<Star fill="black" strokeWidth="0" class="pb-1" />
			</div>
			<p>
				This is all about getting balance and control in your skating.
				<br />
				The items in level 1 are:
			</p>

			<ul class="list-['★__'] ps-6 py-2">
				<li>Glide and balancing on each</li>
				<li>Skate Forward</li>
				<li>Scissors</li>
				<li>T-start</li>
				<li>T-Stop</li>
				<li>Glides - "level 2" - show ability to roll with control</li>
				<li>Stoop/Crouch Skate</li>
			</ul>
			<p>
				Compared to the entry level, glides must show balance for a greater length of the floor.
				The hardest part of level 1 for most skaters is the T-stop, because it requires a measure of balance,
				roll and control. But once skaters gain these, they are almost always ready for level 2.
				A few more challenging items might be introduced for fun; "tick tocks" (which involve moving weight
				backward and forward on skates), backwards marching steps, and glides in the "spiral" position
				(with the free leg held out behind).
			</p>
		</div>
		<!-- Star two -->
		<div class="bg-neutral-dark p-7 max-w-lg">
			<div class="flex gap-0.5 items-center">
				<p class="font-heading text-2xl pe-4">Level 2</p>
				<Star fill="black" strokeWidth="0" class="pb-1" />
				<Star fill="black" strokeWidth="0" class="pb-1" />
			</div>
			<p>
				When skaters gain entry to level 2, we know they're on track to becoming great skaters. As a
				result, there's a lot in level 2 to challenge them:
			</p>

			<ul class="list-['★__'] ps-6 py-2">
				<li>T-start to Glide to T-Stop</li>
				<li>Backward Toe / Slide Stop</li>
				<li>Backwards Scissors</li>
				<li>Scissors as a step to balancing backwards</li>
				<li>
					Glides and spiral - the spiral position involves the free (non-skating) leg held out
					behind
				</li>
				<li>
					Scooter push on a circle, both anticlockwise (the "general") and clockwise (the "reverse")
					directions- preparatory to crossover steps
				</li>
			</ul>
			<p>
				Your instructor may challenge you with some "novelty" items, the spreadeagle position,
				two-foot jump and the "shoot the duck" position (which is basically the stoop position on
				one leg)
			</p>
		</div>
		<!-- Star three -->
		<div class="bg-neutral-dark p-7 max-w-lg">
			<div class="flex gap-0.5 items-center">
				<p class="font-heading text-2xl pe-4">Level 3</p>
				<Star fill="black" strokeWidth="0" class="pb-1" />
				<Star fill="black" strokeWidth="0" class="pb-1" />
				<Star fill="black" strokeWidth="0" class="pb-1" />
			</div>
			<p>
				We see anyone who enters this level as a good skater. If you're in level 3, you will become
				aware of this, because it's where the artistic coaches start talking to skaters about trying
				competitive artistic skating. Just remember you're really under no pressure; we don't want
				to "press gang" unwilling skaters to take on what they are not really into.
				<br />
				Level 3 items are:
			</p>

			<ul class="list-['★__'] ps-6 py-2">
				<li>Crossover forwards - in both general and reverse directions</li>
				<li>
					Balancing forwards on outside (i.e., weight slightly outside the skate) and inside (weight
					slightly inside the skate) edges
				</li>
				<li>T-start to a long roll</li>
				<li>Spreadeagle</li>
				<li>Forward to backward transitions</li>
				<li>Backward Arabesque / Spiral - on both legs</li>
			</ul>
			<p>
				The ones that are normally hardest for skaters are the "spreadeagle" position and "backward
				Arabesque / Spiral", so these are often the items that form the gateway into level 4.
			</p>
		</div>
		<!-- Star four -->
			<div class="bg-neutral-dark p-7 max-w-lg">
				<div class="flex gap-0.5 items-center">
					<p class="font-heading text-2xl pe-4">Level 4</p>
					<Star fill="black" strokeWidth="0" class="pb-1" />
					<Star fill="black" strokeWidth="0" class="pb-1" />
					<Star fill="black" strokeWidth="0" class="pb-1" />
					<Star fill="black" strokeWidth="0" class="pb-1" />
				</div>
				<p>
					Skaters who pass level 4 tend to stand out pretty clearly in the Rollerdrome's sessions;
					they're the ones who seem to be floating effortlessly around the rink, turning to and from
					backward skating without a pause, and throwing in the odd eye-catching trick just for
					effect. Just to make sure, we hit you with some pretty high-level stuff:
				</p>

				<ul class="list-['★__'] ps-6 py-2">
					<li>Backward Cross Pulls</li>
					<li>Balancing backwards on outside and inside edges</li>
					<li>Mohawk Turns</li>
					<li>Two-foot jump - with or without a half turn</li>
					<li>Two Foot Pump Spin</li>
					<li>Forward glides - held for a few seconds, on clear outside edges</li>
				</ul>
				<p>
					As "challenge" items, your instructor may introduce you to Mohawk turns backward to
					forward, one foot turns (no doubt you'll need to balance on the wall to this this one),
					and slaloms.
				</p>
			</div>
		</div>
	<p class="font-heading text-3xl pt-10">Moving up the levels</p>
	<p>
		We occasionally are asked "When will my child be tested, to see if they can go up a level?". We
		used to answer "every six weeks (more or less)". The answer now is "all the time". All
		instructors keep a close eye on their charges, and in addition we have an instructor dedicated
		to this task, who roams the full length of the class, checking every skater. He also keeps a
		written record of skaters, once they start to come regularly.
		<br />
		The aim is to be sure that nobody remains in any level a week longer than necessary. (For example,
		some skaters take months to get out of level 1, others have moved up in a single week). And when anyone
		is tested, the question in the instructor's mind is not "Can this skater do all the stuff on my list?",
		but rather "is the standard of this person's skating enough to allow them to progress in the next
		level?".
	</p>
</BasicPageWrapper>
