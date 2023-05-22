<script lang="ts" setup>

import { fetch } from '~/utils/request';
import useCounterStore from '~/store/counter';
const store = useCounterStore()
const doubleValue = computed(() => store.doubleCount)



onMounted(() => {

  console.log(store)
  fetch({
    url: 'get-user'
  }).then(res => {
    // console.log(res)
  }).catch((res)=>{
    // console.log(res)
  })
})

</script>

<template>
  <div class="bg p-[5px] md:p-12">
    <h2>{{doubleValue}}</h2>

    <button  @click="store.increment"  class="w-44 border-2 rounded-md text-lg">click</button>


    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <nuxt-img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.png" alt="Modern building architecture"></nuxt-img>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <nuxt-img fit="contain" class="h-48 w-full  md:h-full md:w-48" src="/img/Image.png" alt="Modern building architecture"/>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped lang="scss">

.bg {
  background: $primary-color;
  //font-size: px2rem(14px);
  color: #fff;
}

</style>
