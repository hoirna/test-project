<template>
  <div class="bg-gray-200 p-4">
    <div class="flex justify-end items-center mb-4 mt-12 space-x-2">
      <button 
        @click="toggleView" 
        class="text-sm text-gray-600 hover:text-yellow-600"
      >
        {{ showAll ? 'Show less' : 'See all' }}
      </button>
      <button 
        v-if="!showAll" 
        class="text-yellow-600 hover:text-yellow-800"
      >
        ›
      </button>
    </div>
    
    <div v-if="!showAll" class="relative">
      <button 
        @click="scrollLeft" 
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100"
      >
        ‹
      </button>
      <div 
        ref="matchesContainer"
        class="flex overflow-x-auto space-x-4 scrollbar-hide pl-8 pr-8"
      >
        <div 
          v-for="(match, index) in matches" 
          :key="index" 
          class="min-w-[300px] w-[200px] h-[225px] bg-white rounded-2xl shadow-md overflow-hidden relative flex flex-col flex-shrink-0"
        >
          <img :src="match.image" alt="Match" class="w-full h-40 object-cover">
          
          <div class="flex-1 bg-[#F8E889] rounded-lg p-3 flex flex-col relative">
            <div class="text-center font-medium text-gray-700 mb-1">
              {{ match.teamA.name }} vs {{ match.teamB.name }}
            </div>
            <div class="text-center text-sm text-gray-600 mb-3">
              {{ match.subtitle }}
            </div>

            <div v-if="match.live" class="absolute bottom-8 right-3 bg-red-500 rounded-lg p-2 flex items-center">
              <span class="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
              <span class="text-yellow-300 text-xs font-medium">LIVE</span>
            </div>
            
            <div v-if="!match.live" class="absolute bottom-6.5 right-3 bg-black rounded-lg p-2">
              <button class="text-yellow-300 transition-colors">
                <Icon name="mdi:bell-outline" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button 
        @click="scrollRight" 
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100"
      >
        ›
      </button>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="(match, index) in matches" 
        :key="index" 
        class="bg-white rounded-2xl shadow-md overflow-hidden relative flex flex-col"
      >
        <img :src="match.image" alt="Match" class="w-full h-40 object-cover">
        
        <div class="flex-1 bg-[#F8E889] rounded-lg p-3 flex flex-col relative">
          <div class="text-center font-medium text-gray-700 mb-1">
            {{ match.teamA.name }} vs {{ match.teamB.name }}
          </div>
          <div class="text-center text-sm text-gray-600 mb-3">
            {{ match.subtitle }}
          </div>

          <div v-if="match.live" class="absolute bottom-8 right-3 bg-red-500 rounded-lg p-2 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
            <span class="text-yellow-300 text-xs font-medium">LIVE</span>
          </div>
          
          <div v-if="!match.live" class="absolute bottom-6.5 right-3 bg-black rounded-lg p-2">
            <button class="text-yellow-300 transition-colors">
              <Icon name="mdi:bell-outline" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAll = ref(false)
const matchesContainer = ref(null)

const toggleView = () => {
  showAll.value = !showAll.value
}

const scrollLeft = () => {
  if (matchesContainer.value) {
    matchesContainer.value.scrollBy({
      left: -300,
      behavior: 'smooth'
    })
  }
}

const scrollRight = () => {
  if (matchesContainer.value) {
    matchesContainer.value.scrollBy({
      left: 300,
      behavior: 'smooth'
    })
  }
}

const matches = ref([
  {
    teamA: { name: 'Team A' },
    teamB: { name: 'Team B' },
    subtitle: 'BLV NONAME',
    image: '/images/image-1.webp',
    live: true,
  },
  {
    teamA: { name: 'Team C' },
    teamB: { name: 'Team D' },
    subtitle: 'BLV ANOTHER',
    image: '/images/image-2.webp',
    live: false,
  },
  {
    teamA: { name: 'Team E' },
    teamB: { name: 'Team F' },
    subtitle: 'BLV SOMEONE',
    image: '/images/image-2.webp',
    live: true,
  },
  {
    teamA: { name: 'Team G' },
    teamB: { name: 'Team H' },
    subtitle: 'BLV ANYONE',
    image: '/images/image-1.webp',
    live: false,
  },
  {
    teamA: { name: 'Team I' },
    teamB: { name: 'Team J' },
    subtitle: 'BLV EVERYONE',
    image: '/images/image-1.webp',
    live: true,
  },
  {
    teamA: { name: 'Team K' },
    teamB: { name: 'Team L' },
    subtitle: 'BLV SOMEONE ELSE',
    image: '/images/image-2.webp',
    live: false,
  },
])
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>