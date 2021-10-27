<template>
    <div>
        <div class="center bg-light">
        <h2> แก้ไขข้อมูล</h2>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form v-on:submit.prevent = "editUser">
                            <p class="left">name: <input class="form-control" type="text" v-model="user.name"></p>
                            <p class="left">lastname: <input class="form-control" type="text" v-model="user.lastname"></p>
                            <p class="left">email: <input class="form-control" type="text" v-model="user.email"></p>
                            <p class="left">password: <input class="form-control" type="text" v-model="user.password"></p>
                            <p class="left">status : <input class="form-control" type="text" v-model="user.status"></p>
                            <p class="left">type : <input class="form-control" type="text" v-model="user.type"></p>
                            <p><button class="btn btn-outline-success" type="submit">บันทึก</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods:{
        async editUser(){
            try{
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        }catch(error){
            console.log(error)
        }
    }
}
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
.left {
  text-align: left;
}
</style>