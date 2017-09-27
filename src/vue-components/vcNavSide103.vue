<template>
<div>
  <!--begin vcnavSide103-->
  <nav class="vcnavSide103" role="navigation">
    <h3 class="vcnavSide103_heading">Nav Title</h3>
    <ul>
      <li v-for="(i, index) in links">
        <div class="vcnavSide103_img-holder">
          <img :src="i.linkImgSrc" :alt="i.linkImgAlt" :title="i.linkImgTitle">
        </div>
        <a :href="i.link" tabindex="0" aria-setsize="3" :aria-posinset="index + 1">
          {{ i.linkText }}
        </a>
        <p>{{ i.linkDescription }}</p>
      </li>
    </ul>
  </nav>
  <!--end vcnavSide103-->
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
          linkDescription: "Link Description",
          linkImgSrc: "images/x.jpg",
          linkImgAlt: "",
          linkImgTitle: ""
        },
        {
          link: "http://",
          linkText: "Link Two",
          linkDescription: "Link Description",
          linkImgSrc: "",
          linkImgAlt: "",
          linkImgTitle: ""
        },
        {
          link: "http://",
          linkText: "Link Three",
          linkDescription: "Link Description",
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