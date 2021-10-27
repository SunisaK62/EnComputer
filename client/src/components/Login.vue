<template>
    <div>
      <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" style="color: white">
        EnComputer
      </a>
    </nav>
      <div class="center">
        <h1> เข้าสู่ระบบ </h1>
        <form v-on:submit.prevent="onLogin">
            <p><input class="form-control" type="text" v-model="email" placeholder="Username" /></p>
            <p><input class="form-control" type="password" v-model="password" placeholder="Password" /></p>
            <p><button class="btn btn-primary btn btn-warning" style="padding: 3% 36%" type="submit" >เข้าสู่ระบบ </button></p>
            <div class="error" v-if="error">{{error}}</div>
        </form>
      </div>
    </div>
</template>
<script>

import AuthenService from '@/services/AuthenService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)

        this.$router.push({
          name: 'MainAdmin'
        })

        console.log(response);
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error
        this.email = ''
        this.password = ''
      }
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
}
.center {
  text-align: center;
  padding: 5% 40%;
}
.op {
  opacity: 0.3;
}
</style>
