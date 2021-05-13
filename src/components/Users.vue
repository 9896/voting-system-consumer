<template>
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">Participation Requests</h1>

          <router-link
            to="/participationRequest/1"
            style="text-decoration: none; color: black"
            class="request"
          >
            <div class="media">
              <div class="media-body">
                <p>
                  <bold>Head of Student Welfare(Joshua Murimi)</bold>
                  <span class="reqBrief"
                    >Cras sit amet nibh libero, in gravida null...</span
                  >
                  <span
                    class="badge badge-primary vb"
                    style="background-color: blue"
                    >unread</span
                  >
                </p>
              </div>
              <hr>
            </div>
            <!-- media bootstrap component -->
          </router-link>
          <!-- Single Request link -->

          <router-link
            to=""
            style="text-decoration: none; color: black"
            class="request"
          >
            <div class="media">
              <div class="media-body">
                <p>
                  <bold>Head of Student Welfare(Joshua Murimi)</bold>
                  <span class="reqBrief"
                    >Cras sit amet nibh libero, in gravida null...</span
                  >
                  <span
                    class="badge badge-primary vb"
                    style="background-color: blue"
                    >unread</span
                  >
                </p>
              </div>
              <hr>
            </div>
            <!-- media bootstrap component -->
          </router-link>
          <!-- Single Request link -->

          <router-link
            to=""
            style="text-decoration: none; color: black"
            class="request"
          >
            <div class="media">
              <div class="media-body">
                <p>
                  <bold>Head of Student Welfare(Joshua Murimi)</bold>
                  <span class="reqBrief"
                    >Cras sit amet nibh libero, in gravida null...</span
                  >
                  <span
                    class="badge badge-primary vb"
                    style="background-color: blue"
                    >unread</span
                  >
                </p>
              </div>
              <hr>
            </div>
            <!-- media bootstrap component -->
          </router-link>
          <!-- Single Request link -->
        </div>
        <!-- /.col-lg-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
</template>
<script>
export default {
  name: "Users",

  data: function () {
    return {
      access_token: "",
      user_data: "",
    };
  },

  methods: {
    get_users_data: function () {
      this.$axios
        .get("http://127.0.0.1:8001/api/users", {
          headers: {
            Authorization: "Bearer " + this.$store.getters.getAccessToken,
          },
        })
        .then((response) => {
          this.user_data = response["data"];
          return this.user_data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
  mounted() {
    this.get_users_data();
  },
};
</script>
<style scoped>
.request {
  background-color: gray;
  font-size: 18px;
  font-weight: 18em;
}
bold {
  display: inline-block;
  width: 23em;
}
</style>