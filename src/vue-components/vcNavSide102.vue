<template>
<div>
  <!-- begin vcnavSide102 -->
  <nav class="vcnavSide102" role="navigation">
    <h3 class="vcnavSide102_heading">Nav Title</h3>
    <ul>
      <li v-for="(i, index) in links">
        <div class="vcnavSide102_img-holder">
          <img :src="i.linkImgSrc" :alt="i.linkImgAlt" :title="i.linkImgTitle">
        </div>
        <a :href="i.link" tabindex="0" aria-setsize="3" :aria-posinset="index + 1">{{ i.linkText }}</a>
      </li>
    </ul>
  </nav>
  <!-- end vcnavSide102 -->
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
          linkImgSrc: "images/x.jpg",
          linkImgAlt: "",
          linkImgTitle: ""
        },
        {
          link: "http://",
          linkText: "Link Two",
          linkImgSrc: "",
          linkImgAlt: "",
          linkImgTitle: ""
        },
        {
          link: "http://",
          linkText: "Link Three",
          linkImgSrc: "",
          linkImgAlt: "",
          linkImgTitle: ""
        },
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