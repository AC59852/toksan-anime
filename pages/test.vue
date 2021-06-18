<template>
  <section id="onePunch">
      <button @click="n++" :disabled="n >= allData.length - 1">forward</button>
      <button @click="n--" :disabled="n <= 0">backward</button>
            <div class="transitionTest">
                <transition-group name="my-transition">
                <div v-if="n == 0" :key="0">
                    <div>
                        <h1>{{ allData[0].name }}</h1>
                    </div>
                </div>
                <div v-else-if="n == 1" :key="1">
                    <div>
                        <h2>{{ allData[1].name }}</h2>
                    </div>
                </div>
                </transition-group>
            </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            n: 0,

            show: true,

            allData: [
                {id: 0, name: 'data1'},
                {id: 1, name: 'data2'},
                {id: 2, name: 'data3'}
            ]
        }
    },

}
</script>

<style>

</style>