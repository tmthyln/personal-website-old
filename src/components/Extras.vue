<template>
    <div id="extras">
        <b-card-group class="extras-columns" columns>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="CMSC132 BogoSelectionSort">
                <b-card-text>
                    A student in our CMSC132 suggested a version of selection sort inspired by the bogosort and challenged someone to find the runtime complexity. As a TA, I couldn't refuse.
                </b-card-text>
                <b-button href="/pdfs/bogoselectionsort.pdf" variant="primary">Analysis</b-button>
            </b-card>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="MultiSeg">
                <b-card-text>
                    MultiSeg is the name of a model for a research project that didn't pan out. Even though the project itself wasn't successful, it's still valuable to see how I learned from it. It also formed the basis for future projects in this research group.
                </b-card-text>
                <b-button href="#" variant="primary">Write-Up</b-button>
            </b-card>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="Chased by the Cops">
                <b-card-text>
                    High school cumulative semester project in differential equations. A car chase scene, Laplace transforms, Euler, and eigenvalues.
                </b-card-text>
                <b-button href="/pdfs/chased_by_the_cops.pdf" variant="primary">Write-Up</b-button>
            </b-card>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="A More Human Analysis of the FIRST Robotics Competition">
                <b-card-text>
                    A CMSC320 final project provided an impetus to do an analysis on "human effects" of the FIRST Robotics competition.
                </b-card-text>
                <b-button href="/frc" variant="primary">Analysis</b-button>
            </b-card>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="Quaternions and Kalman Filtering"
                    img-src="/umdloop_logo.png"
                    img-alt="UMD Loop Logo"
                    img-bottom>
                <b-card-text>
                    Notes for quaternions (including in the context of geometric algebra) and Kalman filtering for inertial measurement units.
                </b-card-text>
                <b-card-text>
                    Some work for UMD Loop.
                </b-card-text>
                <b-button href="" variant="primary">Notes</b-button>
            </b-card>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="More Than Working Code - Patterns for Successful Software"
                    sub-title="MD Robotics Alliance Education Day 2018 Seminar">
                <b-card-text>
                    A presentation on various code patterns useful for the FIRST Robotics competition. <em>Presented October 27, 2018.</em>
                </b-card-text>
                <b-button href="" variant="primary">Slides</b-button>
            </b-card>
            <b-card class="extra-item" bg-variant="dark" text-variant="white" title="Designing Top Down so It Doesn't Crash Down - Applying Systems Engineering to FRC Robotics"
                    sub-title="MD Robotics Alliance Education Day 2018 Seminar">
                <b-card-text>
                    A presentation and discussion on how systems engineering might be included into a high-school FRC team, based on my experiences as the Lead Systems Engineer for FRC Team 2537. <em>Presented October 27, 2018.</em>
                </b-card-text>
                <b-button href="" variant="primary">Slides</b-button>
                <b-button href="" variant="primary" style="margin-left: 1rem;">PID Demonstration</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        name: "Extras"
    }
</script>

<style scoped>
    .extras-columns {
        margin: 5rem 2rem 2rem;
    }
    .extra-item {
        padding: 1rem 1.5rem;
    }
</style>