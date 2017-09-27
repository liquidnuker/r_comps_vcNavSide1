<template>
<div>
  <!--begin vcnavSide104-->
  <nav class="vcnavSide104" role="navigation">
    <h3 class="vcnavSide104_heading">Nav Title</h3>
    <ul>
      <li v-for="(i, index) in links">
        <div class="vcnavSide104_img-holder">
          <span>{{ i.icon }}</span>
        </div>
        <a :href="i.link" tabindex="0" aria-setsize="4" :aria-posinset="index + 1">{{ i.linkText }}</a>
      </li>
    </ul>
  </nav>
  <!--end vcnavSide104-->
</div>
</template>
<script>
export default {
  data () {
    return {   
      links: [
        {
          link: "http://",
          linkText: "Link One",
          icon: "1"
        },
        {
          link: "http://",
          linkText: "Link Two",
          icon: "2"
        },
        {
          link: "http://",
          linkText: "Link Three",
          icon: "3"
        },
        {
          link: "http://",
          linkText: "Link Four",
          icon: "4"
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