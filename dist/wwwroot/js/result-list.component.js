Vue.component('result-list', {
    props: ['results'],
    template: `
    <div class="wm-margin-top--20" v-if="results">
        <h4 v-if="results.length == 0">Nope.</h4>
        <div v-else>
            <h4>{{ results.length }} results</h4>
            <ul class="wm-list-style--none">
                <li v-for="actor in results" class="wm-margin-v--10 wm-padding-v--10 wm-border-v">
                    <result-item v-bind:item="actor"></result-item>
                </li>
            </ul>
        </div>
    </div>
    `
  })