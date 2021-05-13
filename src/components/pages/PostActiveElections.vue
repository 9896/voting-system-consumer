<template>
  <!-- Page Content -->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">PostActive Elections</h1>
          <table
            width="100%"
            class="table table-striped table-bordered table-hover"
            id="dataTables-example"
          >
            <thead>
              <tr>
                <th>Post</th>
                <th>Valid Participant</th>
                <th>Application date</th>
                <th>Election Date</th>
                <th>Announcement Date</th>
                <th>Number of Participants</th>
                <th>See Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd gradeX">
                <td>Head of Entertainment</td>
                <td>Any student</td>
                <td>2/3/2021- 22/3/2021</td>
                <td>25/3/2021</td>
                <td class="center">30/3/2021</td>
                <td class="center">96</td>
                <td>
                  <router-link to="/participants">
                    <i class="fa fa-users"></i>
                  </router-link>
                </td>
              </tr>

              <tr class="odd gradeX">
                <td>Head of Entertainment</td>
                <td>Any student</td>
                <td>2/3/2021- 22/3/2021</td>
                <td>25/3/2021</td>
                <td class="center">30/3/2021</td>
                <td class="center">96</td>
                <td>
                  <a href="#"><i class="fa fa-users"></i></a>
                </td>
              </tr>

              <tr class="odd gradeX">
                <td>Head of Entertainment</td>
                <td>Any student</td>
                <td>2/3/2021- 22/3/2021</td>
                <td>25/3/2021</td>
                <td class="center">30/3/2021</td>
                <td class="center">96</td>
                <td>
                  <a href="#"><i class="fa fa-users"></i></a>
                </td>
              </tr>

              <tr class="odd gradeX">
                <td>Head of Entertainment</td>
                <td>Any student</td>
                <td>2/3/2021- 22/3/2021</td>
                <td>25/3/2021</td>
                <td class="center">30/3/2021</td>
                <td class="center">96</td>
                <td>
                  <a href="#"><i class="fa fa-users"></i></a>
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
  name: "PostActiveElections",
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
