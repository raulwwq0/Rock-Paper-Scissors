<template>
    <header id="header">
        <h1>Rock Paper Scissors</h1>
        <div id="score-box">
            Score

            <span id="score">{{ $store.state.counter }}</span>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',

}
</script>