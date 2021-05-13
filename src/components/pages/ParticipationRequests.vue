<template>
  <!-- Page Content -->
  <!-- This page will display all requests by different participants in realtime -->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">Participation Requests</h1>

          <router-link
            to="/participationRequest/5"
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
              <hr />
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
              <hr />
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
                  <bold>Head of Student Welfare(Joshua rimi)</bold>
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

              <!-- /.table-responsive -->
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
  name: "ParticipationRequests",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

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
div.media:hover {
  background-color: #15131359;
}
</style>
