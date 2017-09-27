<template>
<div>
  <!-- begin vcnavSide101 -->
  <nav class="vcnavSide101" role="navigation">
    <h3 class="vcnavSide101_heading">Nav Title</h3>
    <ul>
      <li v-for="(i, index) in links">
      <a :href="i.link" tabindex="0" aria-setsize="5" :aria-posinset="index+1">{{ i.linkText }}</a>
      </li>
    </ul>
  </nav>
  <!-- end vcnavSide101 -->
</div>
</template>
<script>
export default {
  data () {
    return {   
      links: [
        {
          link: "http://",
          linkText: "Link One"
        },
        {
          link: "http://",
          linkText: "Link Two"
        },
        {
          link: "http://",
          linkText: "Link Three"
        },
        {
          link: "http://",
          linkText: "Link Four"
        },
        {
          link: "http://",
          linkText: "Link Five"
        }
      ]
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    // console.log(".vue mounted");
  },
  methods: {        
  }
}
</script>