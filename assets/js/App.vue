<template>
    <div id="app">
        <h2>{{ trans.subtitle_hello }}</h2>
        <hello></hello>
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import Translator from 'bazinga-translator'

    class TestClassSyntax {

    }

    export default {
        name: 'app',
        components: {
            Hello
        },
        data () {
            return {
                trans: {
                    subtitle_hello: Translator.trans('test Subtitle Hello', {}, 'messages')
                }
            }
        }
    }
</script>