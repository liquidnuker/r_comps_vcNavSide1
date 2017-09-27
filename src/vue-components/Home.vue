<template>
  <div>
  
  <!-- vcNavSide101 -->
  <h2 class="item-id">vcNavSide101</h2>
  <div class="row">
    <div class="col-sm-3 col-md-3 col-lg-3">
      <vcNavSide101 />
    </div>
    <div class="col-sm-9 col-md-9 col-lg-9">39</div>
  </div>

  <!-- vcNavSide102 -->
  <h2 class="item-id">vcNavSide102</h2>
  <div class="row">
    <div class="col-sm-3 col-md-3 col-lg-3">
      <vcNavSide102 />
    </div>
    <div class="col-sm-9 col-md-9 col-lg-9">39</div>
  </div>

  </div>
</template>
<script>
const vcNavSide101 = () => import ('./vcNavSide101.vue');
const vcNavSide102 = () => import ('./vcNavSide102.vue');
  export default {
    data () {
      return {    
      }
    },
    components: {
      vcNavSide101: vcNavSide101,
      vcNavSide102: vcNavSide102
    },
    mounted: function () {
      // console.log("Home.vue mounted");
    }
  }
</script>