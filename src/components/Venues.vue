<template>
    <div>
        Venues<br>
        
        <b>{{info}}</b>
        <p>{{token}}</p>
    </div>
    
</template>

<script>

export default {
  name: 'Venues',
  data () {
    return {
      info: null,// window.csrf_token
      token: null
    }
  },

  methods:{
    get_users_data: function () {
      this.$axios
        .get("http://127.0.0.1:8001/api/venues", {
           headers: {
           Authorization: "Bearer " + this.$store.getters.getAccessToken
          }
        })
        .then((response) => {
          this.info = response["data"];
          return this.info;
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
   mounted() {
    this.get_users_data();
  }

}
</script>