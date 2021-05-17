<template>
  <!-- Page Content -->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">PreActive Elections</h1>
          <!-- <button @click="getPreActiveElections">Shuffle!</button> -->
          <span v-if="requestState !== null">
          <p
            v-if="
              Object.prototype.hasOwnProperty.call(requestState, 'Revoked') == true
            "
            style="color: red"
          >
            Your request to vie for this post was revoked
          </p>
          <p
            v-if="
              Object.prototype.hasOwnProperty.call(requestState, 'Accepted') == true
            "
            style="color: green"
          >
            You have an accepted request, you can only vie for one post at a
            time
          </p>
          <p
            v-if="
              Object.prototype.hasOwnProperty.call(requestState, 'Pending') == true
            "
            style="color: red"
          >
            You still have a pending request
          </p>
          </span>
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
                <th>Send Participation Request</th>
                <th>See Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd gradeX"
                v-for="election in preActiveElections"
                v-bind:key="election.id"
              >
              <!-- Carrying out vuejs code in the open due to unknown alternative -->
                <p hidden>{{ (elec_id = election.id) }}</p>
                <td>{{ election.election_title }}</td>
                <td
                  v-if="election.faculty == null && election.department == null"
                >
                  Any student
                </td>
                <td
                  v-else-if="
                    election.faculty != null && election.department == null
                  "
                >
                  Faculty Of {{ election.faculty }}
                </td>
                <td
                  v-else-if="
                    election.department != null && election.faculty == null
                  "
                >
                  Department of {{ election.department }}
                </td>
                <!-- <td v-if="">Any student{{election.faculty}}</td> -->
                <td>
                  {{ election.application_start }} -
                  {{ election.application_end }}
                </td>
                <td>
                  {{ election.election_start }} - {{ election.election_end }}
                </td>
                <td class="center">{{ election.election_end }}</td>
                <td class="center">96</td>
                <td class="center">
                  <button
                    class="btn btn-primary"
                    v-if="
                      user.faculty == election.faculty ||
                      user.department == election.department ||
                      (election.faculty == null && election.department == null)
                    "
                    @click="sendParticipationRequest"
                  >
                    Send Request
                  </button>
                </td>
                <td>
                  <router-link to="/participants">
                    <i class="fa fa-users">see</i>
                  </router-link>
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
  name: "PreActiveElections",
  data() {
    return {
      preActiveElections: [],
      user: this.$store.getters.getUser,
      elec_id: undefined,
      requestState: null,
    };
  },
  methods: {
    getPreActiveElections: function () {
      this.$axios
        .get("http://127.0.0.1:8002/api/elections", {
          headers: {
            Authorization: "Bearer " + this.$store.getters.getAccessToken,
          },
        })
        .then((response) => {
          var elections = response["data"];
          /**
           * Filter election results to only get preACtive elections
           * Note at the very end this has been passed in meaning the vue instance will be used as 'this'
           */
          elections.forEach(function (item) {
            if (item.state == "pre_active") {
              this.preActiveElections.push(item);
            }
          }, this);
          console.log(this.preActiveElections);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    sendParticipationRequest: function () {
      this.$axios
        .post(
          "http://127.0.0.1:8002/api/requests",
          {
            user_id: this.user.id,
            election_id: this.elec_id,
          },
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.getAccessToken,
            },
          }
        )
        .then((response) => {
          this.requestState = response["data"];
          /**TESTTTTTTT */
          console.log(this.requestState);
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
  mounted() {
    this.getPreActiveElections();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
