<template>
  <div >
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" style="color: white">
        EnComputer
      </a>
    </nav>

    <div class="center">
      <h1>ยินดีต้อนรับเข้าสู่!!</h1>
      <h1>ร้าน EnComputer</h1>
      <div class="jumbotron">
        <h1 class="display-4">บริการติดตั้ง Programs</h1>
        <p class="lead">
          เมื่อทำการนัดหมายสำเร็จแล้ว ให้นำคอมพิวเตอร์ของตนเองมาที่ ร้าน EnComputer ชั้น 1 
          เวลา 10.00 - 19.00 น. ในวันที่ทำการนัดหมายไว้
        </p>
        <hr class="my-4" />
        <button
          class="btn btn-info"
          v-on:click="navigateTo('/program/create')"
          role="button"
        >
          สร้างการนัดหมาย
        </button>
      </div>
      <div class="jumbotron">
        <h1 class="display-4">บริการติดตั้งระบบปฏิบัติการ Windows</h1>
        <p class="lead">
          เมื่อทำการนัดหมายสำเร็จแล้ว ให้นำคอมพิวเตอร์ของตนเองมาที่ ร้าน EnComputer ชั้น 2  
          เวลา 10.00 - 19.00 น. ในวันที่ทำการนัดหมายไว้
        </p>
        <hr class="my-4" />
        <button
          class="btn btn-info"
          v-on:click="navigateTo('/win/create')"
          role="button"
        >
          สร้างการนัดหมาย
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.center {
  text-align: center;
  padding: 5%;
}
</style>