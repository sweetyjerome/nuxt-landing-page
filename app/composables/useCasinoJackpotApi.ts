// composables/useCasinoJackpotApi.ts

interface JackpotEntry {
  friendly_name: string
  jackpot_amount: number
}

export const useCasinoJackpotApi = () => {
  const data = ref<JackpotEntry[] | null>(null)
  const error = ref<Error | null>(null)
  const pending = ref(true)

  const fetchJackpot = async () => {
    try {
      const response = await $fetch<JackpotEntry[]>('/api/jackpots')
      data.value = response
    } catch (err) {
      error.value = err as Error
    } finally {
      pending.value = false
    }
  }

  onMounted(() => {
    fetchJackpot()
    //Call every 1 second
    const interval = setInterval(fetchJackpot, 1000)
    onUnmounted(() => {
      clearInterval(interval)
    })
  })

  const jackpot = computed(() => {
    //console.log('Computing latest jackpot', data.value)
    const jackpots = data.value || []
    const filtered = jackpots.filter(item => item.friendly_name === 'Atlantean Treasures: Mega Moolah')
    //console.log('Filtered jackpots:', filtered)
    const latest = filtered[0] //if there are duplicates, take the first one
    return latest ? latest.jackpot_amount : null
  })

 // watch(data, () => {
    //console.log('Computed jackpot updated watching:', jackpot.value)
  //})

  return {
    jackpot,
    data,
    pending,
    error,
  }
}
