export default defineEventHandler(async (event) => {
  try {
    const res = await $fetch('https://jackpots.desdev.co/')
    return res

  } catch (err) {
    console.error('Failed to fetch jackpot data:', err)
    return {
      error: 'Unable to fetch jackpot data',
    }
  }
})