// composables/useCasinoJackpotApi.ts

interface JackpotEntry {
  name: string
  amount: number
  // Include other fields if needed (e.g., id, timestamp, etc.)
}

export const useCasinoJackpotApi = async () => {
  const { data, pending, error } = await useFetch<JackpotEntry[]>('https://jackpots.desdev.co')

  const jackpot = computed(() => {
    const jackpots = data.value || []

    const filtered = jackpots.filter(
      (item) => item.name === 'Atlantean Treasures: Mega Moolah'
    )

    const latest = filtered.sort((a, b) => b.amount - a.amount)[0]

    return latest ? latest.amount : null
  })

  return {
    jackpot,
    pending,
    error,
  }
}
