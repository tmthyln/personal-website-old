<template>
  <div id="extras" class="navigable-page">
    <NavigationMenu />
    <b-card-group class="extras-columns" columns>
      <extra-item
          title="CMSC132 BogoSelectionSort"
          desc="A student in our CMSC132 suggested a version of selection sort inspired by the bogosort and challenged someone to find the runtime complexity. As a TA, I couldn't refuse."
      >
        <b-button href="/pdfs/bogoselectionsort.pdf" variant="primary">Analysis</b-button>
      </extra-item>
      <extra-item
          title="MultiSeg"
          desc="MultiSeg is the name of a model for a research project that didn't pan out. Even though the project itself wasn't successful, it's still valuable to see how I learned from it. It also formed the basis for future projects in this research group."
      >
        <b-button href="#" variant="primary">Write-Up</b-button>
      </extra-item>
      <extra-item
          title="Chased by the Cops"
          desc="High school cumulative semester project in differential equations. A car chase scene, Laplace transforms, Euler, and eigenvalues."
      >
        <b-button href="/pdfs/chased_by_the_cops.pdf" variant="primary">Write-Up</b-button>
      </extra-item>
      <extra-item
          title="A More Human Analysis of the FIRST Robotics Competition"
          desc="A CMSC320 final project provided an impetus to do an analysis on &quot;human effects&quot; of the FIRST Robotics competition."
      >
        <b-button href="/frc" variant="primary">Analysis</b-button>
      </extra-item>
      <extra-item
          title="Quaternions and Kalman Filtering"
          desc="Notes for quaternions (including in the context of geometric algebra) and Kalman filtering for inertial measurement units."
          imgsrc="/umdloop_logo.png"
          imgalt="UMD Loop Logo"
      >
        <b-button href="" variant="primary">Notes</b-button>
      </extra-item>
      <extra-item
          title="More Than Working Code - Patterns for Successful Software"
          subtitle="MD Robotics Alliance Education Day 2018 Seminar"
          desc="A presentation on various code patterns useful for the FIRST Robotics competition. <em>Presented October 27, 2018.</em>"
      >
        <b-button href="" variant="primary">Slides</b-button>
      </extra-item>
      <extra-item
          title="Designing Top Down so It Doesn't Crash Down - Applying Systems Engineering to FRC Robotics"
          subtitle="MD Robotics Alliance Education Day 2018 Seminar"
          desc="A presentation and discussion on how systems engineering might be included into a high-school FRC team, based on my experiences as the Lead Systems Engineer for FRC Team 2537. <em>Presented October 27, 2018.</em>"
      >
        <b-button href="" variant="primary">Slides</b-button>
        <b-button href="" variant="primary" style="margin-left: 1rem;">PID Demonstration</b-button>
      </extra-item>
    </b-card-group>
  </div>
</template>

<script>
import ExtraItem from '../components/ExtraItem.vue';
import NavigationMenu from "../components/NavigationMenu";

export default {
  name: "Extras",
  components: {
    NavigationMenu,
    ExtraItem
  }
}
</script>

<style scoped>
#extras {
  margin: 5rem 2rem 2rem;
}
</style>