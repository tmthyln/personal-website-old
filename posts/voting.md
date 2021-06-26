@def title = "Remote Voting for the Masses"
@def blogpost = true
@def tags = ["world"]
@def date = Date(2020, 10, 12)
@def rss = "Some unsubstantiated ideas about things that might be valuable in order to do remote voting."

@def sitemap_exclude = false

# Remote Voting for the Masses
Given how many people will be (and already have) voted in this election cycle by mail, it's interesting to think about what if we had a "perfect" voting system. Here's what I mean by that:

**From the perspective of the individual voter,**
* *individual verifiability*: any voter should be able to verify that their vote was counted and counted correctly
* *secrecy (receipt freeness)*: no voter should be able determine how a vote was cast (including their own)

**From the perspective of ballot counting,**
* *universal verifiability*: anyone can verify the tally of the recorded votes

**For the skeptical and cynical,**
* *eligibility verifiability*: anyone can verify that every vote that was counted was cast by an eligible voter
* *auditability (no black boxes)*: everything that is done can be verified that it was done according to a public description/release of the system

Additionally, we'd want the system to be relatively simple, otherwise it'll be annoying for voters to have to figure out and for ballot counters to count and verify.

At minimum, we'd need these conditions in an online voting system. A lot of these properties are what researchers in the area would like to achieve as well, but to my knowledge, there is yet to be a method that can achieve all of these aims simultaneously. 

## A Bitwise-Voting System
To see how these properties might or might not hold, let's take a look at the following (bad) voting system where voters vote for one of two options:
1. The vote is either 0 or 1.
2. The voter computes their "ballot" by generating a random 32-bit number, left-shifting by 1 bit, and then adding their vote. So everyone's vote looks something like `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0` or `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1`