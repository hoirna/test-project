<template>
  <nav class="relative bg-black text-white">
    <div class="flex items-stretch bg-[#E4B764] w-full px-0 py-0" style="border-radius: 0 0 0px 0;">
      <div class="flex items-center relative z-10">
        <div class="bg-black rounded-tr-[60px] px-14 flex items-center">
          <span class="text-[45px] font-semibold tracking-tight leading-none mt-8">LOGO</span>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-between pl-5 pr-8">
        <div class="flex items-center space-x-8">
          <div class="relative group">
            <a href="#" class="text-black font-medium hover:text-yellow-900">LIVE SCHEDULE</a>
            <div class="absolute left-0 top-full hidden group-hover:flex flex-col bg-white bg-opacity-60 text-black px-4 py-2 rounded shadow-lg z-50 space-y-1">
              <a href="#" class="flex items-center space-x-2  whitespace-nowrap hover:text-yellow-400">
                <Icon name="mdi:football" class="w-4 h-4" />
                <span>FOOTBALL</span>
              </a>
              <a href="#" class="flex items-center space-x-2  whitespace-nowrap hover:text-yellow-400">
                <Icon name="mdi:billiards" class="w-4 h-4" />
                <span>BILLIARDS</span>
              </a>
              <a href="#" class="flex items-center space-x-2  whitespace-nowrap hover:text-yellow-400">
                <Icon name="mdi:basketball" class="w-4 h-4" />
                <span>BASKETBALL</span>
              </a>
              <a href="#" class="flex items-center space-x-2  whitespace-nowrap hover:text-yellow-400">
                <Icon name="mdi:controller-classic" class="w-4 h-4" />
                <span>E-SPORTS</span>
              </a>
              <a href="#" class="flex items-center space-x-2  whitespace-nowrap hover:text-yellow-400">
                <Icon name="mdi:cards" class="w-4 h-4" />
                <span>CASINO</span>
              </a>
            </div>
          </div>
          <a href="#" class="text-black font-medium hover:text-yellow-900">MATCH SCHEDULE</a>
          <a href="#" class="text-black font-medium hover:text-yellow-900">BETTING ODDS</a>
          <a href="#" class="text-black font-medium hover:text-yellow-900">RESULTS</a>
          <a href="#" class="text-black font-medium hover:text-yellow-900">CHAT ROOM</a>
          <a href="#" class="text-black font-medium hover:text-yellow-900">NEWS</a>
        </div>
        <div class="flex items-center space-x-3">
          <div v-if="!isSignedIn" class="flex items-center space-x-3">
            <button class="bg-white text-black font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100">SIGN UP</button>
            <button @click="toggleSignIn" class="bg-black text-yellow-200 font-bold px-6 py-2 rounded-full shadow border border-yellow-600 hover:bg-yellow-700 hover:text-black transition">LOG IN</button>
          </div>
          <div v-else class="flex items-center rounded-full space-x-2 bg-black px-2 py-1">
            <div class="flex items-center space-x-1">
              <div class="flex items-center bg-white text-black rounded-full px-2 py-1">
                <Icon name="mdi:coin" class="w-4 h-4 mr-1" />
                <span>1000</span>
              </div>
              <div class="flex items-center bg-black text-yellow-300 rounded-full px-2 py-1">
                <Icon name="mdi:bell" class="w-4 h-4 mr-1" />
                <span>10</span>
              </div>
              <div class="flex items-center bg-black text-yellow-300 rounded-full px-2 py-1">
                <Icon name="mdi:email" class="w-4 h-4 mr-1" />
                <span>2</span>
              </div>
              <div class="relative group">
                <div class="flex items-center bg-black text-white rounded-full px-2 py-1">
                  <Icon name="mdi:account-circle" class="w-6 h-6 text-white" />
                </div>
                <div class="absolute right-0 top-full hidden group-hover:flex flex-col bg-white bg-opacity-60 text-black px-4 py-2 rounded shadow-lg z-50 space-y-1">
                  <a href="#" class="flex items-center space-x-2  whitespace-nowrap hover:text-yellow-400">
                    <span>My Profile</span>
                  </a>
                  <a href="#" class="flex items-center space-x-2 whitespace-nowrap hover:text-yellow-400">
                    <Icon name="mdi:cog" class="w-4 h-4" />
                    <span>Settings</span>
                  </a>
                  <a href="#" @click="toggleSignIn" class="flex items-center space-x-2 whitespace-nowrap hover:text-yellow-400">
                    <Icon name="mdi:logout" class="w-4 h-4" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex justify-between items-center bg-black text-white w-full px-14 py-2 pl-64">
      <div class="flex items-center space-x-8 pr-8">
        <a href="#" class="text-white font-medium hover:text-yellow-900 flex items-center space-x-2">
          <Icon name="mdi:newspaper" class="w-5 h-5" />
          <span>News Feed</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-white font-medium hover:text-yellow-900">
          <Icon name="mdi:video" class="w-5 h-5" />
          <span>Reels</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-white font-medium hover:text-yellow-900">
          <Icon name="mdi:play" class="w-5 h-5" />
          <span>Highlight</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-white font-medium hover:text-yellow-900">
          <Icon name="mdi:chart-bar" class="w-5 h-5" />
          <span>Betting Tips</span>
        </a>
        <a href="#" class="flex items-center space-x-2 text-white font-medium hover:text-yellow-900">
          <Icon name="mdi:filmstrip" class="w-5 h-5" />
          <span>Movies</span>
        </a>
        <a class="flex items-center space-x-2 text-white font-medium hover:text-yellow-900">
          <Icon name="mdi:flag" class="w-5 h-5" />
          <span>Community</span>
        </a>
      </div>
      <div class="flex items-center space-x-4">
        <div class="bg-white text-black rounded-full px-2 py-1 font-medium hover:text-yellow-900 flex items-center space-x-2">
          <Icon name="mdi:earth" class="w-5 h-5" />
          <span>Language</span>
        </div>
        <div class="relative inline-flex items-center">
          <div class="w-10 h-5 bg-yellow-400 rounded-full shadow-inner"></div>
          <div class="absolute w-5 h-5 bg-yellow-700 rounded-full shadow translate-x-5"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

export default defineComponent({
  name: 'Navbar',
  setup() {
    const isSignedIn = ref(false)

    const toggleSignIn = () => {
      isSignedIn.value = !isSignedIn.value
    }

    return {
      isSignedIn,
      toggleSignIn
    }
  }
})
</script>

<style scoped>
</style>