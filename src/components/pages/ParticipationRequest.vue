<template>
  <!-- Page Content -->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Participation Request
          </h1>
          <img
            src="../../assets/prof.png"
            class="img-fluid prof"
            alt="..."
            height="auto"
            width="100%"
          />

          <ul class="list-group list-group-flush">
            <li class="list-group-item list-header">
              <span class="lg header">Participant Details</span>
            </li>

            <li class="list-group-item">
              <span class="lg">Name :</span> Pastor Pious
            </li>
            <li class="list-group-item">
              <span class="lg">Vying For :</span> Sanitation and cleanliness
            </li>

            <li class="list-group-item">
              <span class="lg">Manifesto :</span> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Est facilis ipsam sunt atque numquam
              fugiat accusamus aperiam quibusdam neque pariatur! Error
              exercitationem explicabo minima ipsum debitis est mollitia
              necessitatibus esse?
            </li>
            <li class="list-group-item">
              <span class="lg">Faculty :</span> Science
            </li>
            <li class="list-group-item">
              <span class="lg">Course :</span> Computer Science
            </li>
            <li class="list-group-item"><span class="lg">Year :</span> III</li>
            <li class="list-group-item">
              <span class="lg">Semester :</span> II
            </li>
            <li class="list-group-item">
              <span class="lg">Displinary Details :</span> Good
            </li>
            <li class="list-group-item">
              <span class="lg">Class attendance :</span> Good
            </li>
            <li class="list-group-item">
              <span class="lg">Academic Performance :</span> Good
            </li>
          </ul>
          <!-- list group holding vote relevant information -->

          <button type="button" class="btn btn-primary btn-md">
            Accept Request
          </button>
          <button type="button" class="btn btn-danger btn-md">
            Deny Request
          </button>
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
  name: "ParticipationRequest",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prof {
  border-radius: 50%;
  border: black solid;
  max-width: 100px;
  margin-bottom: 20px;
  padding: 5px;
}

.lg {
  width: 130px;
  display: inline-block;
  text-align: right;
  font-weight: bold;
}
.list-header{
text-align: center;
}
</style>
