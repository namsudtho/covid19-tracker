<template>
  <div class="flex flex-col h-screen">
    <header class="p-4 bg-blue-800 flex flex-col justify-center">
      <div class="mx-auto flex items-center gap-2">
        <img src="images/virus-2.png" class="w-10" />
        <span class="text-3xl text-white font-medium leading-tight">Covid-19 Tracker</span>
      </div>
      <div class="mx-auto text-sm leading-tight">
        <span class="text-white">API by</span>
        <a href="//easysunday.com" class="text-blue-300 hover:underline" target="_blank">easysunday.com</a>
      </div>
    </header>

    <main class="flex-grow bg-gray-200 py-10 px-6">
      <div class="mx-auto max-w-4xl">
        <div class="mb-4 text-blue-700 text-right">ข้อมูลอัพเดทล่าสุด {{ cases.UpdateDate }}</div>
        <div class="grid grid-cols-2 gap-6">
          <div class="col-span-2 py-6 pr-16 bg-white rounded-lg shadow flex justify-center gap-6">
            <div>
              <img src="images/virus-red.png" class="w-12" />
            </div>
            <div class="text-center">
              <div class="text-red-400 text-sm">ผู้ป่วยรายใหม่วันนี้</div>
              <div class="text-4xl text-red-500 font-semibold tracking-wide">{{ numberFormat(cases.NewConfirmed) }}</div>
              <div class="text-red-400">ผู้ป่วยสะสม {{ numberFormat(cases.Confirmed) }}</div>
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 py-6 pr-16 bg-white rounded-lg shadow flex justify-center gap-4">
            <div>
              <img src="images/virus-green.png" class="w-12" />
            </div>
            <div class="text-center">
              <div class="text-green-400 text-sm">หายป่วยแล้ววันนี้</div>
              <div class="text-4xl text-green-500 font-semibold tracking-wide">{{ numberFormat(cases.NewRecovered) }}</div>
              <div class="text-green-400">หายป่วยสะสม {{ numberFormat(cases.Recovered) }}</div>
            </div>
          </div>
          <div class="col-span-2 md:col-span-1 py-6 pr-16 bg-white rounded-lg shadow flex justify-center gap-4">
            <div>
              <img src="images/virus-gray.png" class="w-12" />
            </div>
            <div class="text-center">
              <div class="text-gray-500 text-sm">เสียชีวิตวันนี้</div>
              <div class="text-4xl text-gray-600 font-semibold tracking-wide">{{ numberFormat(cases.NewDeaths) }}</div>
              <div class="text-gray-500">เสียชีวิตสะสม {{ numberFormat(cases.Deaths) }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-white">
      <div class="mx-auto max-w-4xl px-6 py-4 flex justify-between items-center">
        <div class="text-gray-700 text-sm">Copyright 2021. All rights reserved.</div>
        <div class="flex gap-3">
          <a href="mailto:namsudtho@outlook.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="fill-gray-700 w-6"><path fill="currentColor" d="M53.42,53.32H10.58a8.51,8.51,0,0,1-8.5-8.5V19.18a8.51,8.51,0,0,1,8.5-8.5H53.42a8.51,8.51,0,0,1,8.5,8.5V44.82A8.51,8.51,0,0,1,53.42,53.32ZM10.58,13.68a5.5,5.5,0,0,0-5.5,5.5V44.82a5.5,5.5,0,0,0,5.5,5.5H53.42a5.5,5.5,0,0,0,5.5-5.5V19.18a5.5,5.5,0,0,0-5.5-5.5Z"/><path fill="#222" d="M32,38.08a8.51,8.51,0,0,1-5.13-1.71L3.52,18.71a1.5,1.5,0,1,1,1.81-2.39L28.68,34a5.55,5.55,0,0,0,6.64,0L58.67,16.32a1.5,1.5,0,1,1,1.81,2.39L37.13,36.37A8.51,8.51,0,0,1,32,38.08Z"/><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62L21.57 30.11a1.5 1.5 0 0 1 2 2.24L5.17 48.76A1.46 1.46 0 0 1 4.17 49.14zM59.83 49.14a1.46 1.46 0 0 1-1-.38L40.43 32.35a1.5 1.5 0 1 1 2-2.24L60.82 46.52a1.5 1.5 0 0 1-1 2.62z"/></svg>
          </a>
          <a href="//https://github.com/namsudtho" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="text-gray-700 w-6"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 .5C3.859.5.5 3.866.5 8.02a7.518 7.518 0 0 0 5.13 7.134c.375.069.512-.163.512-.362 0-.179-.007-.651-.01-1.279-2.086.454-2.527-1.008-2.527-1.008-.341-.868-.832-1.1-.832-1.1-.681-.467.052-.457.052-.457.752.053 1.148.775 1.148.775.669 1.149 1.755.817 2.183.625.068-.486.262-.817.476-1.005-1.665-.19-3.416-.835-3.416-3.716 0-.821.292-1.492.772-2.018-.078-.191-.336-.955.072-1.991 0 0 .63-.202 2.063.771A7.16 7.16 0 0 1 8 4.136a7.173 7.173 0 0 1 1.878.253c1.432-.973 2.06-.771 2.06-.771.409 1.035.152 1.799.075 1.99.481.526.771 1.197.771 2.018 0 2.888-1.754 3.524-3.424 3.71.269.232.509.691.509 1.392 0 1.005-.009 1.816-.009 2.063 0 .201.135.435.516.361A7.518 7.518 0 0 0 15.5 8.02C15.5 3.866 12.142.5 8 .5z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cases: {}
    }
  },

  beforeMount() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const cases = await this.$axios.$get('https://static.easysunday.com/covid-19/getTodayCases.json')
      this.cases = cases
    },

    numberFormat(value) {
      return Number(value || 0).toLocaleString('th-TH')
    }
  }
  
}
</script>
