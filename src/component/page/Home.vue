<template>
  <div class="home">
    <header-part></header-part>
    <slider-part></slider-part>
    <section-part></section-part>
    <property-part></property-part>
    <point-part></point-part>
    <footer-part></footer-part>
  </div>
</template>

<script>
import header from "../TheHeader.vue";
import section from "../TheSection.vue";
import slider from "../TheSliders.vue";
import footer from "../TheFooter.vue";
import property from "../TheProperties.vue";
import point from "../ThePoint";

export default {
  components: {
    HeaderPart: header,
    SectionPart: section,
    SliderPart: slider,
    FooterPart: footer,
    PropertyPart: property,
    PointPart:point
  },
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(8, minmax(min-content, 14rem))
    [center-end] 1fr [full-end];
  grid-template-rows: calc(100vh - 8rem) repeat(5,min-content);  
}
</style>
