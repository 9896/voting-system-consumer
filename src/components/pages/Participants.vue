<template>
  <!-- Page Content -->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Applicants. (election state) (election post)
          </h1>
          <table
            width="100%"
            class="table table-striped table-bordered table-hover"
            id="dataTables-example"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Number of Votes</th>
                <th>Participant's Details</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd gradeX">
                <td>Juma nyaisari</td>
                <td>null</td>
                <td>
                  <router-link to="/participant/1">
                    <i class="fa fa-info-circle"></i>
                  </router-link>
                </td>
              </tr>

              <tr class="odd gradeX">
                <td>Juma nyaisari</td>
                <td>null</td>
                <td>
                  <a href="#"><i class="fa fa-info-circle"></i></a>
                </td>
              </tr>

              <tr class="odd gradeX">
                <td>Juma nyaisari</td>
                <td>null</td>
                <td>
                  <a href="#"><i class="fa fa-info-circle"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- /.table-responsive -->
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
  name: "Participants",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
