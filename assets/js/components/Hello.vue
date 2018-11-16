<template>
    <div class="hello">
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
    import Translator from 'bazinga-translator'

    export default {
        name: 'hello',
        data () {
            return {
                msg: Translator.trans('Welcome to Your Vue.js App', {}, 'messages')
            }
        }
    }
</script>
