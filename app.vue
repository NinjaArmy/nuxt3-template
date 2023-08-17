<script setup lang="ts">
/* 
  Imports for Leaflet are needed
  TODO: Only load leaflet when accepted 
*/
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

/* Cookie package || Own Cookie Consent */
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions
} = useCookieControl();

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('google-analytics') &&
        current?.includes('google-analytics'))
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true }
)

/* Leaflet */
const zoom = ref(20);
</script>
<template>
  <div>
    <div style="height:100vh; width:100vw">
      <LMap ref="map" :zoom="zoom" :center="[51.506158677100395, 7.46998730314866]">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base" name="OpenStreetMap" />
        <LMarker :lat-lng="[51.506158677100395, 7.469987303148664]">
          <LTooltip>
            lol
          </LTooltip>
        </LMarker>
      </LMap>
    </div>
    <NuxtWelcome />
    <CookieControl locale="en" />
  </div>
</template>
