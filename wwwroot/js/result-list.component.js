Vue.component('result-list', {
    props: ['actors'],
    template: `
    <!--results-->
    <div class="wm-margin-top--20">
        <h4 v-if="!actors || actors.length == 0">Nope.</h4>
        <div v-else>
            <h4>{{ actors.length }} results</h4>
            <ul class="wm-list-style--none">
                <li v-for="actor in actors" class="wm-margin-v--10" style="margin-left: -40px;">
                    <div class="row">
                        <div class="col-2">
                            <div style="width: 75px; height: 75px; background-color: #ccc;"></div>
                        </div>
                        <div class="col-8">
                            <h4>{{ actor.fullName }}</h4>
                            <span>{{ actor.characterNames }}</span>
                        </div>
                        
                        <div class="col-2">
                            <span class="badge badge-pill badge-info">Movies: {{ actor.movieCount }}</span>
                        </div>
                    </div>
                    <div class="row" v-if="actor.characters && actor.characters.length > 0">
                        <div class="col-sm table-responsive">
                            <h5>Movies</h5>
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Release Date</th>
                                        <th>Character</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="movie in actor.movies">
                                        <td><div style="width: 50px; height: 50px; background-color: #ccc;"></div></td>
                                        <td>{{ movie.title }}</td>
                                        <td>{{ movie.releaseDate | moment }}</td>
                                        <td>{{ movie.characterName }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!--results end-->`
  })