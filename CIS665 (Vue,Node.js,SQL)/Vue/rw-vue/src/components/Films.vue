<template>
    <div>
        <h1>Films</h1>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <!-- filmPK,title,pitch-text,rating -->
                     <th>FilmPK</th>
                     <th>Title</th>
                     <th>Pitch Text</th>
                     <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="aFilm in theFilms" :key="aFilm.FilmPK">
                    <td>{{ aFilm.FilmPK }}</td>
                    <td>{{ aFilm.MovieTitle }}</td>
                    <td>{{ aFilm.PitchText }}</td>
                    <td>{{ aFilm.Rating }}</td>
                    <td>
                        <router-link :to="`/films/${aFilm.FilmPK}`">
                            <button class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    computed:{
        theFilms(){
            return this.$store.state.films;
        }
    }
};
</script>
<style></style>