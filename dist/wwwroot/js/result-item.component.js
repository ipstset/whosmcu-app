Vue.component('result-item', {
    props: ['item'],
    data: function () {
        return {
          isExpanded: false,
        }
      },
    template: `
    <div>
        <div class="row">
            <!--<div class="column column-10">
                <div style="height: 75px; width: 75px; background-color: #ccc;"></div>
            </div>-->
            <div class="column">
                <h3 class="wm-margin-bottom--0">{{ item.fullName }}</h3>
                <span>{{ item.characterNames }}</span>
            </div>
            <div class="column column-25">
                <span>Movies: {{ item.movieCount }}</span>
            </div>
        </div>
        <div class="row">
            <div class="column">
               <button v-on:click="isExpanded = !isExpanded" class="button button-clear wm-padding--0">
                    <span v-if="!isExpanded"><i class="fa fa-chevron-right" aria-hidden="true"></i> Show details</span>
                    <span v-else><i class="fa fa-chevron-down" aria-hidden="true"></i> Hide details</span>
               </button>
            </div>
        </div>
        <div class="row" v-if="isExpanded">
            <div class="column">
                <div v-for="character in item.characters" style="margin-bottom: 5px; margin-top: 5px;">
                    <div class="row">
                        <!--<div class="column column-10">
                            <div style="height: 40px; width: 40px; background-color: #ccc;"></div>
                        </div>-->
                        <div class="column">
                            <h4 class="wm-margin-bottom--0">{{ character.fullName }}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Movie Title</th>
                                        <th>Release Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="movie in character.movies">
                                        <td>{{ movie.title }}</td>
                                        <td>{{ movie.releaseDate | moment }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
  })