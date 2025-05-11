<template>
  <div class="header blog-header section-padding pb-0" style="padding-top: 4rem;">
    <div class="container mt-80">
      <div class="row">
        <div class="col-lg-11">
          <div class="caption">
            <h1 class="fz-55 mt-30">
              {{ titleLabel?.title || 'Đang tải...' }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  titleLabel: {
    type: Object,
    required: true,
  },
});
</script>
